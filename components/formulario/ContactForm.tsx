"use client";
import React, { useState, FormEvent } from 'react';

import Tooltip from "@/components/shared/tooltip";

const ContactForm: React.FC = () => {
  
  const [age, setCounter] = useState('0');
  const [sex, setSex] = useState('');
  const [chestPainType, setChestPainType] = useState('');
  const [restingBP, setRestingBP] = useState('');
  const [cholesterol, setCholesterol] = useState('');
  const [fastingBS, setFastingBS] = useState('');
  const [restingECG, setRestingECG] = useState('');
  const [maxHR, setMaxHR] = useState('');
  const [exerciseAngina, setExerciseAngina] = useState('');
  const [oldpeak, setOldpeak] = useState('');
  const [ST_Slope, setST_Slope] = useState('');

  const [predictionValue, setPredictionValue] = useState<number | null>(null);



  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
    console.log('ST_Slope:', ST_Slope);

    const data = {
      Age: parseInt(age),
      Sex: parseInt(sex),
      ChestPainType: parseInt(chestPainType),
      RestingBP: parseInt(restingBP),
      Cholesterol: parseInt(cholesterol),
      FastingBS: parseInt(fastingBS),
      RestingECG: parseInt(restingECG),
      MaxHR: parseInt(maxHR),
      ExerciseAngina: parseInt(exerciseAngina),
      Oldpeak: parseFloat(oldpeak),
      ST_Slope: parseInt(ST_Slope),
      
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/predict/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Resultado del servidor:', result);
      setPredictionValue(result.prediction); // Asegúrate de que "prediction" sea el nombre correcto en tu respuesta del servidor
    } else {
      console.error('Error al enviar los datos al servidor.');
    }
  } catch (error) {
    console.error('Error de conexión:', error);
  }
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
          <div className="flex">
            
            <select
                id="restingECG"
                value={restingECG}
                onChange={(e) => setRestingECG(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                >
                <option value="0">LVH</option>
                <option value="1">Normal</option>
                <option value="2">St</option>
            </select>
            <Tooltip content="Precedent is an opinionated collection of components, hooks, and utilities for your Next.js project.">
                <div className="flex w-36 cursor-default items-center justify-center rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100">
                <p className="text-gray-600">Tooltip</p>
                </div>
            </Tooltip>

                  </div>

        </div>

        <div>
          <label htmlFor="maxHR">Ritmo Cardíaco Máximo Alcanzado:</label>
          <div className="flex">

          <input
            type="text"
            id="maxHR"
            value={maxHR}
            onChange={(e) => setMaxHR(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            />
          <Tooltip content="MaxHR (valor numérico entre 60 y 202).">
                <div className="flex w-36 cursor-default items-center justify-center rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100">
                <p className="text-gray-600">Tooltip</p>
                </div>
            </Tooltip>
            </div>
        </div>


        <div>
          <label htmlFor="exerciseAngina">Angina Inducida por Ejercicio:</label>
          <div >
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">

              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center pl-3">
                  <input
                    type="radio"
                    id="exerciseAngina1"
                    name="exerciseAngina"
                    value="1"
                    onChange={(e) => setExerciseAngina(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label 
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Si </label>
                </div>
              </li>

              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center pl-3">
                  <input
                    type="radio"
                    id="exerciseAngina0"
                    name="exerciseAngina"
                    value="0"
                    onChange={(e) => setExerciseAngina(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                  <label 
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No </label>
                </div>
              </li>
            </ul>
        </div>
        </div>


        <div>
          <label htmlFor="oldpeak">Depresión del Segmento ST:</label>
          <div className="flex">
          <input
            type="text"
            id="oldpeak"
            value={oldpeak}
            onChange={(e) => setOldpeak(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <Tooltip content="Depresión del segmento ST (valor numérico).">
                <div className="flex w-36 cursor-default items-center justify-center rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100">
                <p className="text-gray-600">Tooltip</p>
                </div>
            </Tooltip>
            </div>
        </div>

        
        <div>
          <label htmlFor="ST_Slope">Inclinación o pendiente del segmento ST:</label>
          <div className="flex">
            
            <select
                id="ST_Slope"
                value={ST_Slope}
                onChange={(e) => setST_Slope(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                >
                <option value="0">Up</option>
                <option value="1">Flat</option>
                <option value="2">Down</option>
            </select>
            <Tooltip content="Precedent is an opinionated collection of components, hooks, and utilities for your Next.js project.">
                <div className="flex w-36 cursor-default items-center justify-center rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100">
                <p className="text-gray-600">Tooltip</p>
                </div>
            </Tooltip>

                  </div>

        </div>

        
        <br />



        {/* Agrega más campos aquí según los requisitos */}
        <button type="submit" className="group flex max-w-fit items-center justify-center space-x-2 border bg-blue-500 px-10 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black rounded border-b-4 border-blue-700 hover:border-blue-500">
          Enviar
        </button>


        


      </form>

      {predictionValue !== null && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="z-10 bg-white rounded-lg p-4 max-w-md">
            <p className="mb-2">El valor de la predicción es: {predictionValue}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => setPredictionValue(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      
      

    </div>
  );
};

export default ContactForm;
