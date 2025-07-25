'use client'

import { useState } from "react";
import { FaReact, FaNodeJs, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss } from 'react-icons/si';

const tecnologias = [

{
    id: 'react',
    nome: 'React',
    icon: <FaReact className="text-white" />,
    descricao:'Biblioteca JavaScript para interfaces reativas e componentes reutilizáveis.'
},

{
    id: 'node',
    nome: 'Node.js',
    icon: <FaNodeJs className="text-green-500" />,
    descricao: 'Ambiente de execução JavaScript no servidor, ideal para APIs.',
  },
  {
    id: 'javascript',
    nome: 'JavaScript',
    icon: <FaJsSquare className="text-yellow-400" />,
    descricao: 'Linguagem base da web, usada no front e no back-end.',
  },
  {
    id: 'tailwind',
    nome: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-teal-500" />,
    descricao: 'Framework de CSS utilitário para estilizar com velocidade e consistência.',
  },
];





export default function Tecnologias() {
  const [ativa, setAtiva] = useState<string | null>(null);

  const toggleDescricao = (id: string) => {
    setAtiva(prev => (prev === id ? null : id));
  };
}