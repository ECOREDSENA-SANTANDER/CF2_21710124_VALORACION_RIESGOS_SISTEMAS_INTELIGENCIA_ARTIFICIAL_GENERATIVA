<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Impactos asociados con los sistemas de inteligencia artificial generativa
    
    .row.justify-content-center.align-items-center.mb-5.bg-color-2.mb-4
      .col-lg-5
        img(src='@/assets/curso/temas/t3/1.png', alt='')
      .col-lg-7
        img(src='@/assets/curso/temas/t3/2.svg', alt='')
        p.text-white Una vez estimada la probabilidad de #[b que ocurra un riesgo, es necesario analizar qué podría suceder si este se materializa.] En los sistemas de inteligencia artificial generativa, las consecuencias pueden ir más allá de una pérdida económica y afectar a las personas, la información, los procesos, el cumplimiento, la reputación y el ambiente.
    
    p Por ello, valorar el impacto implica preguntarse:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-4
              .p-4 
                p.mb-0.text-center ¿Qué podría ocurrir?
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-4
              .p-4 
                p.mb-0.text-center ¿Quiénes podrían verse afectados?

      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-4
              .p-4 
                p.mb-0.text-center ¿Qué procesos o activos podrían comprometerse?
      
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4
          .row.mb-4
            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta.bg-color-4
                .p-4 
                  p.mb-0.text-center ¿Durante cuánto tiempo podrían mantenerse las consecuencias?
        .col-lg-4
          .row.mb-4
            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta.bg-color-4
                .p-4 
                  p.mb-0.text-center ¿Qué tan fácil sería corregirlas?
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/temas/t3/3.png', alt='')
      .col-lg-7
        .row.justify-content-center.mb-5
          .col-lg-2
            img(src='@/assets/curso/temas/t3/4.svg', alt='')
          .col-lg-10
            p La respuesta a estas preguntas permite comprender mejor la importancia de cada escenario y establecer una valoración acorde con el contexto en el que se utiliza el sistema.
        p Por ejemplo, un error ortográfico generado por una herramienta de inteligencia artificial puede tener consecuencias mínimas. En cambio, una respuesta incorrecta relacionada con seguridad, una exposición de información confidencial o una decisión que afecte los derechos de una persona puede generar consecuencias mucho mayores.
        p Por esta razón, el impacto debe analizarse teniendo en cuenta los #[b activos, actores, datos, procesos, integraciones, proveedores y controles] identificados durante la caracterización del sistema.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3.text-white Impactos sobre personas, derechos e información
    
    p Los sistemas de inteligencia artificial generativa pueden influir directa o indirectamente en diferentes personas, como trabajadores, aprendices, clientes, ciudadanos y proveedores.
    p Los impactos pueden surgir por:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center Información incorrecta.
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center Decisiones o recomendaciones inadecuadas.

      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center Exposición de datos personales.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center Sesgos o representaciones estereotipadas.
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center Contenidos manipulados.

      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center Uso inadecuado de información.
    
    p La magnitud de estas consecuencias dependerá del contexto, de las personas involucradas y de la posibilidad de detectar y corregir el error.

    .row.mb-4
      .col-lg-12
        .cajon.color-primario.bg-color-5.p-4
          h5 Pensemos en un ejemplo
          p.mb-0 Una herramienta generativa produce una retroalimentación académica incorrecta sobre el desempeño de un aprendiz. Si el instructor revisa el contenido antes de entregarlo, el error puede corregirse. Pero si la herramienta envía automáticamente la retroalimentación y esta influye en decisiones posteriores, el impacto potencial aumenta.

    p Esto permite comprender que #[b los controles y la intervención humana también influyen en las consecuencias de un riesgo.]

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3.text-white Impactos sobre operación, cumplimiento, finanzas, reputación y ambiente

    p Un mismo riesgo puede generar consecuencias en diferentes dimensiones. Por ello, es importante analizar el escenario desde varias perspectivas.

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Impacto operacional")
        .col-md-6.mb-4.mb-md-0
          p Se relaciona con la capacidad de la organización para continuar desarrollando sus actividades.
          p Puede presentarse por interrupciones del servicio, errores del sistema, fallos de integración, cambios realizados por un proveedor o dependencia excesiva de una herramienta tecnológica.
          p #[b Ejemplo:] una organización utiliza diariamente una plataforma generativa para responder solicitudes. Si el proveedor suspende el servicio y no existen procedimientos alternativos, podrían acumularse las solicitudes y retrasarse la atención.
          p En este caso, contar con procedimientos alternativos, mecanismos de recuperación y acuerdos con el proveedor puede ayudar a reducir las consecuencias.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t3/5.png', alt='')
      .row(titulo="Impacto de cumplimiento")
        .col-md-6.mb-4.mb-md-0
          p Se relaciona con las obligaciones #[b legales, reglamentarias, contractuales e institucionales] que deben cumplirse.
          p Un riesgo puede adquirir gran importancia cuando su materialización genera incumplimientos, especialmente cuando están involucrados datos personales, derechos o información protegida.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t3/6.png', alt='')
      .row(titulo="Impacto financiero")
        .col-md-6.mb-4.mb-md-0
          p Comprende las pérdidas o costos que pueden surgir como consecuencia del riesgo. Entre ellos se encuentran:
          l.lista-ul
            li 
              i.lista-ul__vineta
              | Costos de recuperación.
            li 
              i.lista-ul__vineta
              | Atención de incidentes.
            li 
              i.lista-ul__vineta
              | Contratación de servicios alternativos.
            li 
              i.lista-ul__vineta
              | Retrabajo.
            li 
              i.lista-ul__vineta
              | Pérdida de productividad.
            li 
              i.lista-ul__vineta
              | Sanciones o costos asociados al incumplimiento.
          p Cuando no existen datos suficientes para calcular una cifra exacta, pueden utilizarse #[b rangos o escenarios estimados.]
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t3/7.png', alt='')
      .row(titulo="Impacto reputacional")
        .col-md-6.mb-4.mb-md-0
          p Se relaciona con la percepción que tienen las partes interesadas sobre la organización.
          p Una respuesta incorrecta, una filtración de información o un contenido discriminatorio puede afectar la confianza de usuarios, clientes, trabajadores u otras partes interesadas.
          p Además, cuando un contenido se publica automáticamente, puede difundirse rápidamente antes de que la organización tenga la oportunidad de corregirlo.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t3/8.png', alt='')
      .row(titulo="Impacto ambiental")
        .col-md-6.mb-4.mb-md-0
          p Los sistemas de inteligencia artificial requieren recursos computacionales para actividades como el entrenamiento, procesamiento, inferencia y almacenamiento.
          p Por ello, la organización puede considerar aspectos relacionados #[b con la eficiencia y sostenibilidad] al seleccionar y utilizar estas tecnologías, teniendo en cuenta factores como el volumen de uso, la infraestructura empleada y las estrategias de optimización.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t3/9.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3.text-white ¿Puede un riesgo generar varios impactos?
    
    p Sí. Un mismo escenario puede afectar simultáneamente diferentes dimensiones.

    .row.mb-4
      .col-lg-12
        .cajon.color-primario.bg-color-5.p-4
          h5 Ejemplo
          p.mb-0 Imagine un asistente generativo conectado a documentos institucionales que revela accidentalmente información personal a una persona no autorizada.
    
    p Este escenario podría generar:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-.text-center Afectación de la privacidad.
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center Pérdida de confidencialidad.

      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center Incumplimiento de obligaciones de protección de datos.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center Costos asociados con la atención del incidente.
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center Afectación reputacional.

      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center Suspensión temporal del servicio.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/temas/t3/10.png', alt='')
      .col-lg-7
        .row.justify-content-center.mb-5
          .col-lg-2
            img(src='@/assets/curso/temas/t3/11.svg', alt='')
          .col-lg-10
            p Como puede observarse, #[b un solo evento puede generar múltiples consecuencias.]
            p Por esta razón, la organización debe establecer previamente cómo realizará la valoración cuando intervengan varias dimensiones. Algunas metodologías consideran el impacto más alto identificado, mientras que otras asignan diferentes ponderaciones a cada dimensión.
        p Lo importante es que el método esté definido #[b antes de realizar la valoración,] de manera que las decisiones sean consistentes, justificables y acordes con el contexto.
        p Una posible escala multidimensional puede estructurarse así:
    
    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 1.
      span Criterios para valorar el impacto de los riesgos en sistemas de IA generativa
    .tabla-a.color-acento-contenido.mb-4
      table
        caption Criterios para valorar el impacto de los riesgos en sistemas de IA generativa
        thead
          tr
            th Nivel
            th Personas y derechos
            th Información
            th Operación
            th Cumplimiento y reputación
        tbody
          tr
            td #[b 1. Muy bajo]
            td Sin afectación relevante.
            td Información pública o sin pérdida significativa.
            td Alteración mínima.
            td Sin consecuencias relevantes.
          tr
            td #[b 2. Bajo]
            td Afectación limitada y reversible.
            td Exposición limitada.
            td Interrupción breve.
            td Corrección interna.
          tr
            td #[b 3. Moderado]
            td Afectación a varios usuarios.
            td Información interna comprometida.
            td Interrupción temporal del proceso.
            td Requerimiento formal o pérdida limitada de confianza.
          tr
            td #[b 4. Alto]
            td Afectación significativa.
            td Información personal o confidencial.
            td Interrupción importante.
            td Incumplimiento relevante o afectación pública.
          tr
            td #[b 5. Muy alto]
            td Afectación grave de derechos.
            td Exposición extensa o información altamente sensible.
            td Interrupción de proceso crítico.
            td Consecuencias jurídicas o reputacionales graves.

    p Esta tabla es ilustrativa. La definición definitiva debe responder al contexto, responsabilidades y objetivos de cada organización.


    









</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
