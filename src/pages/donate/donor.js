import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import tw from "twin.macro";
import { RightCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import DonateAPI from "service/donate_api";
import numeral from "numeral";
const Title = tw.h5`text-lg md:text-2xl font-bold text-green-900`;
const Name = tw.h5`text-base md:text-xl font-bold  text-center`;
const Amount = tw.h5`text-sm md:text-lg   text-center`;
const Container = tw.div`mr-8 py-4 px-4 rounded-xl bg-green-100`;
function Donor(props) {
  const [listDonor, setListDonor] = useState([]);
  useEffect(() => {
    const fecthListDonor = async () => {
      const response = await DonateAPI.getListDonor();
      setListDonor(response.data);
    };
    fecthListDonor();
  }, []);
  return (
    <div>
      <Title>
        <FormattedMessage id="donate.thank" />
      </Title>

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <marquee>
            <div className="inline-flex items-center">
              {listDonor.map((donor) => (
                <Container className=" bg-green-100">
                  {donor?.hiddenInfo === true ? (
                    <Name>  <FormattedMessage id="donate.hiddenInfo"/></Name>
                  ) : (
                    <Name>{donor.firstName + " " + donor.lastName}</Name>
                  )}
                  <Amount>{numeral(donor.amount).format()} VNĐ</Amount>
                </Container>
              ))}
            </div>
          </marquee>
        </div>
        <div className="flex col-span-1  items-center justify-center">
          <Button type="text" size="large" style={{ fontSize: "1.5rem" }}>
            <RightCircleOutlined />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Donor;
