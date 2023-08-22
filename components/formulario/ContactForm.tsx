"use client";
import React, { useState, FormEvent } from 'react';

import Tooltip from "@/components/shared/tooltip";

const ContactForm: React.FC = () => {
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [chestPainType, setChestPainType] = useState('');
  const [restingBP, setRestingBP] = useState('');
  const [cholesterol, setCholesterol] = useState('');
  const [fastingBS, setFastingBS] = useState('');
  const [restingECG, setRestingECG] = useState('');
  const [maxHR, setMaxHR] = useState('');
  const [exerciseAngina, setExerciseAngina] = useState('');
  const [oldpeak, setOldpeak] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor.
    console.log('Age:', age);
    console.log('Sex:', sex);
    console.log('ChestPainType:', chestPainType);
    console.log('RestingBP:', restingBP);
    console.log('Cholesterol:', cholesterol);
    console.log('FastingBS:', fastingBS);
    console.log('RestingECG:', restingECG);
    console.log('MaxHR:', maxHR);
    console.log('ExerciseAngina:', exerciseAngina);
    console.log('Oldpeak:', oldpeak);
  };

  return (
    <div className="p-4">
    <br />
      <h1 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-3xl md:font-normal">Formulario para la predicción</h1>      
      <br />
     
      <form onSubmit={handleSubmit} className="space-y-4">

             
        
        <div>
          <label htmlFor="age">Edad:</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          
        </div>
        <div>
            <label htmlFor="sex">Sexo:</label>
            <div className="flex">
                <select
                    id="sex"
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    >
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                </select>
                <Tooltip content="Precedent is an opinionated collection of components, hooks, and utilities for your Next.js project.">
                    <div className="flex w-36 cursor-default items-center justify-center rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100">
                    <p className="text-gray-600">Tooltip</p>
                    </div>
                </Tooltip>
            </div>
        </div>

        <div>
          <label htmlFor="chestPainType">Tipo de Dolor de Pecho:</label>
          <input
            type="text"
            id="chestPainType"
            value={chestPainType}
            onChange={(e) => setChestPainType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label htmlFor="restingBP">Presión Arterial en Reposo:</label>
          <input
            type="text"
            id="restingBP"
            value={restingBP}
            onChange={(e) => setRestingBP(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="cholesterol">Nivel de Colesterol:</label>
          <input
            type="text"
            id="cholesterol"
            value={cholesterol}
            onChange={(e) => setCholesterol(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="fastingBS">Nivel de Azúcar en Sangre en Ayunas:</label>
          <input
            type="text"
            id="fastingBS"
            value={fastingBS}
            onChange={(e) => setFastingBS(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="restingECG">Resultados del Electrocardiograma en Reposo:</label>
          <input
            type="text"
            id="restingECG"
            value={restingECG}
            onChange={(e) => setRestingECG(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="maxHR">Ritmo Cardíaco Máximo Alcanzado:</label>
          <input
            type="text"
            id="maxHR"
            value={maxHR}
            onChange={(e) => setMaxHR(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="exerciseAngina">Angina Inducida por Ejercicio:</label>
          <input
            type="text"
            id="exerciseAngina"
            value={exerciseAngina}
            onChange={(e) => setExerciseAngina(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="oldpeak">Depresión del Segmento ST:</label>
          <input
            type="text"
            id="oldpeak"
            value={oldpeak}
            onChange={(e) => setOldpeak(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        

        {/* Agrega más campos aquí según los requisitos */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
