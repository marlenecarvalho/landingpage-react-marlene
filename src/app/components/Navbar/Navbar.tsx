import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-purple-700 text-white shadow-md">
      {/* <input 
      type="nome" 
      placeholder="Digite seu nome"
      className='flex flex-col sm:flex-row items-center gap-2 p-3 rounded-lg shadow-md border' />
       */}
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4">
        <h1 className="text-2xl font-bold">Marlene Carvalho</h1>
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
