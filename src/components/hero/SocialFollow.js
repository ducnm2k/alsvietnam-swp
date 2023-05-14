import React from "react";
import tw from "twin.macro";
const Follower = tw.div`h-1`;
const SideNav = tw.div`px-8 py-8`;
export default function SocialFollow() {
  return (
    <Follower>
      <SideNav>
     <h5 className="animate-bounce font-bold">Follow Us</h5>
        <a
          href="#"
          className="fa fa-facebook transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
          style={{
            padding: "10px",
            fontSize: "20px",
            width: "40px",
            textAlign: "center",
            margin: "2px 2px",
            background: "#3B5998",
            color: "white",
            borderRadius: "50%",
          }}
        />
        <a
          href="#"
          className="fa fa-youtube-play transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
          style={{
            padding: "10px",
            fontSize: "20px",
            width: "40px",
            textAlign: "center",
            margin: "2px 2px",
            background: "red",
            color: "white",
            borderRadius: "50%",
          }}
        />
      </SideNav>
    </Follower>
  );
}
