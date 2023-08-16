import React from "react";

const Location = () => {
  return (
    <div id="location" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-gray-800">
        Localização
      </h1>
      <p className="py-2 text-2xl font-bold text-center text-gray-800">
        Mercado do Produtor de Imbituba
      </p>
      <p className="py-2 text-2xl font-semibold text-center text-gray-800">
        Endereço: Av. Nicolau B da Rosa Matos, 955 - Centro, Imbituba - SC,
        88780-000
      </p>
      <p className="text-lg text-center font-semibold text-gray-900">
        Horário: Abre às 7:00 ⋅ Fecha às 18:00
      </p>
      <p className="text-lg text-center font-semibold text-gray-900">
        Telefone: (48) 3255-8464
      </p>
    </div>
  );
};

export default Location;
