import React from "react";
import WorkItem from "./WorkItem";

const artistWork = [
  {
    nome: "Andréia",
    whatsapp: "whatsapp: 48 8413-0883",
    details: "Instagram: @artenunes_",
  },
  {
    nome: "Arlete",
    whatsapp: "whatsapp: 48 99674-6930",
    details: "Email: arleteartista46@gmail.com",
  },
  {
    nome: "Giselle",
    whatsapp: "whatsapp: 48 99949-4465",
    details: "Instagram: @amartelunadisenhos - Facebook: @amartelunadisenhos",
  },
  {
    nome: "Ivaldete",
    whatsapp: "whatsapp: 44 99908-9195",
  },
  {
    nome: "Maria Helena",
    whatsapp: "whatsapp: 48 99136-2526",
    details: "Instagram: @helena.artesanato_acessorio",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800">Artesãs</h1>
      {artistWork.map((item, idx) => (
        <WorkItem
          key={idx}
          nome={item.nome}
          whatsapp={item.whatsapp}
          details={item.details}
        ></WorkItem>
      ))}
    </div>
  );
};

export default Work;
