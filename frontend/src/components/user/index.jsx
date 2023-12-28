import React from "react";
import Image from "../common/Image";
import { HeroStyles } from "./styles/hero";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Header from "../common/Header";

const User = () => {
  return (
    <>
      <Header />
      <HeroStyles>
        <div className="w-90 auto">
          <div className="user_profile_wrapper auto flex item-start gap-4">
            <div className="w-100 flex column gap-2">
              {/* user  */}
              <h2 className="">
                <span className="block text-extra-bold fs-18 text-grey2 uppercase">
                  INSTRUCTOR
                </span>
                <span className="fs-50">Learn With Arjun</span>
                <span className="text-dark block fs-18 text-extra-bold">
                  Blockchain + Frontend Engineer
                </span>
              </h2>
              {/* views and reviews */}
              <div className="flex item-center gap-4">
                <h4 className="">
                  <span className="block text-extra-bold fs-16 text-grey2">
                    Total students
                  </span>
                  <span className="text-dark block fs-18 text-extra-bold">
                    6,640
                  </span>
                </h4>
                <h4 className="">
                  <span className="block text-extra-bold fs-16 text-grey2">
                    Reviews
                  </span>
                  <span className="text-dark block fs-18 text-extra-bold">
                    6,640
                  </span>
                </h4>
              </div>
              {/* about user */}
              <h4 className="">
                <span className="block text-extra-bold fs-16 text-grey2">
                  About me
                </span>
                <span className="text-dark block fs-18 text-extra-bold">
                  Hi, I'm Arjun!
                </span>

                <span
                  style={{ margin: "1.5rem 0" }}
                  className="text-light block fs-18 text-grey"
                >
                  I'm an Australian software engineer with over a decade of
                  experience. Ever since I was in high school, I've had a knack
                  for learning about and becoming an expert on cutting-edge
                  technologies. My skills and passion for software development
                  have taken me all around the world, and I've worked at Apple,
                  Pebble, and Canva.
                </span>

                <span
                  style={{ margin: "1.5rem 0" }}
                  className="text-light block fs-18 text-grey"
                >
                  I specialise in blockchain and frontend engineering, and since
                  2019 I've been providing consulting services to multinational
                  companies regarding Web3, decentralised applications (dapps),
                  and cyber security. And I can't wait to share my knowledge
                  with you!
                </span>
              </h4>
            </div>
            <div className="flex column gap-2">
              <img
                style={{ width: "18rem", height: "18rem", borderRadius: "50%" }}
                src="https://img-c.udemycdn.com/user/200_H/183790836_e85b_2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </HeroStyles>
    </>
  );
};

export default User;
