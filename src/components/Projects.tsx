import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export function Projects() {
  const projects = [
    {
      title: "Portfólio",
      description:
        "Meu portfólio pessoal, criado com React, TypeScript, TailwindCSS, Framer Motion e mais.",
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      link: "#",
      colSpan: "col-span-1",
    },
    {
      title: "API de Gerenciamento de Livros",
      description:
        "API RESTful para gerenciamento de livros, autores e editoras, com autenticação e autorização.",
      image: "https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg",
      link: "https://github.com/devpovoa/Web_API_de_Gerenciamento_de_Livros",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Single Page Application - Controle de Livros",
      description:
        "SPA para controle de livros, autores e editoras, com autenticação e autorização.",
      image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",
      link: "https://github.com/devpovoa/Single_Page_Application_Controle_de_Livros",
      colSpan: "col-span-1",
    },
    {
      title: "API para registro de Funcionários",
      description:
        "API RESTful para registro de funcionários, com autenticação e autorização.",
      image:
        "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg",
      link: "https://github.com/devpovoa/Projeto_Lista_de_Funcionarios",
      colSpan: "col-span-1",
    },
    {
      title: "Aplicativo Mobile - Controle de Tarefas",
      description:
        "Aplicativo mobile para controle de tarefas, com autenticação e sincronização.",
      image:
        "https://images.pexels.com/photos/4065153/pexels-photo-4065153.jpeg",
      link: "https://github.com/devpovoa/TodoList",
      colSpan: "col-span-1",
    },
    {
      title: "MusicDot",
      description:
        "Escola de música online, com cursos, aulas, exercícios e avaliações.",
      image: "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg",
      link: "https://github.com/devpovoa/web-site_MusicDot",
      colSpan: "col-span-1 md:col-span-3",
    },
  ];

  return (
    <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
      <div className="container mx-auto max-w-4xl p-4 py-12">
        <div className="relative p-4 text-center">
          <h2 className="relative z-50 mb-2 text-white">
            <span className="mr-2 font-headline text-3xl font-semibold">
              Projetos &amp;
            </span>
            <span className="font-handwriting text-4xl">Portfólio</span>
          </h2>
          <p className="relative text-sm text-gray-400">
            Alguns dos meus projetos pessoais e profissionais. Clique para ver
            mais detalhes.
          </p>
          <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-300/40"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`relative p-4 border border-gray-800 rounded-lg shadow-md ${project.colSpan}`}
            >
              <div className="absolute top-2 right-2 p-2 bg-black rounded-full hover:bg-gray-700">
                <HiArrowTopRightOnSquare className="text-white w-6 h-6" />
              </div>

              <div className="relative h-48 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform transform hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src =
                      "https://via.placeholder.com/600x400?text=Imagem+Indisponível";
                  }}
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.description}</p>
              <a
                href={project.link}
                className="mt-2 text-sm font-semibold text-blue-400 hover:text-blue-300"
              >
                Ver mais
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
