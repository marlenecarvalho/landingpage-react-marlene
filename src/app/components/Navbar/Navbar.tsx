import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'


export default function Navbar() {
  return (
    <nav className="bg-white text-black shadow-md">
      <div className=" flex flex-col items-center p-4">
        <div className='right-7'>
            <a
      href="https://wa.me/5581992164994?text=Olá%20Marlene,%20quero%20conversar!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-4 right-4 z-50 text-green-500 hover:text-green-400 text-4xl transition duration-300"
      title="Fale comigo no WhatsApp"
    >
      <FaWhatsapp />
    </a>
        </div>
        <ul className="flex space-x-50 text-lg">
          <li>
            <a href="/" className="hover:text-yellow-400 transition-colors">
              Sobre
            </a>
          </li>
          <li>
            <a href="/contato" className="hover:text-yellow-400 transition-colors">
              Contato
            </a>
          </li>
          <li>
            <a href="/feedback" className="hover:text-yellow-400 transition-colors">
              Reaja aqui
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
