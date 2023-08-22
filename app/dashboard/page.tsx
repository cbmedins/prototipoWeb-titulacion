import Card from "@/components/home/card-form";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import Link from "next/link"
import { nFormatter } from "@/lib/utils";
import ContactForm from "@/components/formulario/ContactForm";
import Cardform from "@/components/home/card-form";

export default async function Home() {
  

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
            
           
  
          </div>
        </div>
        
      
    </>
  );
}

