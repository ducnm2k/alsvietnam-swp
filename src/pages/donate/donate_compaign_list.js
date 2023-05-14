import { Button, Card, Col, Divider, Progress, Row, Tag } from "antd";
import { format } from "date-fns";
import numeral from "numeral";
import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import DonateAPI from "service/donate_api";
import tw from "twin.macro";

const Title = tw.a`text-lg md:text-xl font-bold hover:text-green-900 text-gray-900`;
const Content = tw.h5`text-base md:text-lg`;
const Amount = tw.h4`text-sm md:text-base`;
function DonateCompaign(props) {
  const [listCampaign, setListCampaign] = useState([]);
  useEffect(() => {
    const getListDonateCampaign = async () => {
      try {
        const response = await DonateAPI.getListDonateCampaign();
        setListCampaign(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getListDonateCampaign();
  }, []);
  return (
    <div className="md:px-32 mt-8 grid grid-cols-3 gap-8">
      {listCampaign?.map((campaign) => (
        <div className="col-span-3 md:col-span-1">
          <Card
            bordered
            style={{ marginBottom: "1rem", borderRadius: "1rem" }}
            cover={
              <img
                style={{
                  height: 200,
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                }}
                alt="ALS Vietnam"
                src={campaign.coverImage}
              />
            }
          >
            <div className="h-32">
              <Title href={`/donation/${campaign.id}`}>{campaign.title}</Title>
            </div>
          {campaign?.active === true ? (  <Content className="flex justify-end">
              <Tag
                color="green"
                style={{
                  fontSize: "0.75rem",
                  borderRadius: "1rem",
                }}
              >
                <FormattedMessage id="donate.left1" />
                {Math.floor(
                  (new Date(campaign.dateEnd).getTime() -
                    new Date().getTime()) /
                    (24 * 60 * 60 * 1000)
                )}{" "}
                <FormattedMessage id="donate.left2" />
              </Tag>
            </Content>):(  <Content className="flex justify-end">
              <Tag
                color="red"
                style={{
                  fontSize: "0.75rem",
                  borderRadius: "1rem",
                }}
              >
            <FormattedMessage id="donate.left3"/>{" "}
             
               
              </Tag>
            </Content>)}
            <div className="inline-flex space-x-2">
              <Amount className="font-bold">
                {numeral(campaign.currentAmount).format()} VNĐ
              </Amount>
              <Amount>/</Amount>
              <Amount className="text-green-900">
                {numeral(campaign.expectedAmount).format()} VNĐ
              </Amount>
            </div>
            <Progress
              percent={
                (Number(campaign.currentAmount) * 100) /
                Number(campaign.expectedAmount)
              }
              showInfo={false}
              strokeColor={{
                "0%": "#87d068",
                "100%": "#035C12",
              }}
            />
            <div className="grid grid-cols-3 justify-items-center text-center mt-4">
              <div>
                <h1><FormattedMessage id="donate.left5"/></h1>
                <Amount className="font-bold">{campaign.totalDonations}</Amount>
              </div>
              <div>
                <h1><FormattedMessage id="donate.left6"/></h1>
                {/* <br /> */}
                <Amount className="font-bold">
                  {numeral(
                    Number(campaign.currentAmount) /
                      Number(campaign.expectedAmount)
                  ).format("0.00%")}
                </Amount>
              </div>
              {campaign?.active === true ? (
                <a href={`/donation/${campaign.id}`}>
                  <button
                    className="text-[#035C12] font-bold border border-[#035C12] px-4 py-2 rounded lg:ml-8  text-sm hover:bg-[#035C12] hover:text-white flex mt-4 bg-white 
    duration-500"
                  >
                    <FormattedMessage
                      id="headNav.donate"
                      defaultMessage="donate"
                    />
                  </button>
                </a>
              ) : (
                <a href={`/donation/${campaign.id}`}>
                   <button
              className="text-red-500 font-bold border border-pink-700 px-4 py-2 rounded lg:ml-8 text-xs hover:bg-red-700 hover:text-white flex mt-4 bg-white
    duration-500"
            >
                     <FormattedMessage
                      id="donate.left4"
                      defaultMessage="donate"
                    />
                  </button>
                </a>
              )}
            </div>
          </Card>
          {console.log('status', campaign.active)}
        </div>
      ))}
    </div>
  );
}

export default DonateCompaign;
