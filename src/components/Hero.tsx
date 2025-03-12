import { HiDownload } from "react-icons/hi";

export function Hero() {
  return (
    <section className="bg-gradient-to-tr from-black to-gray-900 text-white rounded-br-[80px] md:rounded-br-[180px]">
      <div className="container mx-auto max-w-4xl p-2 py-12 flex flex-col md:flex-row">
        <div className="basis-1/2">
          <h1 className="mb-6 text-center md:text-left">
            <span className="font-handwriting block text-3xl text-center md:text-left">
              Olá, me chamo
            </span>
            <span className="font-headline text-5xl font-semibold">Thiago</span>
            <span className="font-headline text-5xl font-light text-blue-400">
              Povoa
            </span>
          </h1>
          <h2 className="font-semibold flex items-center gap-2 text-center md:text-left">
            <div className="h-1 w-12 rounded-full bg-blue-800"></div>
            Desenvolvedor Full Stack | .NET, C#, React, TypeScript, Node.js
          </h2>
          <p className="text-gray-400 my-6 text-center md:text-left">
            Construindo soluções eficientes e escaláveis com .NET, C#, React e
            TypeScript. Apaixonado por boas práticas como SOLID, Design Patterns
            e Clean Code, atuo no desenvolvimento de APIs REST, integração com
            bancos de dados SQL e NoSQL, e criação de aplicações performáticas.
            Sempre buscando inovação e aprimoramento contínuo!{" "}
          </p>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <a href="#contact" className="underline font-bold text-white">
              Fale comigo
            </a>
            <span className="italic text-gray-500">ou</span>
            <a
              href="
            https://docs.google.com/document/d/1jpb-NxW7ItLlmHJ661xfzPG145iN2_m9/edit?usp=sharing&ouid=109832402148018975607&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
              className="button text-gray-600 hover:text-gray-900 flex items-center gap-2"
            >
              <HiDownload />
              Baixe meu CV
            </a>
          </div>
        </div>
        <div className="basis-1/2"></div>
      </div>
    </section>
  );
}
