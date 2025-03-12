import { HiAcademicCap } from "react-icons/hi";

export function Skills() {
  const educations = [
    {
      name: "Bacharelado em Ciência da Computação",
      institution: "Universidade Estacio de Sá",
      status: "Concluído",
      startDate: "2020",
      endDate: "2024",
    },
    {
      name: "Curso de Desenvolvedor Full Stack",
      institution: "Alura",
      status: "Concluído",
      startDate: "2022",
      endDate: "2022",
    },
  ];

  const skills = [
    {
      name: "HTML5",
      icon: "/images/html5-original.svg",
      level: 29.9,
    },
    {
      name: "CSS3",
      icon: "/images/css3-original.svg",
      level: 9.7,
    },
    {
      name: "JavaScript",
      icon: "/images/javascript-original.svg",
      level: 32.58,
    },
    {
      name: "React.js",
      icon: "/images/react-original.svg",
      level: 25,
    },
    {
      name: "TypeScript",
      icon: "/images/typescript-original.svg",
      level: 5.9,
    },
    {
      name: "Node.js",
      icon: "/images/nodejs-original.svg",
      level: 32.58,
    },
    {
      name: "Tailwind CSS",
      icon: "/images/tailwindcss-original.svg",
      level: 9.7,
    },
    {
      name: "Git",
      icon: "/images/git-original.svg",
      level: 38,
    },
    {
      name: "C# (.NET)",
      icon: "/images/dot-net-original.svg",
      level: 2.82,
    },

    {
      name: "Docker",
      icon: "/images/docker-original.svg",
      level: 9,
    },
  ];
  return (
    <section className="rounded-br-[80px] bg-gray-300 md:rounded-br-[180px]">
      <div className="container mx-auto max-w-4xl p-4 py-12">
        <div className="relative mb-4 p-4 text-center">
          <h2 className="relative z-50 mb-2 font-bold">
            <span className="mr-2 font-headline text-3xl text-gray-800">
              Educação &
            </span>
            <span className="font-handwriting text-4xl text-blue-800">
              Skills
            </span>
          </h2>
          <p className="relative text-sm text-gray-700">
            Full Stack Developer | React.js | Node.js | Tailwind CSS | C# (.NET)
            | Docker | HTML5 | CSS3 | JavaScript | TypeScript | Git
          </p>
          <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-300/40"></div>
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
              <HiAcademicCap className="h-8 w-8 text-blue-600" /> Educação
            </h3>
            {educations.map((education) => (
              <div
                key={education.name}
                className="mb-2 rounded-lg bg-white p-4 text-sm font-semibold text-gray-900"
              >
                {education.name} <br />
                <span className="text-gray-700">
                  {education.institution} - {education.startDate} a{" "}
                  {education.endDate} - {education.status}
                </span>
              </div>
            ))}
          </div>
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
              <HiAcademicCap className="h-8 w-8 text-blue-600" /> Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="rounded-lg bg-white p-4 text-sm font-semibold text-gray-900"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-6 w-6"
                    />
                    {skill.name}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1/2 h-4 bg-gray-300 rounded-lg">
                      <div
                        className="h-full bg-blue-600 rounded-lg"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-700">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
