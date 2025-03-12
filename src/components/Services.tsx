import { HiDeviceMobile } from "react-icons/hi";
import { HiCommandLine, HiComputerDesktop } from "react-icons/hi2";

export function Services() {
  const services = [
    {
      title: "Web",
      description:
        "Desenvolvimento de sites e sistemas web, estáticos e dinâmicos, utilizando React.js, TypeScript, HTML5, CSS3, TailwindCSS e mais.",
      icon: <HiComputerDesktop className="h-12 w-12" />,
    },
    {
      title: "Sistemas",
      description:
        "Desenvolvimento de sistemas completos e APIs REST com C# (.NET), Node.js, TypeScript, Express, MongoDB, MySQL, PostgreSQL e mais.",
      icon: <HiCommandLine className="h-12 w-12" />,
    },
    {
      title: "Mobile",
      description:
        "Criação de aplicativos mobile modernos com React Native, TypeScript, Expo, Firebase, SQLite e mais.",
      icon: <HiDeviceMobile className="h-12 w-12" />,
    },
  ];

  return (
    <section className="container mx-auto my-12 max-w-4xl p-4">
      <div className="p-4 text-center">
        <p className="text-sm font-semibold uppercase text-blue-600">
          O que faço de melhor
        </p>
        <h2 className="mb-2 font-bold text-blue-900">
          <span className="mr-2 font-headline text-3xl">Meus</span>
          <span className="font-handwriting text-4xl">Serviços</span>
        </h2>
        <p className="text-sm text-gray-500">
          Atuo no desenvolvimento full stack, oferecendo soluções completas do
          front-end ao back-end, incluindo banco de dados e sistemas.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-4 border border-gray-200 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-center">
              <div className="p-4 bg-blue-100 rounded-full">{service.icon}</div>
            </div>
            <h3 className="text-lg font-semibold text-blue-900">
              {service.title}
            </h3>
            <p className="text-sm text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
