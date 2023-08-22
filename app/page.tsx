import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import Link from "next/link"
import { nFormatter } from "@/lib/utils";

export default async function Home() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/steven-tey/precedent",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every 24 hours
      next: { revalidate: 86400 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

    return (
      <>
        <div>
          
          <h1
            className=" bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent text-4xl font-bold tracking-[-0.02em] animate-fade-up md:text-7xl text-center"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            <Balancer>Sistema Predictivo de Enfermedades Cardiovasculares</Balancer>
          </h1>
          <p
            className="mt-6 animate-fade-up text-center text-gray-800 opacity-0 md:text-xl"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            <Balancer>
            Proyecto de titulacion: Deteccion temprana de enfermedades cardiovasculares mediante un modelo predictivo basado en tecnicas de Deep Learning.
            </Balancer>
          </p>
  
          <p>
  
          </p>
  
          <div
            className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            
            <Link href="formulario">
              <div className="group flex max-w-fit items-center justify-center space-x-2 border bg-blue-500 px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black rounded border-b-4 border-blue-700 hover:border-blue-500">
                <span className="font-semibold">Predicción</span>
              </div>
            </Link>
            
            <a
              className="flex max-w-fit items-center justify-center space-x-2 rounded border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800 border-b-4"
              href="https://github.com/cbmedins"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                <span className="font-semibold">Leer más</span> 
              </p>
            </a>
            
            <a
              className="flex max-w-fit items-center justify-center space-x-2 rounded border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800 border-b-4"
              href="https://github.com/cbmedins"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
              <p>
                <span className="hidden sm:inline-block font-semibold">Repositorio en</span> GitHub{" "}
              </p>
            </a>
  
          </div>
        </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Descripción" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
            large={large}
          />
        ))}
      </div>
    </>
  );
}

const features = [
  {
    title: "Descripción del proyecto",
    description:
      "Breve introducción sobre el [proposito del proyecto](https://nextjs.org/).",
    large: true,
  },
  {
    title: "Precisión del modelo",
    description:
      "Descripción de como se recopilaron y utilizaron los datos para entrenar y evaluar el [modelo](https://nextjs.org/).",
    demo: <WebVitals />,
  },
  {
    title: "Enfermedades cardiovasculares",
    description:
      "Contenido educativo sobre las [enfermedades cardiovasculares](https://nextjs.org/).",
      large: true,
    demo: (
      
      <Link href="formulario">
              <div className="group flex max-w-fit items-center justify-center space-x-2 border bg-blue-500 px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black rounded border-b-4 border-blue-700 hover:border-blue-500">
                <span className="font-semibold">Leer más...</span>
              </div>
            </Link>
    ),
  },
  {
    title: "Recursos adicionales",
    description:
      "[Recursos](https://nextjs.org/) relacionados con las enfermedades cardiovasculares y desarrollo del modelo.",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Auth.js logo" src="/authjs.webp" width={50} height={50} />
        <Image alt="Prisma logo" src="/prisma.svg" width={50} height={50} />
      </div>
    ),
  },
  
  
  {
    title: "Demostración interactiva",
    description:
      "[Demostración interactiva](https://nextjs.org/) del modelo predictivo.",
    demo: (
      <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
        <span className="font-mono font-semibold">useIntersectionObserver</span>
        <span className="font-mono font-semibold">useLocalStorage</span>
        <span className="font-mono font-semibold">useScroll</span>
        <span className="font-mono font-semibold">nFormatter</span>
        <span className="font-mono font-semibold">capitalize</span>
        <span className="font-mono font-semibold">truncate</span>
      </div>
    ),
  },
];
