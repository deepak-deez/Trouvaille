import React from "react";
import "./style.scss";

export default function HostingPartner(props) {
  return (
    <div className="lg:w-1/2 lg:my-auto hosting-partner">
      <h2 className="text-[#9D9DAA] text-[4rem]">
        <span className="text-[#2EC8B9]">tico</span>
        <span className="text-[#9D9DAA]">com</span>
      </h2>
      <p className="mt-[-1rem] mb-[3rem] text-[22px]">Hosting partner</p>
      <p>{props.content}</p>
      <h4 className="text-[22px] text-[#BC4E37]">Show More</h4>
    </div>
  );
}
