import { FormEvent, useRef, useState } from "react";
import { FaLinkedin, FaSpinner, FaWhatsapp } from "react-icons/fa";
import { HiCheckCircle, HiOutlineEnvelope } from "react-icons/hi2";
import emailjs from "@emailjs/browser";

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.current) return;
    setLoading(true);

    emailjs
      .sendForm("service_svs9x67", "template_ouythxv", form.current, {
        publicKey: "t01-1TgYrhYfEmVQz",
      })
      .then(
        () => {
          setSucess(true);
          setLoading(false);
        },
        (error) => {
          setError(true);
          setLoading(false);
          console.error(error);
        }
      );
  };
  const contacts = [
    {
      name: "WhatsApp",
      description: "+55 21 99082-5235",
      link: "https://wa.me/5521990825235?text=Olá,%20gostaria%20de%20conversar%20com%20você.",
      icon: <FaWhatsapp className="h-10 w-10" />,
    },
    {
      name: "E-mail",
      description: "thiagopovoadev@gmail.com",
      link: "mailto:thiagopovoadev@gmail.com?subject=Contato%20via%20site&body=Olá,%20gostaria%20de%20falar%20com%20você.",
      icon: <HiOutlineEnvelope className="h-10 w-10" />,
    },
    {
      name: "LinkedIn",
      description: "Thiago Povoa",
      link: "https://www.linkedin.com/in/thiago-povoa-dev/",
      icon: <FaLinkedin className="h-10 w-10" />,
    },
  ];

  return (
    <section id="contact" className="bg-blue-700 text-white">
      <div className="container mx-auto max-w-4xl p-4 py-8">
        <div className="mb-6">
          <h2 className="z-50 mb-2">
            <span className="mr-2 font-headline text-3xl font-semibold">
              Fale
            </span>
            <span className="font-handwriting text-4xl">Comigo</span>
          </h2>
          <p className="text-sm">
            Se você gostou do meu trabalho e quer conversar comigo, entre em
            contato pelos canais abaixo.
          </p>
        </div>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="basis-2/3">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="mb-2 block ps-4 font-headline font-semibold"
                >
                  Mensagem:
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="h-36 w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                  required
                />
              </div>
              <div className="mb-6 flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                  <label
                    htmlFor="fullName"
                    className="mb-2 block ps-4 font-headline font-semibold"
                  >
                    Seu nome:
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className="w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                    required
                  />
                </div>
                <div className="flex-grow">
                  <label
                    htmlFor="email"
                    className="mb-2 block ps-4 font-headline font-semibold"
                  >
                    Seu e-mail:
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                    required
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="button flex items-center gap-2 text-blue-700"
                  disabled={loading}
                >
                  {loading && <FaSpinner className="h-4 w-4 animate-spin" />}
                  {sucess && <HiCheckCircle className="h-4 w-4" />}
                  Enviar mensagem
                </button>
                {error && (
                  <p className="mt-2">
                    Erro ao enviar mensagem, tente novamente mais tarde.
                  </p>
                )}
              </div>
            </form>
          </div>

          <div className="basis-1/3">
            {contacts.map((contact) => (
              <div
                key={contact.name}
                className="mb-4 flex items-center gap-4 rounded-lg border border-dashed border-gray-400 p-4"
              >
                {contact.icon}
                <div>
                  <p className="font-headline font-semibold">{contact.name}</p>
                  <a
                    href={contact.link}
                    target="_blank"
                    className="text-gray-300 underline underline-offset-2"
                    rel="noreferrer"
                  >
                    {contact.description}{" "}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
