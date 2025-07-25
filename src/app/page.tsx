import Image from "next/image";
import SpeedEffect from "./components/SpeedEffect/SpeedEffect";
import IconMarquee from "./components/IconMarquee/IconMarquee";
import React from 'react';
import { FaReact, FaNodeJs, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { link } from "fs";

type nome= string


export default function Home() {
  return (
    <div className="min-h-screen bg-purple-600 px-6 sm:px-20 py-16 text-white font-sans">
      {/* Cabeçalho centralizado */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Olá, mundo!</h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-purple-200">
          Bem-vindo ao meu universo digital. Explore, conheça meus projetos e vamos construir algo incrível juntos!
        </p>
      </div>

      {/* Efeito de velocidade */}
      <div className="mb-16">
        <SpeedEffect />
      </div>

      {/* Botão de ação */}
      <div className="flex justify-center">
        <IconMarquee />
        <button className="text-lg sm:text-xl font-semibold bg-yellow-500 hover:bg-yellow-400 text-purple-900 px-6 py-3 rounded-xl transition duration-300 shadow-md hover:shadow-lg">
          Vamos ao que interessa
        </button>
      </div>

      {/* <div className="" >
        <img 
        src="Marlenedev.jpeg" 
        alt="foto Marlene"
        width={500}
        height={500}
        className="object-cover rounded-t-4xl"/>
        
      </div> */}

      <div className="md:w-1/2 px-100">
        <h1 className="text-[60px] font-bold text-center">PROJETOS FULL STACK</h1>
      </div>

     <div className=" py-10 px-6 text-center w-80">
      <h2 className="text-2xl font-bold text-white mb-6">Clique nas tecnologias utilizadas: </h2>
      
      <div className="flex justify-center text-5xl text-purple-300">
        <ul>
  
          <li className="p-6">
            <FaReact title="React" className="text-white hover:text-blue-500 transition"/>
            
          </li>
          <li className="p-6">
            <FaNodeJs title="Node.js" className="text-white hover:text-green-500 transition" />
          </li>
          <li className="p-6">
            <FaJsSquare title="JavaScript" className="text-white hover:text-yellow-400 transition" />
          </li>
          <li className="p-6">
            <SiTailwindcss title="Tailwind CSS" className="text-white hover:text-teal-500 transition" />
          </li>

        </ul>
        
      </div>
      
    </div>
    </div>
  );
}
