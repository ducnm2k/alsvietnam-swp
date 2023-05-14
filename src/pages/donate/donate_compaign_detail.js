import {
  Avatar,
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  List,
  Modal,
  Progress,
  Radio,
  Skeleton,
  Tag,
} from "antd";
import { Context } from "components/Wrapper";
import { format } from "date-fns";
import numeral from "numeral";
import React, { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { FormattedMessage } from "react-intl";
import { NumericFormat } from "react-number-format";
import { useParams } from "react-router-dom";
import DonateAPI from "service/donate_api";
import styled from "styled-components";
import tw from "twin.macro";

const Detail = tw.div`col-span-5 md:col-span-3 px-4 justify-items-center gap-4`;
const Payment = tw.div`col-span-5 md:col-span-2 px-4`;
const Container = tw.div`grid grid-cols-5 md:px-32`;
const Title = tw.h5`text-2xl font-bold text-gray-900`;
const Description = styled.div`
  img {
    ${tw`w-7/12  items-center mx-auto`}
  }
      p {
        ${tw`justify-center text-justify leading-loose md:text-lg text-base`}
      }
}
}`;
const Amount = tw.h4`text-sm md:text-base`;
const Content = tw.span`text-sm md:text-base`;
function DonateCompaignDetail(props) {
  const [value, setValue] = useState("");
  const [hidden, setHidden] = useState();
  const [data, setData] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [amount, setAmount] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [total, setTotal] = useState();
  const context = useContext(Context);
  const language = context.locale;
  const param = useParams();
  const [loading, setLoading] = useState(false);
  const [demo, setDemo] = useState([]);
  const [listDonor, setListDonor] = useState([]);
  const [hideInfo, setHideInfo] = useState(false);
  const [hiddenForm, setHiddenForm] = useState(false);
  const loadMoreData = async () => {
    // if (loading) {
    //   return;
    // }
    // setLoading(true);
    // fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
    //   .then((res) => res.json())
    //   .then((body) => {
    //     setDemo([...demo, ...body.results]);
    //     setLoading(false);
    //   })
    //   .catch(() => {
    //     setLoading(false);
    //   });
    const response = await DonateAPI.getDetailCampaign(param.id);
    setListDonor(response.data);
    setLoading(false);
  };
  useEffect(() => {
    loadMoreData();
  }, []);
  useEffect(() => {
    const getCampaignById = async () => {
      const response = await DonateAPI.getCampaignById(param.id);
      const res = await DonateAPI.getDetailCampaign(param.id);
      setTotal(res.total);
      setData(response);
    };
    getCampaignById();
  }, [param.id]);
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
  if(Number(amount) < 10000){
    warning();
  }else {
    if (hideInfo === true) {
      try {
        const params = {
          firstName: "Anonymous",
          lastName: "Anonymous",

          amount: amount,

          paymentGateway: "VNPAY",
          donationType: "CAMPAIGN",
          hiddenInfo: hidden,
          donationCampaignId: param.id,
          generalFund: Number(amount),
          websiteFund: 0,
          documentFund: 0,
          storyFund: 0,
          hiddenInfo: hideInfo,
        };

        const response = await DonateAPI.createDonate(params);
        window.location.href = response.payment_link;
      } catch (error) {
        console.log("Error:", error);
      }
    } else {
      try {
        const params = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          amount: amount,
          phone: phone,
          paymentGateway: "VNPAY",
          donationType: "CAMPAIGN",
          hiddenInfo: hidden,
          donationCampaignId: param.id,
          generalFund: Number(amount),
          websiteFund: 0,
          documentFund: 0,
          storyFund: 0,
          hiddenInfo: hideInfo,
        };
        const response = await DonateAPI.createDonate(params);
        window.location.href = response.payment_link;
      } catch (error) {
        console.log("Error:", error);
      }
    }
  }

  };

  return (
    <div className="font-[Montserrat]">
      <Container className=" mt-8 mb-8 ">
        <Detail>
          <Title>{data?.title}</Title>
          <img src={data?.coverImage} className="w-auto h-auto" />
          <Description
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />
        </Detail>
        {language === "vi" ? (
          <Payment>
            <div className="border px-8 py-8 rounded-md">
              {" "}
              <Title>Thông tin ủng hộ</Title>
              <div className="inline-flex space-x-2">
                <Amount className="font-bold">
                  {numeral(data?.currentAmount).format()} VNĐ
                </Amount>
                <Amount>/</Amount>
                <Amount className="text-green-900">
                  {numeral(data?.expectedAmount).format()} VNĐ
                </Amount>
              </div>
              <Progress
                percent={
                  (Number(data?.currentAmount) * 100) /
                  Number(data?.expectedAmount)
                }
                showInfo={false}
                strokeColor={{
                  "0%": "#87d068",
                  "100%": "#035C12",
                }}
              />
              <div className="grid grid-cols-3 justify-items-center text-center mt-4">
                <div>
                  <h1>Lượt quyên góp</h1>
                  <Amount className="font-bold">{total}</Amount>
                </div>
                <div>
                  <h1>Đạt được</h1>
                  <Amount className="font-bold">
                    {numeral(
                      Number(data?.currentAmount) / Number(data?.expectedAmount)
                    ).format("0.00%")}
                  </Amount>
                </div>
                {data?.active === true ? (
                  <div>
                    <h1>Thời gian còn</h1>
                    <Amount className="font-bold">
                      {Math.floor(
                        (new Date(data?.dateEnd).getTime() -
                          new Date().getTime()) /
                          (24 * 60 * 60 * 1000)
                      )}{" "}
                      ngày
                    </Amount>
                  </div>
                ) : (
                  <Content className="flex justify-end">
                    {" "}
                    <Amount>
                      {" "}
                      <Tag
                        color="green"
                        style={{
                          fontSize: "0.75rem",
                          borderRadius: "1rem",
                        }}
                      >
                        Kết thúc
                      </Tag>
                    </Amount>
                  </Content>
                )}
              </div>
              <Divider />
              {data?.active === true ? (
                <Form>
                  <Form.Item
                    name="amount"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập số tiền",
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
                  <Form.Item name="hiddenInfo">
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
                  <div className="grid grid-cols-2 gap-4" hidden={hiddenForm}>
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
                    <div className="col-span-2">
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập email",
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
                    <div className="col-span-2 ">
                      <Form.Item
                        name="phone"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập số điện thoại",
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

                  <button
                    className="float-right text-[#035C12] font-bold border border-[#035C12] px-4 py-1 rounded  text-sm hover:bg-[#035C12] hover:text-white flex  bg-white 
    duration-500"
                    onClick={submitForm}
                  >
                    <FormattedMessage
                      id="headNav.donate"
                      defaultMessage="donate"
                    />
                  </button>
                </Form>
              ) : (
                <h1 className="text-lg font-semibold">Cám ơn mọi người đã giúp đỡ</h1>
              )}
            </div>
          </Payment>
        ) : (
          <Payment>
            <Title>Donation Information</Title>
            <div className="inline-flex space-x-2">
              <Amount className="font-bold">
                {numeral(data?.currentAmount).format()} VNĐ
              </Amount>
              <Amount>/</Amount>
              <Amount className="text-green-900">
                {numeral(data?.expectedAmount).format()} VNĐ
              </Amount>
            </div>
            <Progress
              percent={
                (Number(data?.currentAmount) * 100) /
                Number(data?.expectedAmount)
              }
              showInfo={false}
              strokeColor={{
                "0%": "#87d068",
                "100%": "#035C12",
              }}
            />
            <div className="grid grid-cols-3 justify-items-center text-center mt-4">
              <div>
                <h1>Donations</h1>
                <Amount className="font-bold">{total}</Amount>
              </div>
              <div>
                <h1>Progress</h1>
                <Amount className="font-bold">
                  {numeral(
                    Number(data?.currentAmount) / Number(data?.expectedAmount)
                  ).format("0.00%")}
                </Amount>
              </div>
              {data?.active === true ? (
                <div>
                  <h1>Remaining</h1>
                  <Amount className="font-bold">
                    {Math.floor(
                      (new Date(data?.dateEnd).getTime() -
                        new Date().getTime()) /
                        (24 * 60 * 60 * 1000)
                    )}{" "}
                    days
                  </Amount>
                </div>
              ) : (
                <Content className="flex justify-end">
                  {" "}
                  <Amount>
                    {" "}
                    <Tag
                      color="green"
                      style={{
                        fontSize: "0.75rem",
                        borderRadius: "1rem",
                      }}
                    >
                      Complete
                    </Tag>
                  </Amount>
                </Content>
              )}
            </div>

            <Divider />
            {data?.active === true ? (
              <Form>
                <Form.Item
                  name="amount"
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
                <Form.Item name="hiddenInfo">
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
                <div className="grid grid-cols-2 gap-4" hidden={hiddenForm}>
                  <Form.Item
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "Please input firstname",
                      },
                    ]}
                  >
                    <Input
                      onChange={(e) => setFirstName(e.target.value)}
                      size="large"
                      placeholder="Firstname"
                    />
                  </Form.Item>
                  <Form.Item
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your lastname",
                      },
                    ]}
                  >
                    <Input
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Lastname"
                      size="large"
                    />
                  </Form.Item>
                  <div className="col-span-2">
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please input your email",
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
                          message: "Please input phone number",
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

                <button
                  className="float-right text-[#035C12] font-bold border border-[#035C12] px-4 py-2 rounded  text-sm hover:bg-[#035C12] hover:text-white flex mt-4 bg-white 
    duration-500"
                  onClick={submitForm}
                >
                  <FormattedMessage
                    id="headNav.donate"
                    defaultMessage="donate"
                  />
                </button>
              </Form>
            ) : (
              <Title>Thanks for all our donor</Title>
            )}
          </Payment>
        )}
      </Container>
      <Divider />

      {listDonor.length > 0 ? (
        <>
          {" "}
          <Title className="grid justify-items-center">
            <FormattedMessage id="campaign.title" />
          </Title>
          <Container>
            <div
              className="col-start-2 col-span-3"
              id="scrollableDiv"
              style={{
                height: 400,
                overflow: "auto",
                padding: "0 16px",
                border: "1px solid rgba(140, 140, 140, 0.35)",
                borderRadius: "1rem",
              }}
            >
              <InfiniteScroll
                dataLength={listDonor.length}
                next={loadMoreData}
                hasMore={listDonor.length < 50}
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
              >
                <List
                  dataSource={listDonor}
                  renderItem={(item, index) => (
                    <List.Item key={item.id}>
                      <List.Item.Meta
                        title={
                          item.hiddenInfo === true ? (
                            <h1 className="flex text-base font-semibold">
                              <p className="font-thin mr-2">{index + 1}</p>{" "}
                              <FormattedMessage id="donate.hiddenInfo" />
                            </h1>
                          ) : (
                            <h1 className="flex text-base font-semibold">
                              <p className="font-thin mr-2">{index + 1}</p>{" "}
                              {item.firstName} {item.lastName}
                            </h1>
                          )
                        }
                      />
                      <div>{numeral(item.amount).format()} VNĐ</div>
                    </List.Item>
                  )}
                />
              </InfiniteScroll>
            </div>
          </Container>
        </>
      ) : null}
    </div>
  );
}

export default DonateCompaignDetail;
