"use client";
import React, { useState, FormEvent } from 'react';

import Tooltip from "@/components/shared/tooltip";

const ContactForm: React.FC = () => {

  const [sex, setSex] = useState('');
  const [chestPainType, setChestPainType] = useState('');
  const [restingBP, setRestingBP] = useState('');
  const [cholesterol, setCholesterol] = useState('');
  const [fastingBS, setFastingBS] = useState('');
  const [restingECG, setRestingECG] = useState('');
  const [maxHR, setMaxHR] = useState('');
  const [exerciseAngina, setExerciseAngina] = useState('');
  const [oldpeak, setOldpeak] = useState('');

  const [age, setCounter] = useState('0');

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
            <label htmlFor="sex">Sexo:</label>
            <div className="flex">
                <select
                    id="sex"
                    value={sex}
                    onChange={(e) => setSex(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    >
                    <option value="0">Masculino</option>
                    <option value="1">Femenino</option>
                </select>
                <Tooltip content="Precedent is an opinionated collection of components, hooks, and utilities for your Next.js project.">
                    <div className="flex w-36 cursor-default items-center justify-center rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100">
                    <p className="text-gray-600">Tooltip</p>
                    </div>
                </Tooltip>
            </div>
        </div>

        
        <div>
          <label>Edad:
            <div className="flex">
              <button className="bg-blue-500 text-white px-10 py-2 rounded" onClick={() => setCounter((parseInt(age) - 1).toString())}>
                <span>−</span>
              </button>
              <input
                type="number"
                name="custom-input-number"
                value={age === '' ? '0' : age}
                onChange={(e) => setCounter(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded text-center"
              />
              <button className="bg-blue-500 text-white px-10 py-2 rounded" onClick={() => setCounter((parseInt(age) + 1).toString())}>
                <span>+</span>
              </button>
            </div>
          </label>
        </div>

        <div>
          <label htmlFor="chestPainType">Tipo de Dolor de Pecho:</label>
          <div className="flex">
                <select
                    id="chestPainType"
                    value={chestPainType}
                    onChange={(e) => setChestPainType(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    >
                    <option value="0">ASY Asintomático</option>
                    <option value="1">ATA Angina Atípica</option>
                    <option value="2">NAP Dolor No Anginoso</option>
                    <option value="3">TA Angina Típica</option>
                </select>
                <Tooltip content="Precedent is an opinionated collection of components, hooks, and utilities for your Next.js project.">
                    <div className="flex w-36 cursor-default items-center justify-center rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100">
                    <p className="text-gray-600">Tooltip</p>
                    </div>
                </Tooltip>
            </div>
            
          
        </div>

        <div>
          <label htmlFor="restingBP">Presión Arterial en Reposo:</label>
        <div className="flex">
          <input
            type="text"
            id="restingBP"
            value={restingBP}
            onChange={(e) => setRestingBP(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <Tooltip content="Nivel de colesterol (mm/hg).">
            <div className="flex w-36 cursor-default items-center justify-center rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100">
            <p className="text-gray-600">Tooltip</p>
            </div>
          </Tooltip>
          </div>
        </div>

        <div>
          <label htmlFor="cholesterol">Nivel de Colesterol:</label>
          <div className="flex">
          <input
            type="text"
            id="cholesterol"
            value={cholesterol}
            onChange={(e) => setCholesterol(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <Tooltip content="Nivel de colesterol (mm/dl).">
            <div className="flex w-36 cursor-default items-center justify-center rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100">
            <p className="text-gray-600">Tooltip</p>
            </div>
          </Tooltip>
          </div>
        </div>

        <div>
          <label htmlFor="fastingBS">Nivel de Azúcar en Sangre en Ayunas:</label>
          <div >
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">

              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center pl-3">
                  <input
                    type="radio"
                    id="fastingBS1"
                    name="fastingBS"
                    value="1"
                    onChange={(e) => setFastingBS(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label 
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mayor que 120 mg/dl </label>
                </div>
              </li>

              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center pl-3">
                  <input
                    type="radio"
                    id="fastingBS0"
                    name="fastingBS"
                    value="0"
                    onChange={(e) => setFastingBS(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                  <label 
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lo contrario </label>
                </div>
              </li>
            </ul>

          

        </div>
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


        
        <br />



        {/* Agrega más campos aquí según los requisitos */}
        <button type="submit" className="group flex max-w-fit items-center justify-center space-x-2 border bg-blue-500 px-10 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black rounded border-b-4 border-blue-700 hover:border-blue-500">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
