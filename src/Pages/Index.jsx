import React from "react";
import Navbar from "../Components/Navbar";
import "../index.css";
import Carousel from "../Images/Carousel.png";
import dentist from "../Images/dentist.jpg";
import liver from "../Images/liver.jpg";
import dermatologist from "../Images/dermatologist.jpg";
import gynecologist from "../Images/gynecologist.jpg";
import orthopedist from "../Images/orthopedist.jpg";
import QAcard from "../Components/Question";
import { Footer } from "../Components/Footer";
import Header from "../Components/Header";

const Index = () => {
  return (
    <div className="bg-gray-200">
      <Header li={'Signup'} linkTo={'/signup'} />
      <div className="mt-16 ">
        <img
          src={Carousel}
          alt="Carousel"
          className="w-full h-[500px] bg-cover"
        />
        <div className=" mt-4 mx-6 p-2 rounded-xl  bg-white">
          <h1 className="text-3xl font-bold  flex justify-start ">
            Our Services
          </h1>

          <ul className=" justify-around flex gap-4 mt-8 flex-wrap">
            <li className=" flex flex-col max-w-[200px] rounded-lg place-items-center boxShadow p-4">
              <img
                src={dentist}
                alt="dentist"
                className="rounded-full w-16 h-16 text-center"
              />
              <h4 className="text-lg font-semibold">Dentist</h4>
              <p className="text-center">100 Doctors Available</p>
            </li>
            <li className=" flex flex-col max-w-[200px] rounded-lg place-items-center boxShadow p-4">
              <img
                src={liver}
                alt="liver"
                className="rounded-full w-16 h-16 text-center"
              />
              <h4 className="text-lg font-semibold">Liver Specilaist</h4>
              <p className="text-center">5 Doctors Available</p>
            </li>
            <li className=" flex rounded-lg flex-col max-w-[200px] place-items-center boxShadow p-4">
              <img
                src={dermatologist}
                alt="dermatologist"
                className="rounded-full w-16 h-16 text-center"
              />
              <h4 className="text-lg font-semibold">Dermatologist</h4>
              <p className="text-center">200 Doctors Available</p>
            </li>
            <li className=" flex flex-col rounded-lg place-items-center max-w-[200px] boxShadow p-4">
              <img
                src={gynecologist}
                alt="dermatologist"
                className="rounded-full w-16 h-16 text-center"
              />
              <h4 className="text-lg font-semibold">Gynecologist</h4>
              <p className="text-center">150 Doctors Available</p>
            </li>
            <li className=" flex flex-col rounded-lg place-items-center boxShadow max-w-[200px] p-4">
              <img
                src={orthopedist}
                alt="dermatologist"
                className="rounded-full w-16 h-16 text-center"
              />
              <h4 className="text-lg font-semibold">Orthopedist</h4>
              <p className="text-center">8 Doctors Available</p>
            </li>
            <li className=" flex flex-col rounded-lg place-items-center boxShadow p-4 max-w-[200px]">
              <img
                src={orthopedist}
                alt="dermatologist"
                className="rounded-full w-16 h-16 text-center"
              />
              <h4 className="text-lg font-semibold">Ent Specialist</h4>
              <p className="text-center">45 Doctors Available</p>
            </li>
          </ul>
        </div>

        <div className="mt-4 mx-6 p-4 rounded-xl bg-white">
          <h4 className="bg-bold text-2xl">Frequently Asked Questions :</h4>
          <div className="flex flex-wrap gap-4 mt-4">
            <QAcard
            key={3}
              qusetions={"How do I get started with the app?"}
              answer={
                "To get started, sign up or log in, and complete the onboarding process. You can link your bank account, set your investment goals, and start investing."
              }
            />
            <QAcard
            key={2}
              qusetions={"What types of investments can I make through the web?"}
              answer={
                "Our app allows you to invest in a variety of assets, including stocks, bonds, mutual funds, exchange-traded funds (ETFs), real estate investment trusts (REITs), and more."
              }
            />
            <QAcard
            key={1}
              qusetions={"Is my money safe with your Web?"}
              answer={
                "Yes, we take security seriously. We use bank-level encryption to protect your data and assets. Additionally, we are a member of SIPC (Securities Investor Protection Corporation), which insures your investments up to a certain limit in case of broker failure"
              }
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
