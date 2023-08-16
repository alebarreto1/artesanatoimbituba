import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook } from "react-icons/fa";
import mainPagePic from "../assets/img/artFirst.jpg";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={mainPagePic}
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
        <div className="max-w-[850px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl text-center font-bold text-gray-800">
            Associação Imbitubense de Artesanato
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-6 text-gray-800">
            <TypeAnimation
              sequence={[
                "Pintura em tecido",
                2000,
                "Crochê",
                2000,
                "Pintura em placas de madeira",
                2000,
                "Costura criativa",
                2000,
                "Bordados",
                2000,
                "Variedade de artesanatos",
                2000,
                "Faça-nos uma visita!",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[280px] w-[90px]">
            <a href="https://www.facebook.com/assiart.artesanato/">
              <FaFacebook className="cursor-pointer" size={22} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
