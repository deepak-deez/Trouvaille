import React from "react";
import "./style.scss";

export default function Header(props) {
  return (
    <>
      <header className="pt-[5rem] xl:pt-[9rem]">
        <h2 className="text-center text-[20px] xl:text-[24px] mt-[10rem] lg:mt-[15rem]">
          Know yourself in
        </h2>
        <h1 className="">{props.location}</h1>
      </header>
    </>
  );
}