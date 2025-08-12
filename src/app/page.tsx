'use client'
import Image from "next/image";
import SpeedEffect from "./components/SpeedEffect/SpeedEffect";
import IconMarquee from "./components/IconMarquee/IconMarquee";
import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaJsSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { div, img } from "framer-motion/client";
import { trace } from "next/dist/trace";
import { animate } from "framer-motion";
import { runInContext } from "vm";
import { eventNames } from "process";
import Motivacional from "./components/Motivacional/Motivacional";
import { useEffect } from "react";
import { FaDeleteLeft } from "react-icons/fa6";


export default function Home() {
  const [ativo, setAtivo] = useState<string | null>(null);

  const handleClick = (tecnologia: string) => {
    setAtivo((prev) => (prev === tecnologia ? null : tecnologia));
  };


  return (
    <main className="bg-[url('/fundo.jpg')] bg-cover bg-center bg-no-repeat w-full min-h-screen">
      
      <div className="px-6 sm:px-20 py-16 text-white font-sans">

        {/* Cabeçalho */}
        <div className="flex items-center mb-12 gap-15 text-center">
          <div className="flex-col"> 
            <h1 className="text-9xl sm:text-6xl font-mono">Olá, mundo!</h1>
              <p className="flex-col font-mono text-lg sm:text-xl max-w-2xl text-purple-200 p-8">
            Bem-vindo ao meu universo digital. Explore, conheça meus projetos e vamos construir algo incrível juntos!
          <div className="p-8 flex justify-center gap-10"> 
                <a href="https://github.com/marlenecarvalho" 
            target="_blank" rel="noopener noreferrer">
            <FaGithub />
              </a>
          <a href="https://www.linkedin.com/in/marlene-carvalho-728a9489/" 
          target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          </div> 
          </p>
          </div>

          <img
            src="Marlenedev.jpeg"
            alt="foto Marlene"
            width={300}
            height={300}
            className="object-cover rounded-xl shadow-2xl"
          />
        </div>

  

        {/* Botão de ação */}
        <div className="flex justify-center mb-10">
          <IconMarquee />
          {/* <button className="text-lg sm:text-xl font-semibold bg-yellow-500 hover:bg-yellow-400 text-purple-900 px-6 py-3 rounded-xl transition duration-300 shadow-md hover:shadow-lg">
            Vamos ao que interessa
          </button> */}
        </div>

        {/* Título */}
       
        {/* <div className=" md:w-1/2 mx-auto text-center mb-6">
          <h1 className="text-[40px] text-black font-bold">PROJETOS FULL STACK WEB</h1>
        </div> */}
          
        {/* Tecnologias */}
        
        <div className="py-10 px-6 text-center w-full max-w-3xl mx-auto">
          <h2 className="text-2xl font-mono font-bold text-white mb-6">Clique nas tecnologias utilizadas:</h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 text-5xl text-purple-300 justify-items-center">

            <li onClick={() => handleClick("react")} className="cursor-pointer">
              <FaReact className="text-white hover:text-blue-500 transition duration-300" />
              {ativo === "react" && (
                <p className="mt-2 text-sm text-white animate-fade-in">
                  Criando reações incríveis com os Hooks do React.
                </p>
              )}
            </li>

            <li onClick={() => handleClick("node")} className="cursor-pointer">
              <FaNodeJs className="text-white hover:text-green-500 transition duration-300" />
              {ativo === "node" && (
                <p className="mt-2 text-sm text-white animate-fade-in">
                  Ferramenta poderosa para lógica e APIs.
                </p>
              )}
            </li>

            <li onClick={() => handleClick("js")} className="cursor-pointer">
              <FaJsSquare className="text-white hover:text-yellow-400 transition duration-300" />
              {ativo === "js" && (
                <p className="mt-2 text-sm text-white animate-fade-in">
                  Interações dinâmicas com o usuário.
                </p>
              )}
            </li>

            <li onClick={() => handleClick("tailwind")} className="cursor-pointer">
              <SiTailwindcss className="text-white hover:text-teal-400 transition duration-300" />
              {ativo === "tailwind" && (
                <p className="mt-2 text-sm text-white animate-fade-in">
                  Estilização rápida, intuitiva e responsiva.
                </p>
              )}
            </li>

          </ul>

           {/* <div className="bg-purple-600 mx-auto text-center mb-6">
          <h1 className=" text-[40px] text-white font-bold p-12">PROJETOS FULL STACK MOBILE</h1>
        </div> */}
        <div>
          <Motivacional />
        </div>
      
        </div>
      </div>
      <footer>
        <div className="font-light text-cyan-50 text-center p-4">
          <p>Projeto desenvolvido por Marlene Carvalho</p>
        </div>
      </footer>
    </main>
  );
}
