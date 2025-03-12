export function About() {
  return (
    <section className="container mx-auto my-4 max-w-5xl p-4">
      <div className="relative p-4 text-center">
        <h2 className="relative text-blue-900 font-bold z-10">
          <span className="mr-2 font-headline text-3xl">Sobre</span>
          <span className="font-handwriting text-4xl">Mim</span>
        </h2>
        <p className="relative text-sm text-gray-600">
          Com mais de 10 projetos concluídos, estou preparado para trazer
          inovação e eficiência ao seu próximo desafio. Vamos construir algo
          incrível juntos!
        </p>
        <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-300/40"></div>
      </div>
      <div className="relative mx-auto mt-20 max-w-lg">
        <div className="relative w-full rounded-lg bg-blue-200 p-4 ps-20 md:h-64 md:ps-48 ">
          <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
            <p className="font-handwriting text-lg font-bold">Olá,</p>
            <p>
              <span className="mr-1">Meu nome é</span>
              <span className="font-headline font-bold uppercase text-blue-900">
                Thiago Povoa
              </span>
            </p>
            <table className="mt-4 w-full text-sm">
              <thead>
                <tr>
                  <th className="font-headline font-bold uppercase text-blue-900">
                    Informação
                  </th>
                  <th className="font-headline font-bold uppercase text-blue-900">
                    Detalhe
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Idade:
                  </td>
                  <td>38</td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    WhatsApp:
                  </td>
                  <td>
                    <a
                      href="https://api.whatsapp.com/send?phone=5521990825235"
                      target="_blank"
                      className="text-blue-800 hover:underline"
                    >
                      (21) 99082-5235
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Email:
                  </td>
                  <td>
                    <a
                      href="mailto:thiagopovoadev@gmail.com"
                      className="text-blue-800 hover:underline"
                    >
                      thiagopovoadev
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Endereço:
                  </td>
                  <td>
                    <a
                      href="https://www.google.com/maps/place/Itabora%C3%AD,+RJ/@-22.7422162,-43.0305214,11z/data=!3m1!4b1!4m6!3m5!1s0x99bff5afbc21c3:0x81cefcbdcd8acf65!8m2!3d-22.7472462!4d-42.8584458!16s%2Fm%2F02769kl?authuser=0&entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      className="text-blue-800 hover:underline"
                    >
                      Itaboraí, RJ
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Disponível:
                  </td>
                  <td>
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 bg-[url('https://media.licdn.com/dms/image/v2/D4D03AQH8H8RNEGocpg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726151882711?e=1747267200&v=beta&t=F8EVWlKTYfxWaLGQE9g0PvyA6n4NJVDH2SEBu3V7F4Q')] bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56 grayscale"></div>
        </div>
      </div>
    </section>
  );
}
