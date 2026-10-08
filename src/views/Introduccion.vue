<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p La incorporación de sistemas de inteligencia artificial generativa en procesos educativos, administrativos, productivos y tecnológicos plantea oportunidades para automatizar actividades, apoyar la creación de contenidos, mejorar el acceso a información y ampliar las capacidades de análisis. Sin embargo, la utilidad de estas tecnologías no elimina la posibilidad de que produzcan resultados incorrectos, sesgados, inseguros o incompatibles con los objetivos de la organización. Una vez identificados el sistema, su propósito, los actores, los datos, las integraciones, los activos y los escenarios que pueden generar consecuencias, resulta necesario avanzar hacia una pregunta más precisa: ¿qué tan relevante es cada riesgo y cuáles requieren intervención prioritaria? La valoración permite responder este interrogante mediante criterios de probabilidad, impacto, exposición, vulnerabilidad y criticidad, evitando que todos los escenarios sean tratados como si tuvieran la misma importancia. Este enfoque coincide con la gestión de riesgos planteada por marcos como #[em NIST AI RMF] e ISO/IEC 23894, los cuales promueven procesos sistemáticos y contextualizados para analizar y gestionar riesgos asociados con sistemas de inteligencia artificial (NIST, 2023; ISO/IEC, 2023a).

    .row.justify-content-center.align-items-center.mb-5.bg-color-2
      .col-lg-5
        img(src='@/assets/curso/temas/intro/1.png', alt='')
      .col-lg-7
        img(src='@/assets/curso/temas/intro/2.svg', alt='')
        p.text-white Este componente formativo desarrolla los conocimientos y procedimientos necesarios para pasar de la identificación del riesgo a su valoración y tratamiento. El aprendiz podrá comprender la diferencia entre enfoques cualitativos y semicuantitativos, establecer criterios y escalas, estimar probabilidad e impacto, analizar la eficacia de los controles existentes y determinar niveles de riesgo inherente y residual. Posteriormente, estos resultados permitirán priorizar escenarios y formular medidas de tratamiento coherentes con el proceso de negocio, el nivel de tolerancia de la organización y los posibles efectos sobre personas, derechos, información, operación, cumplimiento, finanzas, reputación y ambiente. La formación no pretende reducir el análisis a una operación matemática: NIST advierte expresamente sobre el riesgo de depender excesivamente de métricas cuantitativas sin comprender sus limitaciones y recomienda combinar medición, evidencia contextual y retroalimentación humana estructurada (NIST, 2024).
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
