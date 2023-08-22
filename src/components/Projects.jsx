import React from "react";
import ProjectItem from "./ProjectItem";
import ivaFirstPic from "../assets/img/iva1.jpg";
import ivaSecPic from "../assets/img/iva9.jpg";
import ivaThirdPic from "../assets/img/iva3.jpg";
import ivaFourthPic from "../assets/img/iva4.jpg";
import ivaFifthPic from "../assets/img/iva5.jpg";
import ivaSixthPic from "../assets/img/iva6.jpg";
import arleteFirstPic from "../assets/img/arlete6.jpeg";
import arleteSecPic from "../assets/img/arlete2.jpg";
import arleteThirdPic from "../assets/img/arlete3.jpg";
import arleteFourthPic from "../assets/img/arlete7.jpeg";
import arleteFifthPic from "../assets/img/arlete8.jpeg";
import arleteSixthPic from "../assets/img/arlete9.jpeg";
import arleteSeventhPic from "../assets/img/arlete10.jpeg";
import andreiaFirstPic from "../assets/img/andreia1.jpg";
import andreiaSecPic from "../assets/img/andreia2.jpg";
import andreiaThirdPic from "../assets/img/andreia3.jpg";
import giselleFirstPic from "../assets/img/giselle1.jpg";
import giselleSecPic from "../assets/img/giselle2.jpg";
import giselleThirdPic from "../assets/img/giselle3.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Artesanatos
      </h1>
      <p className="text-2xl text-center text-gray-900 py-8">
        Conheça algumas das peças de artesanato manufaturadas pelas artesãs da
        Associação Imbitubense de Artesanato.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={ivaFirstPic}
          title="Pintura em tecido de algodão feita com tinta acrilex e stencil. Artesã: Ivaldete."
        />
        <ProjectItem img={ivaThirdPic} title="Artesã: Ivaldete" />
        <ProjectItem img={giselleFirstPic} title="Artesã: Giselle" />
        <ProjectItem img={arleteFirstPic} title="Artesã: Arlete" />
        <ProjectItem img={giselleSecPic} title="Artesã: Giselle" />
        <ProjectItem img={arleteFifthPic} title="Artesã: Arlete" />
        <ProjectItem img={andreiaFirstPic} title="Artesã: Andréia" />

        <ProjectItem img={ivaSecPic} title="Artesã: Ivaldete" />
        <ProjectItem img={arleteSecPic} title="Artesã: Arlete" />
        <ProjectItem img={ivaFourthPic} title="Artesã: Ivaldete" />
        <ProjectItem img={ivaFifthPic} title="Artesã: Ivaldete" />
        <ProjectItem img={ivaSixthPic} title="Artesã: Ivaldete" />
        <ProjectItem img={arleteThirdPic} title="Artesã: Arlete" />
        <ProjectItem img={andreiaSecPic} title="Artesã: Andréia" />

        <ProjectItem img={arleteFourthPic} title="Artesã: Arlete" />
        <ProjectItem img={arleteSixthPic} title="Artesã: Arlete" />
        <ProjectItem img={andreiaThirdPic} title="Artesã: Andréia" />

        <ProjectItem img={arleteSeventhPic} title="Artesã: Arlete" />

        <ProjectItem img={giselleThirdPic} title="Artesã: Giselle" />
      </div>
    </div>
  );
};

export default Projects;
