import React from "react";

const WorkItem = ({ nome, whatsapp, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-300">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-300 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-sm md:text-sm">
          <span className="inline-block px-3 py-2 font-semibold text-white bg-gray-800 rounded-md">
            {nome}
          </span>
        </p>
        <p className="text-lg font-semibold text-gray-900">{whatsapp}</p>
        <p>
          <span className="my-2 text-base font-normal text-stone-600">
            {details}
          </span>
        </p>
      </li>
    </ol>
  );
};

export default WorkItem;
