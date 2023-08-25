
## Introduction

Según la Organización Mundial de la Salud (OMS), las enfermedades cardiovasculares constituyen un conjunto de afecciones altamente mortales que pueden afectar a la población humana. Estas patologías representan más del 37% de todas las muertes a escala mundial, y se proyecta que esta proporción continúe en ascenso hasta el año2030. En Ecuador, como en otras partes del mundo, las enfermedades cardiovasculares son la principal causa de muerte. En el año 2019, representaron un 26.49% del total de defunciones en el país y según la encuesta STEPS de 2018, aproximadamente el 25% de la población ecuatoriana presenta tres o más factores de riesgo relacionados con enfermedades crónicas no transmisibles. Estos hallazgos resaltan la necesidad urgente de implementar medidas de prevención e intervención temprana para reducir la carga de enfermedades cardiovasculares en Ecuador. Siguiendo la importancia crítica de abordar las enfermedades cardiovasculares, se busca implementar un enfoque basado en técnicas de Deep Learning para mejorar la predicción temprana y, por ende, reducir la incidencia de este tipo de patologías. En este proyecto de titulación se proponen tres modelos fundamentales de Deep Learning: Deep Neural Network (DNN), Convolutional Neural Networks (CNN) y Multilayer Perceptron (MLP). Para evaluar la eficacia de estos modelos, se han llevado a cabo experimentos en dos escenarios distintos. En el primer escenario, se consideró un conjunto de datos que contiene un total de 918 registros clínicos, con 12 columnas que representan variables relacionadas con los factores de riesgo de enfermedades cardiovasculares. En el segundo escenario, se propuso utilizar el conjunto de datos original, pero reduciendo las variables para incluir únicamente aquellas características que muestran una correlación más alta con la presencia de enfermedades cardiovasculares. Los resultados obtenidos revelaron que el modelo de Aprendizaje Convolucional (CNN), entrenado con el conjunto de datos originales, demostró un rendimiento superior en comparación con los otros modelos implementados. Los valores específicos de desempeño fueron los siguientes: Accuracy del 92.85%, Precision del 92.17%, Recall del 94.51%, Specificity del 90.78%, F1 Score del 93.30% y área bajo la curva ROC del 90.03%. Este modelo fue implementado utilizando FastAPI, lo que facilita su uso como una API en un prototipo de aplicación web desarrollado en JavaScript. Esta plataforma web brinda la capacidad de realizar predicciones al ingresar los factores de riesgo relevantes.


Iniciar en localhost

```bash
npm run dev
```

## Autor

- Cristhian Medina Suarez ([@cbmedins](https://twitter.com/cbmedins))
