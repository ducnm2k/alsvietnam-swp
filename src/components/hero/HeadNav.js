import React, { useContext, useEffect, useState } from "react";
import { paramCase, capitalCase } from "change-case";
import logo from "../../images/logo.svg";
import donate from "../../images/heart.png";
import "antd/dist/antd.css";
import { FormattedMessage } from "react-intl";
import { Context } from "../Wrapper";

import { Dropdown, Menu, Space, Radio } from "antd";
import { Link, useHistory } from "react-router-dom";
import HeadNavApi from "service/header_nav_api";
import { getToken, removeToken } from "helpers/Token";
import BlogPostApi from "service/blog_post_api";

export default function HeadNav({ activePage }) {
  const context = useContext(Context);
  const [open, setOpen] = useState(false);
  const [listItemUnderstandingALS, setListItemUnderstangdingALS] = useState([]);
  const [listItemNavigatingALS, setListItemNavigatingALS] = useState([]);
  const [listItemHealingStories, setListItemHealingStories] = useState([]);
  const [listTopic, setListTopic] = useState([]);
  const [listRisk, setListRisk] = useState([]);
  const [listTreatment, setListTreatment] = useState([]);
  const [listDetox, setListDetox] = useState([]);
  const [listNuSu, setListNuSu] = useState([]);
  const [listPhisic, setListPhisic] = useState([]);
  const [listEmo, setListEmo] = useState([]);
  useEffect(() => {
    const fetchListTopic = async () => {
      try {
        const response = await HeadNavApi.getListTopic();
        setListTopic(response.data);

        {
          response.data[7]
            ? setListItemUnderstangdingALS(response.data[7].topicChild)
            : setListItemUnderstangdingALS([]);
        }
        {
          response.data[1]
            ? setListItemNavigatingALS(response.data[1].topicChild)
            : setListItemNavigatingALS([]);
        }
        {
          response.data[2]
            ? setListItemHealingStories(response.data[2].topicChild)
            : setListItemHealingStories([]);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchListTopic();
  }, []);
  useEffect(() => {
    const fetchListRisk = async () => {
      setListRisk(listItemUnderstandingALS[5]?.articles);
    };

    const fetchListTreatment = async () => {
      setListTreatment(listItemNavigatingALS[0]?.articles);
    };
    const fetchListDetox = async () => {
      setListDetox(listItemNavigatingALS[1]?.articles);
    };
    const fetchListNuSu = async () => {
      setListNuSu(listItemNavigatingALS[2]?.articles);
    };
    const fetchListPhisic = async () => {
      setListPhisic(listItemNavigatingALS[3]?.articles);
    };
    const fetchListEmo = async () => {
      setListPhisic(listItemNavigatingALS[4]?.articles);
    };
    fetchListTreatment();
    fetchListRisk();
    fetchListDetox();
    fetchListNuSu();
    fetchListPhisic();
    fetchListEmo();
  }, [listItemUnderstandingALS, listItemNavigatingALS]);

  const MenuHealingStories = (
    <Menu>
      {listItemHealingStories
        ? listItemHealingStories.map((items) => (
            <Menu.Item key={items.id} style={{ marginTop: "1rem" }}>
              <Link to={`/healing_stories/${items.id}`} className="text-base">
                {context.locale === "en"
                  ? items.titleEnglish
                  : items.titleVietnamese}
              </Link>
            </Menu.Item>
          ))
        : null}
    </Menu>
  );
  const MenuUnderstanding = (
    <Menu>
      {listItemUnderstandingALS
        ? listItemUnderstandingALS.map((items) =>
            items.id === "ae9c363a-c164-4629-ba84-986f06513cc3" ? (
              <Menu.Item key={items.id} style={{ marginTop: "1rem" }}>
                <Link
                  to={`/understanding_ALS/ae9c363a-c164-4629-ba84-986f06513cc3/what-is-als`}
                  className="text-base"
                >
                  {context.locale === "en"
                    ? items.titleEnglish
                    : items.titleVietnamese}
                </Link>
              </Menu.Item>
            ) : items.id === "490f9382-6223-49e1-a4ae-1dd3f85d0cd4" ? (
              <Menu.Item key={items.id} style={{ marginTop: "1rem" }}>
                <Link
                  to={`/understanding_ALS/490f9382-6223-49e1-a4ae-1dd3f85d0cd4/als-symptoms`}
                  className="text-base"
                >
                  {context.locale === "en"
                    ? items.titleEnglish
                    : items.titleVietnamese}
                </Link>
              </Menu.Item>
            ) : items.id === "c7668570-1a99-47cb-bde4-0ed26a1e4192" ? (
              <Menu.Item key={items.id} style={{ marginTop: "1rem" }}>
                <Link
                  to={`/understanding_ALS/c7668570-1a99-47cb-bde4-0ed26a1e4192/als-types`}
                  className="text-base"
                >
                  {context.locale === "en"
                    ? items.titleEnglish
                    : items.titleVietnamese}
                </Link>
              </Menu.Item>
            ) : items.id === "bc6f240e-fc54-4c89-8fca-a5aa1b7ed194" ? (
              <Menu.Item key={items.id} style={{ marginTop: "1rem" }}>
                <Link
                  to={`/understanding_ALS/bc6f240e-fc54-4c89-8fca-a5aa1b7ed194/causes-of-als`}
                  className="text-base"
                >
                  {context.locale === "en"
                    ? items.titleEnglish
                    : items.titleVietnamese}
                </Link>
              </Menu.Item>
            ) : items.id === "427d0c08-4dfc-4abf-b9b0-e5f8869d88c8" ? (
              <Menu.Item key={items.id} style={{ marginTop: "1rem" }}>
                <Link
                  to={`/understanding_ALS/427d0c08-4dfc-4abf-b9b0-e5f8869d88c8/diagnosis`}
                  className="text-base"
                >
                  {context.locale === "en"
                    ? items.titleEnglish
                    : items.titleVietnamese}
                </Link>
              </Menu.Item>
            ) : (
              <Menu.Item key={items.id} style={{ marginTop: "1rem" }}>
                <Link
                  to={`/understanding_ALS/${items.id}`}
                  className="text-base"
                >
                  {context.locale === "en"
                    ? items.titleEnglish
                    : items.titleVietnamese}
                </Link>
              </Menu.Item>
            )
          )
        : null}
    </Menu>
  );
  const MenuNavigating = (
    <Menu>
      {listItemNavigatingALS
        ? listItemNavigatingALS.map((items) => (
            <Menu.Item key={items.id} style={{ marginTop: "1rem" }}>
              <Link to={`/navigating_ALS/${items.id}`} className="text-base">
                {context.locale === "en"
                  ? items.titleEnglish
                  : items.titleVietnamese}
              </Link>
            </Menu.Item>
          ))
        : null}
    </Menu>
  );
 
  return (
    <div className=" md:grid md:grid-cols-10 md:text-center mt-4">
      <div className="w-[40%]  md:w-full">
        <a href="/home">
          <img src={logo} />
        </a>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="flex text-xl absolute top-10 cursor-pointer right-8  md:hidden"
      >
        <div className="mr-8">
          <Radio.Group
            size="middle"
            optionType="button"
            value={context.locale}
            onChange={context.selectLanguage}
          >
            {context.locale === "en" ? (
              <>
                {" "}
                <Radio.Button
                  value="vi"
                  style={{ background: "white", borderColor: "#00783f" }}
                >
                  VN
                </Radio.Button>
                <Radio.Button
                  value="en"
                  style={{
                    background: "#00783f",
                    color: "white",
                    borderColor: "#00783f",
                  }}
                >
                  EN
                </Radio.Button>
              </>
            ) : (
              <>
                {" "}
                <Radio.Button
                  value="vi"
                  className="w-12 text-center"
                  style={{
                    background: "#00783f",
                    color: "white",
                    borderColor: "#00783f",
                  }}
                >
                  VN
                </Radio.Button>
                <Radio.Button
                  value="en"
                  className="w-12 text-center"
                  style={{ background: "white", borderColor: "#00783f" }}
                >
                  EN
                </Radio.Button>
              </>
            )}
          </Radio.Group>
        </div>
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>
      <div
        className={`col-start-2 col-span-10 md:flex md:items-end md:justify-end md:space-x-8 pl-8 md:pl-0 pt-8 md:pt-0 content-end md:z-auto z-[12] absolute md:static bg-white duration-500 md:w-full w-80
      ${open ? "top-20 border shadow-lg" : "top-[-1000px]"}`}
      >
        <div className="mb-4 md:mb-0">
          <a
            href="/Home"
            className={`text-gray-800 hover:text-[#035C12] duration-500 font-semibold ${
              activePage === "Home" ? "text-[#035C12]" : "text-gray-800"
            }`}
          >
            <FormattedMessage id="headNav.home" defaultMessage="Home" />
          </a>
        </div>
        <div className="mb-4 md:mb-0">
          <Dropdown
            overlay={MenuUnderstanding}
            overlayStyle={{ fontWeight: "bold" }}
          >
            <span
              className={`text-gray-800 hover:text-[#035C12] duration-500 text-sm  font-semibold cursor-default ${
                activePage === "understanding_ALS"
                  ? "text-[#035C12]"
                  : "text-gray-800"
              }`}
            >
              <Space>
                <FormattedMessage
                  id="headNav.understanding-ALS"
                  defaultMessage="Understanding ALS"
                />
              </Space>
            </span>
          </Dropdown>
        </div>
        <div className="mb-4 md:mb-0">
          <Dropdown
            overlay={MenuNavigating}
            overlayStyle={{ fontWeight: "bold" }}
          >
            <span
              className={`text-gray-800 hover:text-[#035C12] duration-500 text-sm  font-semibold cursor-default ${
                activePage === "navigating_ALS"
                  ? "text-[#035C12]"
                  : "text-gray-800"
              }`}
            >
              <Space>
                <FormattedMessage
                  id="headNav.navigating-ALS"
                  defaultMessage="Navigating ALS"
                />
              </Space>
            </span>
          </Dropdown>
        </div>
        <div className="mb-4 md:mb-0">
          <Dropdown
            overlay={MenuHealingStories}
            overlayStyle={{ fontWeight: "bold" }}
          >
            <span
              className={`text-gray-800 hover:text-[#035C12] duration-500 font-semibold cursor-default ${
                activePage === "healing_stories"
                  ? "text-[#035C12]"
                  : "text-gray-800"
              }`}
            >
              <Space>
                <FormattedMessage
                  id="headNav.healing-stories"
                  defaultMessage="Healing Stories"
                />
              </Space>
            </span>
          </Dropdown>
        </div>
        <div className="mb-4 md:mb-0">
          <a
            href="/about-us"
            className={`text-gray-800 hover:text-[#035C12] duration-500 font-semibold ${
              activePage === "AboutUs" ? "text-[#035C12]" : "text-gray-800"
            }`}
          >
            {" "}
            <FormattedMessage id="headNav.about-us" defaultMessage="About Us" />
          </a>
        </div>
        <div className="mb-4 md:mb-0">
          <a
            href="/als-blog"
            className={`text-gray-800 hover:text-[#035C12] duration-500 font-semibold ${
              activePage === "AlsBlog" ? "text-[#035C12]" : "text-gray-800"
            }`}
          >
            {" "}
            <FormattedMessage id="headNav.ALS-blog" defaultMessage="ALS Blog" />
          </a>
        </div>
        <div className="mb-4 md:mb-0">
          <a
            href="/get-involved"
            className={`text-gray-800 hover:text-[#035C12] duration-500 font-semibold ${
              activePage === "Involved" ? "text-[#035C12]" : "text-gray-800"
            }`}
          >
            <FormattedMessage
              id="headNav.get-involved"
              defaultMessage="Get Involved"
            />
          </a>
        </div>
        <div>
          <a href="/donation">
            <button className="flex text-red-500 font-semibold border border-pink-700 px-2 py-1 rounded  text-sm hover:bg-red-700 hover:text-white  bg-white duration-500">
              <img src={donate} className="w-4 h-4 mr-2 mt-1" />

              <FormattedMessage id="headNav.donate" defaultMessage="donate" />
            </button>
          </a>
        </div>
        <div className="invisible md:visible">
          <Radio.Group
            size="middle"
            optionType="button"
            value={context.locale}
            onChange={context.selectLanguage}
            defaultValue="en"
          >
            {context.locale === "en" ? (
              <>
                {" "}
                <Radio.Button
                  value="vi"
                  style={{ background: "white", borderColor: "#00783f" }}
                >
                  VN
                </Radio.Button>
                <Radio.Button
                  value="en"
                  style={{
                    background: "#00783f",
                    color: "white",
                    borderColor: "#00783f",
                  }}
                >
                  EN
                </Radio.Button>
              </>
            ) : (
              <>
                {" "}
                <Radio.Button
                  value="vi"
                  className="w-12 text-center"
                  style={{
                    background: "#00783f",
                    color: "white",
                    borderColor: "#00783f",
                  }}
                >
                  VN
                </Radio.Button>
                <Radio.Button
                  value="en"
                  className="w-12 text-center"
                  style={{ background: "white", borderColor: "#00783f" }}
                >
                  EN
                </Radio.Button>
              </>
            )}
          </Radio.Group>
        </div>
      </div>
    </div>
  );
}
