'use client'
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaJsSquare,
  FaDatabase,
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMysql, SiPostgresql } from 'react-icons/si';



export default function IconMarquee() {
  return (
    <div className="overflow-hidden w-full bg-purple-500 text-white text-center py-4">
      <div className="flex animate-marquee justify-center whitespace-nowrap gap-12">
        {/* Substitua por seus ícones, SVGs ou imagens */}
        <span className="text-3xl"><FaReact /></span>
        <span className="text-3xl"><FaNodeJs /></span>
        <span className="text-3xl"><FaPhp /></span>
        <span className="text-3xl"><FaJsSquare /></span>
        <span className="text-3xl"><FaDatabase /></span>
        <span className="text-3xl"><SiMysql /></span>
        <span className="text-3xl"><SiPostgresql /></span>
        <span className="text-3xl"><SiTailwindcss /></span>
        <span className="text-3xl"><SiNextdotjs /> </span>
      </div>
    </div>
  )
}
