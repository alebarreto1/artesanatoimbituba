import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SEND_FORM_1,
        import.meta.env.VITE_SEND_FORM_2,
        form.current,
        import.meta.env.VITE_SEND_FORM_4
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-gray-800">
        Contato
      </h1>
      <h3 className="py-2 text-2xl font-semibold text-center text-gray-800">
        Contate preferencialmente a artesã do produto escolhido ou nos envie um
        email.
      </h3>
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Nome</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="user_name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Email</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="user_email"
            />
          </div>
        </div>

        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Mensagem</label>
          <textarea
            className="border-2 rounded-lg p-3 border-gray-300"
            name="message"
            rows="8"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-gray-900 text-[#fff] mt-5 w-full p-4 rounded-lg"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
};

export default Contact;
