import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
  return (

 

<div  className="bg-gradient-to-b bg-section rounded-xl p-8 mt-4">
      <h1 className="text-3xl font-bold text-center mb-4">Educación Profesional</h1>

      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <div className="flex items-start gap-4 p-6 rounded-xl border border-stone-100 shadow-md">
          <div className="p-2 bg-blue-500 rounded-full">
            <FaGraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Full Stack Web Developer</h2>
            <p className="text-textSubtitle">Henry Bootcamp</p>
            <p className="text-sm text-textSecondary">Diciembre 2024 - Abril 2025</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-6 rounded-xl  border border-stone-100 shadow-md">
          <div className="p-2 bg-blue-500 rounded-full">
            <FaGraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Tecnicatura en Programación</h2>
            <p className="text-textSubtitle">CET Nº30</p>
            <p className="text-sm text-textSecondary">Marzo 2013 - Diciembre 2018</p>
          </div>
        </div>
      </div>
    </div>
 )
}

export default Education