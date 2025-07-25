'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function NaveDescendoSimples() {
  return (
    <div className="relative w-full h-[100px] overflow-hidden">
      {/* Nave animada */}
      <motion.div
        initial={{ y: '-100px', opacity: 0 }}
        animate={{ y: '200px', opacity: 5 }}
        transition={{ duration: 10, ease: 'easeOut' }}
        className="flex justify-start items-start p-4"
      >
        <Image
          src="/nave.png"
          alt="Nave descendo"
          width={100}
          height={100}
          priority
        />
      </motion.div>
    </div>
  )
}
