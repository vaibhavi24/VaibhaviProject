import Link from "next/link";
import React from "react";

const AboutusPage = () => {
  return (
    <div className="w-full my-10">
      <div className="w-[80%] mx-auto flex justify-between gap-3">
        {/* Content section */}
        <div className="w-1/2">
          <h1 className="uppercase text-[#0466C1] text-3xl font-semibold my-3">
            About Us
          </h1>
          <p className="text-start my-5">
            TechMomentum is your gateway to professional growth and success in
            the digital age. Our comprehensive courses cover the latest trends
            in technology, digital marketing, and business innovation, providing
            you with the expertise to stay ahead of the curve. Join us and
            embark on a journey of continuous learning and achievement.{" "}
          </p>
          <div className="flex my-5">
            <Link href={"#"} className="me-2">
              <img
                className="h-[34px] w-[34px] relative rounded-xl overflow-hidden shrink-0 min-h-[34px]"
                loading="lazy"
                alt=""
                src="/facebookfill-3.svg"
              />
            </Link>
            <Link href={"#"} className="mx-2">
              <img
                className="w-[29.8px] h-[29.8px] relative"
                loading="lazy"
                alt=""
                src="/group-116737.svg"
              />
            </Link>
            <Link href={"#"} className="mx-2">
              <img
                className="h-[34px] w-[34px] relative rounded-xl overflow-hidden shrink-0 min-h-[34px]"
                loading="lazy"
                alt=""
                src="/youtubefill-3.svg"
              />
            </Link>
            <Link href={"#"} className="mx-2">
              <img
                className="h-[34px] w-[34px] relative rounded-xl overflow-hidden shrink-0 min-h-[34px]"
                loading="lazy"
                alt=""
                src="/linkedinfill-3.svg"
              />
            </Link>
          </div>
        </div>

        {/* Image section */}
        <div className="w-1/2">
            <img src="/about-group-img.png" alt="about-img" className="object-cover w-full h-full"/>
        </div>
      </div>
    </div>
  );
};

export default AboutusPage;
