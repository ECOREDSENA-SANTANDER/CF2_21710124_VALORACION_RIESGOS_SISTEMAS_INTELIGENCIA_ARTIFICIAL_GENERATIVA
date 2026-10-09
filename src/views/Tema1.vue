<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Valoración de riesgos en sistemas de inteligencia artificial generativa
      
      .bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La identificación de un riesgo constituye solamente el inicio del proceso. Reconocer que un asistente de inteligencia artificial generativa puede producir información incorrecta, exponer datos personales, reproducir sesgos o ejecutar acciones no previstas permite anticipar lo que podría ocurrir, pero no determina cuáles escenarios requieren atención prioritaria y cuáles pueden gestionarse mediante controles ordinarios. La valoración del riesgo permite establecer la importancia relativa de cada escenario y proporciona una base para tomar decisiones fundamentadas.
      
      p En términos prácticos, valorar un riesgo significa analizar la información disponible y asignarle un nivel de relevancia, considerando, entre otros elementos, la probabilidad de ocurrencia y la magnitud de sus consecuencias. La norma ISO/IEC 23894:2023 proporciona orientación para integrar la gestión de riesgos relacionados con la inteligencia artificial en las actividades y funciones de las organizaciones. Por su parte, el #[em NIST AI RMF] propone un enfoque flexible que articula las funciones #[em Govern, Map, Measure y Manage] (Gobernar, Mapear, Medir y Gestionar). En esta etapa, la función #[em Measur] orienta la selección y aplicación de métodos para analizar los riesgos identificados, mientras que #[em Manage] utiliza los resultados para priorizarlos y definir respuestas. Estos marcos no establecen una única matriz universal; por ello, cada organización debe adaptar sus criterios al contexto en el que opera el sistema.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          img(src='@/assets/curso/temas/t1/2.png', alt='')
        .col-lg-7
          .row.justify-content-center.mb-4
            .col-lg-2
              img(src='@/assets/curso/temas/t1/3.svg', alt='')
            .col-lg-10
              p Esta característica es especialmente importante en la inteligencia artificial generativa. Un mismo comportamiento técnico puede representar diferentes niveles de riesgo según el proceso en el que se utilice. Por ejemplo, una respuesta incorrecta durante una lluvia de ideas puede revisarse y corregirse antes de generar consecuencias significativas. En cambio, si esa respuesta se utiliza automáticamente para orientar decisiones relacionadas con la contratación, la evaluación, la seguridad o la atención de personas, podría ocasionar impactos mayores.       
          p Por ello, #[b el nivel de riesgo no depende únicamente de la herramienta utilizada,] sino de la relación entre la tecnología, el contexto, los actores involucrados, los datos, los controles existentes y las posibles consecuencias. Comprender esta relación permite realizar valoraciones más precisas y establecer medidas de tratamiento acordes con cada situación.

      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.mx-3.text-white Enfoques cualitativos y semicuantitativos para la valoración de riesgos
      
      p Una vez identificados los riesgos de un sistema de inteligencia artificial generativa, el siguiente paso es #[b determinar qué tan importantes son y cuáles requieren mayor atención.] Para hacerlo, existen diferentes formas de valoración. En este componente se abordarán dos de ellas: el enfoque cualitativo y el enfoque semicuantitativo. 
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.mx-3.text-white ¿Qué es un enfoque cualitativo?
      
      img.mb-4(src='@/assets/curso/temas/t1/4.png', alt='')

      p El enfoque cualitativo utiliza #[b categorías descriptivas] para expresar el nivel de un riesgo, por ejemplo: bajo, medio, alto o crítico.
      p Su principal ventaja es que facilita la comprensión y la comunicación entre personas con diferentes perfiles. Por ejemplo, un responsable pedagógico, un profesional jurídico y un especialista en tecnología pueden analizar un mismo escenario y establecer que su impacto es “alto”, siempre que compartan los criterios utilizados para asignar esa categoría.
      p Sin embargo, no basta con decir que un riesgo es “alto” porque parece grave. #[b Cada categoría debe tener criterios claro] que permitan justificar la valoración.
      p Por ejemplo, una organización podría definir que un impacto alto corresponde a situaciones que pueden:

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4
          .row.mb-4
            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta.bg-color-4
                .p-4 
                  p.mb-0.text-center Interrumpir un proceso importante.
        .col-lg-4
          .row.mb-4
            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta.bg-color-4
                .p-4 
                  p.mb-0.text-center Comprometer información sensible.
        .col-lg-4
          .row.mb-4
            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta.bg-color-4
                .p-4 
                  p.mb-0.text-center Generar una afectación significativa a las personas.
      
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4
          .row.mb-4
            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta.bg-color-4
                .p-4 
                  p.mb-0.text-center Producir incumplimientos legales o contractuales.
        .col-lg-4
          .row.mb-4
            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta.bg-color-4
                .p-4 
                  p.mb-0.text-center Generar consecuencias difíciles de corregir.
      
      .row.mb-4
        .col-lg-12
          .cajon.color-primario.bg-color-5.p-4
            p.mb-0.text-center De esta manera, las categorías dejan de depender únicamente de la percepción de quien realiza la valoración.
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.mx-3.text-white ¿Cómo se aplica?
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7
          .row.justify-content-center.mb-4
            .col-lg-2
              img(src='@/assets/curso/temas/t1/5.svg', alt='')
            .col-lg-10
              p Imagine un asistente de inteligencia artificial generativa utilizado para elaborar borradores de material pedagógico.
              p Si el sistema genera información incorrecta, pero #[b todo contenido es revisado por un instructor antes de ser publicado,] la posibilidad de que el error llegue al aprendiz podría valorarse como baja o media, dependiendo de la eficacia real de ese control.
          p Si no existe ningún proceso de revisión, la valoración podría ser diferente.
          p Este ejemplo permite comprender algo fundamental: #[b el riesgo no depende únicamente de lo que puede hacer la inteligencia artificial, sino también de cómo se utiliza, qué controles existen y qué consecuencias puede generar.]
        .col-lg-5
          img(src='@/assets/curso/temas/t1/6.png', alt='')
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.mx-3.text-white ¿Qué es un enfoque semicuantitativo?
      
      p El enfoque semicuantitativo incorpora #[b valores numéricos a categorías previamente definidas.] Por ejemplo, puede utilizar una escala de 1 a 5 para valorar la probabilidad y otra para valorar el impacto.
      p Una escala ilustrativa podría ser:

      .row.mb-4
        .col-lg-12
          .cajon.color-primario.bg-color-5.p-4
            p.mb-0.text-center #[b 1 = muy bajo | 2 = bajo | 3 = moderado | 4 = alto | 5 = muy alto]
      
      p Estos números no representan necesariamente una probabilidad estadística exacta. Su función principal es #[b facilitar la comparación y priorización de diferentes escenarios de riesgo.]
      p Para que la valoración sea consistente, la organización debe establecer qué condiciones corresponden a cada nivel.
      
      .subt.mb-4(data-aos='fade-right')
        img(src='@/assets/curso/temas/t1/subt.svg', alt='')
        h3.mb-0.mx-3.text-white Criterios, escalas, métricas, variables y fuentes de evidencia
      
      p Para realizar una valoración coherente no basta con asignar una categoría o un número. Antes de hacerlo, es necesario establecer #[b qué se va a evaluar, cómo se medirá y qué información respaldará la decisión.]
      p Para ello, pueden considerarse cinco elementos:

      SlyderF(columnas="col-lg-6 col-xl-4").mb-5
        .tarjeta.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t1/7.svg', alt='')
          h2.text-center Criterios
          p.text-center Indican qué aspectos se tendrán en cuenta para valorar el riesgo. Por ejemplo, número de personas afectadas, sensibilidad de la información, interrupción del proceso, obligaciones legales o posibilidad de corregir las consecuencias.
        .tarjeta.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t1/8.svg', alt='')
          h2.text-center Escalas
          p.text-center Organizan los diferentes niveles de valoración. Pueden ser descriptivas, numéricas o combinar ambas. Por ejemplo, una escala de probabilidad de 1 a 5 puede ir desde muy baja hasta muy alta.
        .tarjeta.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t1/9.svg', alt='')
          h2.text-center Métricas
          p.text-center Permiten obtener información concreta sobre el comportamiento del sistema. En inteligencia artificial generativa pueden incluir el porcentaje de respuestas incorrectas, la frecuencia con que se generan datos personales no autorizados, el número de incidentes registrados o la disponibilidad del servicio.
        .tarjeta.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t1/10.svg', alt='')
          h2.text-center Variables
          p.text-center Representan los factores que pueden modificar el nivel de riesgo. Entre ellas pueden encontrarse el tipo de información utilizada, el número de personas afectadas, el nivel de autonomía del sistema, el grado de exposición o la existencia de controles.
        .tarjeta.color-acento-contenido.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t1/11.svg', alt='')
          h2.text-center Fuentes de evidencia
          p.text-center Proporcionan información para sustentar la valoración. Pueden incluir resultados de pruebas, registros de incidentes, documentación del sistema, experiencia de especialistas, reportes internos o información de sistemas similares.
      
      .row.bg-color-5
        .subt.mb-4(data-aos='fade-right')
          img(src='@/assets/curso/temas/t1/subt.svg', alt='')
          h3.mb-0.mx-3.text-white ¿Por qué son importantes estos elementos?
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            .row.justify-content-center.mb-5
              .col-lg-2
                img(src='@/assets/curso/temas/t1/13.svg', alt='')
              .col-lg-10
                p Porque ayudan a que la valoración sea más #[b objetiva, comprensible y trazable.] En lugar de asignar un nivel de riesgo únicamente con base en una percepción personal, se cuenta con criterios y evidencias que permiten explicar por qué se tomó una determinada decisión.
                p Por ejemplo, si durante las pruebas de un sistema se encuentra que el #[b 2 % de sus respuestas contiene información incorrecta,] este dato constituye una métrica. Sin embargo, por sí solo no permite determinar si el riesgo es bajo o alto.
            p La importancia de ese 2 % dependerá del contexto. En una herramienta utilizada para generar ideas creativas, los errores podrían detectarse y corregirse fácilmente. En cambio, si las respuestas del sistema influyen en decisiones relacionadas con la seguridad, la contratación o la atención de personas, el mismo porcentaje podría tener consecuencias mucho más significativas.
            p Por esta razón, #[b una métrica no debe interpretarse de manera aislada.] Es necesario relacionarla con el contexto, los criterios de valoración, las variables involucradas, los controles existentes y las posibles consecuencias.
          .col-lg-4
            img(src='@/assets/curso/temas/t1/12.svg', alt='')

        


  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
