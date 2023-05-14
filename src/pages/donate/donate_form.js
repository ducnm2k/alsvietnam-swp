import React, { useContext, useEffect, useState } from "react";

import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Checkbox,
  Divider,
  Modal,
  Col,
  Card,
  Statistic,
  InputNumber,
} from "antd";
import tw from "twin.macro";
import DonateAPI from "service/donate_api";
import { FormattedMessage } from "react-intl";
import numeral from "numeral";
import Donor from "./donor";
import { render } from "@testing-library/react";
import { Context } from "components/Wrapper";
import { NumericFormat } from "react-number-format";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const Title = tw.h5`text-2xl font-bold text-gray-900`;
const Label = tw.h2`text-xl font-semibold`;
const Content = tw.span`text-lg`;
const Container = tw.div`grid grid-cols-4`;
const Row = tw.div`col-span-4 md:col-span-2 md:px-4`;

const FormDisabledDemo = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);
  const [honorDisabled, setHonorDisabled] = useState(true);
  const [privateMsgDisabled, setPrivateMsgDisabled] = useState(true);
  const [giftFromCompanyDisabled, setGiftFromCompanyDisabled] = useState(true);
  const [isBold, setIsBold] = useState("bold");
  const context = useContext(Context);
  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
        defaultValue={"86"}
      >
        <Select.Option value="86">+86</Select.Option>
        <Select.Option value="87">+87</Select.Option>
      </Select>
    </Form.Item>
  );

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [amount, setAmount] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [hideInfo, setHideInfo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [percentGeneral, setPercentGeneral] = useState();
  const [percentGeneralDisble, setPercentGeneralDisble] = useState(true);
  const [amountGenral, setAmountGeneral] = useState("0");
  const [amountGeneralDisable, setAmountGeneralDisable] = useState(true);

  const [percentWebsite, setPercentWebsite] = useState();
  const [percentWebsiteDisable, setPercentWebsiteDisable] = useState(true);
  const [amountWebsite, setAmountWebsite] = useState("0");
  const [amountWebsiteDisable, setAmountWebsiteDisable] = useState(true);

  const [percentDocument, setPercentDocument] = useState();
  const [percentDocumentDisable, setPercentDocumentDisable] = useState(true);
  const [amountDocument, setAmountDocument] = useState("0");
  const [amountDocumentDisable, setAmountDocumentDisable] = useState(true);

  const [percentStory, setPercentStory] = useState();
  const [percentStoryDisable, setPercentStoryDisable] = useState(true);
  const [amountStory, setAmountStory] = useState("0");
  const [amountStoryDisable, setAmountStoryDisable] = useState(true);

  const [generalFund, setGeneral] = useState();
  const [websiteFund, setWebsiteFund] = useState();
  const [documentFund, setDocumentFund] = useState();
  const [storyFund, setStoryFund] = useState();
  const [hiddenForm, setHiddenForm] = useState(false);
  const options = [];
  for (let i = 10; i <= 100; i += 10) {
    options.push({ value: i * 0.01, label: i + "%" });
  }
  const warning = () => {
    Modal.warning({
      title: `${
        context.locale === "en"
          ? "Please input amount is more than 10,000 VNĐ"
          : "Vui lòng nhập số tiền lớn hơn 10,000 VNĐ"
      }`,
    });
  };
  const submitForm = async () => {
    if (Number(amount) < 10000) {
      warning();
    } else {
      try {
        if (hideInfo === false) {
          const params = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            amount: amount,
            phone: phone,
            paymentGateway: "VNPAY",
            donationType: "GENERAL",
            generalFund: Number(amountGenral),
            websiteFund: Number(amountWebsite),
            documentFund: Number(amountDocument),
            storyFund: Number(amountStory),
            hiddenInfo: false,
          };
          const response = await DonateAPI.createDonate(params);
          window.location.href = response.payment_link;
        } else {
          const params = {
            firstName: "Anonymous",
            lastName: "Anonymous",

            amount: amount,

            paymentGateway: "VNPAY",
            donationType: "GENERAL",
            generalFund: Number(amountGenral),
            websiteFund: Number(amountWebsite),
            documentFund: Number(amountDocument),
            storyFund: Number(amountStory),
            hiddenInfo: true,
          };
          const response = await DonateAPI.createDonate(params);
          window.location.href = response.payment_link;
        }
      } catch (error) {
        console.log("Error:", error);
      }
    }
  };

  const error = () => {
    if (context.locale === "en") {
      Modal.error({
        title: `Total amount of fund choosed [${numeral(
          Number(amountGenral) +
            Number(amountStory) +
            Number(amountWebsite) +
            Number(amountDocument)
        ).format("0,0")} VNĐ] is not equal your input amount [${numeral(
          amount
        ).format(
          "0,0"
        )} VNĐ]! Please select with total fund percent equal 100%`,
      });
    } else
      Modal.error({
        title: `Tổng tiền của các quỹ được chọn [${numeral(
          Number(amountGenral) +
            Number(amountStory) +
            Number(amountWebsite) +
            Number(amountDocument)
        ).format("0,0")} VNĐ] không khớp với số tiền bạn nhập là [${numeral(
          amount
        ).format("0,0")} VNĐ]! Vui lòng  chọn tổng phần của các quỹ bằng 100%`,
      });
  };
  useEffect(() => {
    const fetchStatistic = async () => {
      try {
        const response = await DonateAPI.statisticFund();
        setGeneral(response.data[0].totalGeneralFund);
        setWebsiteFund(response.data[0].totalOperateFund);
        setDocumentFund(response.data[0].totalResearchFund);
        setStoryFund(response.data[0].totalPatientSupportFund);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStatistic();
  }, []);
  return (
    <div className="font-[Montserrat] mt-8 md:px-32">
      {/* <Title>
        {context.locale === "en"
          ? "ALS Fund Information"
          : "Thông tin nguồn quỹ"}
      </Title> */}
      <div className="grid grid-cols-4 mb-8">
        <Card>
          <Statistic
            title={context.locale === "en" ? "General Fund" : "Quỹ chung ALS"}
            value={generalFund}
            valueStyle={{ color: "#00783f" }}
            suffix="VNĐ"
          />
        </Card>

        <Card>
          <Statistic
            title={
              context.locale === "en"
                ? "Operate Fund"
                : "Quỹ Vận Hành"
            }
            value={websiteFund}
            valueStyle={{ color: "#00783f" }}
            suffix="VNĐ"
          />
        </Card>

        <Card>
          <Statistic
            title={
              context.locale === "en"
                ? "Research Fund"
                : "Quỹ Tài Trợ Nghiên Cứu"
            }
            value={documentFund}
            valueStyle={{ color: "#00783f" }}
            suffix="VNĐ"
          />
        </Card>

        <Card>
          <Statistic
            title={
              context.locale === "en"
                ? "Patient Support Fund"
                : "Quỹ hỗ trợ Bệnh Nhân"
            }
            value={storyFund}
            valueStyle={{ color: "#00783f" }}
            suffix="VNĐ"
          />
        </Card>
      </div>
      <Form
        layout="horizontal"
        onValuesChange={onFormLayoutChange}
        disabled={componentDisabled}
      >
        <Container className="md:divide-x-2">
          <Row>
            <Title>
              <FormattedMessage id="donate.titleGift" />
            </Title>
            <Divider />
            {context.locale === "en" ? (
              <Form.Item
                name="amount"
                label={
                  <Content>
                    <FormattedMessage id="donate.amount" />
                  </Content>
                }
                rules={[
                  {
                    required: true,
                    message: "Please input your amount",
                  },
                ]}
              >
                <NumericFormat
                  allowNegative={false}
                  value={amount}
                  onValueChange={(e) => setAmount(e.value)}
                  customInput={Input}
                  thousandSeparator=","
                  addonAfter="VND"
                />
              </Form.Item>
            ) : (
              <Form.Item
                name="amount"
                label={
                  <Content>
                    <FormattedMessage id="donate.amount" />
                  </Content>
                }
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập số tiền!",
                  },
                ]}
              >
                <NumericFormat
                  allowNegative={false}
                  value={amount}
                  onValueChange={(e) => setAmount(e.value)}
                  customInput={Input}
                  thousandSeparator=","
                  addonAfter="VND"
                />
              </Form.Item>
            )}
            <Label>
              <FormattedMessage id="donate.titleFund" />
            </Label>
            <div className="grid grid-cols-4 gap-16 md:gap-8">
              <div className="col-span-2">
                <Form.Item>
                  <Checkbox
                    value="false"
                    onChange={(e) =>
                      e.target.checked == true
                        ? setPercentGeneralDisble(false) &
                          setAmountGeneralDisable(false)
                        : setPercentGeneralDisble(true) &
                          setAmountGeneralDisable(true) &
                          setAmountGeneral("0") &
                          setPercentGeneral(0)
                    }
                  >
                    <Content>
                      {" "}
                      <FormattedMessage id="donate.fund1" />
                    </Content>
                  </Checkbox>
                </Form.Item>
              </div>
              <div className="col-span-2 ">
                <Form.Item
                  hidden={percentGeneralDisble}
                  wrapperCol={{ span: 8 }}
                >
                  <Select
                    options={options}
                    onChange={(e) => {
                      setPercentGeneral(e);
                      setAmountGeneral(Number(amount) * e);
                    }}
                  />
                </Form.Item>
                <Content
                  className="-mt-8 text-[#035C12] italic"
                  hidden={amountGeneralDisable}
                >
                  {numeral(Number(amount) * percentGeneral).format("0,0")} VNĐ
                </Content>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-16 md:gap-8">
              <div className="col-span-2">
                <Form.Item>
                  <Checkbox
                    value="false"
                    onChange={(e) =>
                      e.target.checked == true
                        ? setPercentWebsiteDisable(false) &
                          setAmountWebsiteDisable(false)
                        : setPercentWebsiteDisable(true) &
                          setAmountWebsiteDisable(true) &
                          setAmountWebsite("0") &
                          setPercentWebsite(0)
                    }
                  >
                    <Content>
                      {" "}
                      <FormattedMessage id="donate.fund2" />
                    </Content>
                  </Checkbox>
                </Form.Item>
              </div>
              <div className="col-span-2 ">
                <Form.Item
                  hidden={percentWebsiteDisable}
                  wrapperCol={{ span: 8 }}
                >
                  <Select
                    options={options}
                    onChange={(e) => {
                      setPercentWebsite(e);
                      setAmountWebsite(Number(amount) * e);
                    }}
                  />
                </Form.Item>
                <Content
                  className="-mt-8 text-[#035C12] italic"
                  hidden={amountWebsiteDisable}
                >
                  {numeral(Number(amount) * percentWebsite).format("0,0")} VNĐ
                </Content>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-16 md:gap-8">
              <div className="col-span-2">
                <Form.Item>
                  <Checkbox
                    value="false"
                    onChange={(e) =>
                      e.target.checked == true
                        ? setPercentDocumentDisable(false) &
                          setAmountDocumentDisable(false)
                        : setPercentDocumentDisable(true) &
                          setAmountDocumentDisable(true) &
                          setAmountDocument("0") &
                          setPercentDocument(0)
                    }
                  >
                    <Content>
                      {" "}
                      <FormattedMessage id="donate.fund3" />
                    </Content>
                  </Checkbox>
                </Form.Item>
              </div>
              <div className="col-span-2">
                <Form.Item
                  hidden={percentDocumentDisable}
                  wrapperCol={{ span: 8 }}
                >
                  <Select
                    options={options}
                    onChange={(e) => {
                      setPercentDocument(e);
                      setAmountDocument(Number(amount) * e);
                    }}
                  />
                </Form.Item>
                <Content
                  className="-mt-8 text-[#035C12] italic"
                  hidden={amountDocumentDisable}
                >
                  {numeral(Number(amount) * percentDocument).format("0,0")} VNĐ
                </Content>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-16 md:gap-8">
              <div className="col-span-2">
                <Form.Item>
                  <Checkbox
                    value="false"
                    onChange={(e) =>
                      e.target.checked == true
                        ? setPercentStoryDisable(false) &
                          setAmountStoryDisable(false)
                        : setPercentStoryDisable(true) &
                          setAmountStoryDisable(true) &
                          setAmountStory("0") &
                          setPercentStory(0)
                    }
                  >
                    <Content>
                      {" "}
                      <FormattedMessage id="donate.fund4" />
                    </Content>
                  </Checkbox>
                </Form.Item>
              </div>
              <div className="col-span-2 ">
                <Form.Item
                  hidden={percentStoryDisable}
                  wrapperCol={{ span: 8 }}
                >
                  <Select
                    options={options}
                    onChange={(e) => {
                      setPercentStory(e);
                      setAmountStory(Number(amount) * e);
                    }}
                  />
                </Form.Item>
                <Content
                  className="-mt-8 text-[#035C12] italic"
                  hidden={amountStoryDisable}
                >
                  {numeral(Number(amount) * percentStory).format("0,0")} VNĐ
                </Content>
              </div>
            </div>
            <div className="text-[#035C12] italic text-base">
              <FormattedMessage id="donate.total" />{" "}
              {numeral(
                Number(amountGenral) +
                  Number(amountStory) +
                  Number(amountWebsite) +
                  Number(amountDocument)
              ).format("0,0")}{" "}
              VNĐ
            </div>
          </Row>
          <Row className="mt-8 md:mt-0">
            {" "}
            <Title>
              {" "}
              <FormattedMessage id="donate.titleInfo" />
            </Title>
            <Divider />
            <Form.Item>
              <Checkbox
                value="false"
                onChange={(e) =>
                  e.target.checked == true
                    ? (setHideInfo(true), setHiddenForm(true))
                    : (setHideInfo(false), setHiddenForm(false))
                }
              >
                <Content>
                  <FormattedMessage id="donate.public" />
                </Content>{" "}
              </Checkbox>
              <br />
            </Form.Item>
            {context.locale === "en" ? (
              <div hidden={hiddenForm}>
                <div className="grid grid-cols-4 gap-8">
                  <div className="col-span-2">
                    <Form.Item
                      name="firstName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your first name",
                        },
                      ]}
                    >
                      <Input
                        onChange={(e) => setFirstName(e.target.value)}
                        size="large"
                        placeholder="First name"
                      />
                    </Form.Item>
                  </div>
                  <div className="col-span-2">
                    <Form.Item
                      name="lastName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your last name",
                        },
                      ]}
                    >
                      <Input
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last name"
                        size="large"
                      />
                    </Form.Item>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-8">
                  <div className="col-span-2">
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          type: "email",
                          message: "The input is not valid E-mail!",
                        },
                        {
                          required: true,
                          message: "Please input your E-mail!",
                        },
                      ]}
                    >
                      <Input
                        onChange={(e) => setEmail(e.target.value)}
                        size="large"
                        placeholder="Email"
                      />
                    </Form.Item>
                  </div>
                  <div className="col-span-2">
                    <Form.Item
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone number!",
                        },
                        {
                          max: 10,
                          message: "Must be 10 numbers!",
                        },
                      ]}
                    >
                      <Input
                        addonBefore={"+84"}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone number"
                        size="large"
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>
            ) : (
              <div hidden={hiddenForm}>
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-2">
                    <Form.Item
                      name="firstName"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập họ",
                        },
                      ]}
                    >
                      <Input
                        onChange={(e) => setFirstName(e.target.value)}
                        size="large"
                        placeholder="Họ"
                      />
                    </Form.Item>
                  </div>
                  <div className="col-span-2">
                    <Form.Item
                      name="lastName"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập tên",
                        },
                      ]}
                    >
                      <Input
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Tên"
                        size="large"
                      />
                    </Form.Item>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-2">
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          type: "email",
                          message: "Nhập đúng dạng email!",
                        },
                        {
                          required: true,
                          message: "Vui lòng nhập email!",
                        },
                      ]}
                    >
                      <Input
                        onChange={(e) => setEmail(e.target.value)}
                        size="large"
                        placeholder="Email"
                      />
                    </Form.Item>
                  </div>
                  <div className="col-span-2">
                    <Form.Item
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng số điện thoại!",
                        },
                        {
                          max: 10,
                          message: "Gồm 10 số!",
                        },
                      ]}
                    >
                      <Input
                        addonBefore={"+84"}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Số điện thoại"
                        size="large"
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>
            )}
          </Row>
        </Container>

        <Form.Item>
          <Button
            htmlType="submit"
            style={{
              background: "green",
              color: "white",
              float: "right",
              height: "3rem",
              borderRadius: "0.5rem",
            }}
            onClick={
              Number(amountGenral) +
                Number(amountStory) +
                Number(amountWebsite) +
                Number(amountDocument) ===
              Number(amount)
                ? submitForm
                : error
            }
          >
            <Content>
              <FormattedMessage id="donate.button" />
            </Content>
          </Button>
        </Form.Item>
      </Form>
      <Divider />
      <Donor />
    </div>
  );
};

export default () => <FormDisabledDemo />;
