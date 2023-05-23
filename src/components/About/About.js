import React from "react";

const About = () => {
  return (
    <div className="flex md:justify-between flex-wrap gap-4 py-20 justify-center">
      <div className="relative md:w-[48%] w-full ">
        <img
          src="/images/about_us/person.jpg"
          className="w-[350px] h-[300px] shadow-2xl object-cover rounded-md"
        />
        <img
          src="/images/about_us/parts.jpg"
          className="w-[300px] h-[300px] bg-white p-2 absolute right-28 -bottom-10  object-cover rounded-md"
        />
      </div>
      <div className="space-y-3 md:w-[48%] w-full">
        <h4 className="font-bold text-[#FF3811] capitalize">about us</h4>
        <h1 className="font-bold text-3xl w-1/2">
          We are qualified & of experience in this field
        </h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <button className="border border-[#FF3811] px-4 py-3 rounded-md text-white bg-[#FF3811] font-semibold">
          Get more info
        </button>
      </div>
    </div>
  );
};

export default About;
