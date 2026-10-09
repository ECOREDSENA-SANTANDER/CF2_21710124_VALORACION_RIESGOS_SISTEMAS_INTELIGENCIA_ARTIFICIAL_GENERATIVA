<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Factores para determinar el nivel de riesgo
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Después de identificar y analizar un riesgo, es necesario determinar #[b qué tan importante es y qué atención requiere.] Para ello, se consideran diferentes factores que ayudan a comprender la posibilidad de que ocurra un evento, sus posibles consecuencias y las condiciones que pueden favorecer o reducir su materialización.
          br
          br
          | Entre los principales factores se encuentran la #[b probabilidad, exposición, vulnerabilidad, impacto, criticidad, tolerancia y apetito de riesgo.] Aunque están relacionados, cada uno cumple una función diferente dentro de la valoración.
          br
          br
          | Comprender sus diferencias permitirá realizar análisis más consistentes y evitar que la valoración dependa únicamente de una percepción personal.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3.text-white Probabilidad, exposición y vulnerabilidad
    
    img.mb-4(src='@/assets/curso/temas/t2/2.png', alt='')

    p Estos factores permiten comprender qué tan posible es que ocurra un riesgo y qué condiciones pueden favorecer su materialización.

    .subt-2.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t2/subt2.svg', alt='')
      h3.mb-0.mx-3 ¿Qué es la probabilidad?
    
    p La #[b probabilidad] representa la posibilidad de que ocurra un escenario de riesgo bajo determinadas condiciones.
    p En sistemas de inteligencia artificial generativa no siempre existen datos estadísticos suficientes para expresar esta posibilidad mediante porcentajes. Por esta razón, pueden utilizarse escalas cualitativas o semicuantitativas sustentadas en evidencias.
    p Para estimar la probabilidad, pueden plantearse preguntas como:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center ¿El evento ya se ha presentado?
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center ¿Con qué frecuencia se utiliza el sistema?

      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center ¿Cuántas oportunidades existen para que ocurra?
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center ¿Qué tan fácil es activar la condición que origina el riesgo?
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center ¿Existen controles que permitan prevenirlo?
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center ¿Se han presentado situaciones similares en otros sistemas?
    
    p Estas preguntas permiten pasar de una percepción general a un análisis más estructurado.

    .row.mb-4
      .col-lg-12
        .cajon.color-primario.bg-color-5.p-4
          h5 Ejemplo
          p Imagine un sistema de inteligencia artificial generativa que puede producir información incorrecta. Si se utiliza una vez al mes para generar ideas preliminares, las oportunidades de que ocurra un incidente serán diferentes a las de un sistema utilizado diariamente para generar cientos de respuestas.
          p.mb-0 Por ello, la frecuencia de uso y las condiciones de operación deben formar parte del análisis.
    
    .subt-2.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t2/subt2.svg', alt='')
      h3.mb-0.mx-3 ¿Qué es la exposición?
    
    p La #[b exposición] representa el grado en que personas, procesos o activos están en contacto con una fuente de riesgo o con condiciones que pueden favorecer su materialización.
    p En inteligencia artificial generativa, la exposición puede aumentar cuando existe:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img(src='@/assets/curso/temas/t2/3.svg', alt='')
      .col-lg-8
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t2/4.svg', alt='')
            p.text-center Gran cantidad de usuarios.
          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t2/5.svg', alt='')
            p.text-center Uso frecuente del sistema.
          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t2/6.svg', alt='')
            p.text-center Acceso desde redes externas.
          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t2/7.svg', alt='')
            p.text-center Procesamiento de información sensible.
          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t2/8.svg', alt='')
            p.text-center Integración con varios sistemas.
          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t2/9.svg', alt='')
            p.text-center Automatización de decisiones.
          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t2/10.svg', alt='')
            p.text-center Publicación directa de los resultados.

    p Por el contrario, puede disminuir cuando existen pocos usuarios, permisos limitados, datos no sensibles y revisión previa de los resultados.

    .subt-2.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t2/subt2.svg', alt='')
      h3.mb-0.mx-3 ¿Qué es la vulnerabilidad?
    
    p La #[b vulnerabilidad] es una debilidad o condición que puede facilitar la ocurrencia de un evento o aumentar sus consecuencias.
    p Puede encontrarse en diferentes partes del sistema o del proceso, por ejemplo:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-7
              .p-4 
                p.mb-0.text-center Configuraciones técnicas inadecuadas.
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-7
              .p-4 
                p.mb-0.text-center Permisos excesivos.

      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-7
              .p-4 
                p.mb-0.text-center Falta de validación de los resultados.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-7
              .p-4 
                p.mb-0.text-center Ausencia de políticas para el manejo de datos.
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-7
              .p-4 
                p.mb-0.text-center Falta de capacitación.
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-7
              .p-4 
                p.mb-0.text-center Integraciones sin controles suficientes.

    .row.mb-4
      .col-lg-12
        .cajon.color-primario.bg-color-5.p-4
          h5 Ejemplo
          p.mb-0 La #[b vulnerabilidad] explica #[b qué debilidad puede facilitar el riesgo,] mientras que la exposición ayuda a comprender qué tan cerca o qué tan expuesto está el sistema a esa condición.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3.text-white Impacto, criticidad, tolerancia y apetito de riesgo
    
    p Estos elementos ayudan a comprender las posibles consecuencias del riesgo y los límites que deben considerarse al tomar decisiones.

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b ¿Qué es el impacto?]
          br
          br
          | El #[b impacto] representa la magnitud de las consecuencias que podrían generarse si el riesgo se materializa.
          br
          br
          | Mientras la probabilidad pregunta:
          br
          br
          | #[b ¿Qué tan posible es que ocurra?]
          br
          br
          | El impacto pregunta:
          br
          br
          | #[b ¿Qué podría suceder si ocurre?]
          br
          br
          | Esta diferencia es fundamental. Un evento poco frecuente puede requerir atención prioritaria si sus consecuencias son graves.

    p En sistemas de inteligencia artificial generativa, los impactos pueden afectar diferentes dimensiones, como:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center Personas y derechos.
      .col-lg-3
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center Información y privacidad.
      .col-lg-3
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center Continuidad de los procesos. 
      .col-lg-3
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center Cumplimiento normativo.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center Finanzas.
      .col-lg-3
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center Reputación.
      .col-lg-3
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center Seguridad.
      .col-lg-3
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-6
              .p-4 
                p.mb-0.text-center Ambiente.
    
    p Por ejemplo, una respuesta incorrecta generada durante una actividad creativa puede corregirse fácilmente. En cambio, una respuesta incorrecta utilizada para apoyar una decisión relacionada con la contratación, la seguridad o la atención de personas podría generar consecuencias mayores.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3.text-white Una escala de impacto

    p Para facilitar la valoración, una organización puede establecer una escala como la siguiente:
    
    SlyderF(columnas="col-lg-6 col-xl-4").mb-5
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/12.svg', alt='')
        h2.text-center Muy bajo
        p.text-center Consecuencia menor, reversible y limitada a una actividad.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/13.svg', alt='')
        h2.text-center Bajo
        p.text-center Afectación limitada que puede corregirse mediante procedimientos habituales.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/14.svg', alt='')
        h2.text-center Moderado
        p.text-center Afectación que requiere acciones adicionales, correcciones formales o intervención de varios responsables.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/15.svg', alt='')
        h2.text-center Alto
        p.text-center Afectación significativa sobre procesos, información, cumplimiento, reputación o derechos.
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/t2/16.svg', alt='')
        h2.text-center Muy alto
        p.text-center Consecuencias graves o extensas que pueden afectar derechos, procesos esenciales, generar incumplimientos críticos o producir una pérdida significativa de confianza.
    
    .row.mb-4
      .col-lg-12
        .cajon.color-primario.bg-color-5.p-4
          p.mb-0.text-center Estas categorías son #[b ilustrativas.] Cada organización debe adaptarlas a sus procesos, objetivos, obligaciones y contexto. 
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3.text-white ¿Qué es la criticidad?
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/temas/t2/17.png', alt='')
      .col-lg-7
        .row.justify-content-center.mb-4
          .col-lg-2
            img(src='@/assets/curso/temas/t2/18.svg', alt='')
          .col-lg-10
            p La #[b criticidad] permite relacionar el riesgo con la importancia del proceso, activo o decisión que podría verse afectado.      
        p Por ejemplo, un generador de imágenes utilizado para crear bocetos internos puede tolerar ciertos errores. Sin embargo, esos mismos errores podrían ser mucho más relevantes si el sistema se utiliza para generar comunicaciones oficiales.
        p Esto demuestra que #[b una misma tecnología puede representar diferentes niveles de riesgo dependiendo del contexto en el que se utilice.]
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3.text-white ¿Qué son el apetito y la tolerancia al riesgo?
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .row.justify-content-center.align-items-center.mb-5.bg-color-4
          .col-lg-4 
            img(src='@/assets/curso/temas/t2/19.svg', alt='')
          .col-lg-8
            p El #[b apetito de riesgo] corresponde al nivel y tipo de riesgo que una organización está dispuesta a asumir para alcanzar sus objetivos.
            p La #[b tolerancia al riesgo] establece los límites de variación que pueden aceptarse frente a un determinado riesgo.
        p Estos conceptos permiten relacionar la valoración con la toma de decisiones. Por ejemplo, una organización puede aceptar determinados errores en una herramienta utilizada para generar ideas, pero establecer límites mucho más estrictos cuando están involucrados datos personales, derechos o decisiones de alta importancia.
        p Por esta razón, un riesgo no debe tratarse únicamente porque aparece en una categoría determinada de una matriz. Su tratamiento debe considerar #[b los criterios establecidos por la organización, sus objetivos, sus obligaciones y las posibles consecuencias.]
      .col-lg-3
        img(src='@/assets/curso/temas/t2/20.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3.text-white El contexto también importa
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/21.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La valoración de riesgos en inteligencia artificial generativa no puede realizarse de manera aislada. Es necesario considerar #[b cómo, dónde, para qué y por quién se utiliza el sistema.]
        br
        br
        | Referentes como #[em NIST AI RMF,] ISO/IEC 42001:2023 y el Documento CONPES 4144 de 2025 promueven una gestión de la inteligencia artificial que tenga en cuenta el contexto, la gobernanza, la responsabilidad y los posibles efectos sobre las personas y las organizaciones.
    
    p Cuando intervienen datos personales, también deben considerarse las obligaciones aplicables en materia de protección de datos. De igual manera, los principios relacionados con derechos humanos, dignidad, equidad, privacidad, seguridad y supervisión humana resaltan la importancia de analizar las consecuencias de las decisiones asociadas con la inteligencia artificial.
    p Esto significa que #[b no todo riesgo puede aceptarse simplemente porque la organización esté dispuesta a asumirlo.] Existen obligaciones legales, responsabilidades institucionales y consideraciones éticas que también deben formar parte del análisis.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3.text-white Para recordar
    
    p La valoración del riesgo requiere mirar el escenario desde diferentes perspectivas:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img(src='@/assets/curso/temas/t2/22.svg', alt='')
      .col-lg-8
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t2/23.svg', alt='')
            h2.text-center Probabilidad
            p.text-center ¿Qué tan posible es que ocurra?
          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t2/24.svg', alt='')
            h2.text-center Exposición
            p.text-center ¿Qué tan expuesto está el sistema o proceso?
          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t2/25.svg', alt='')
            h2.text-center Vulnerabilidad
            p.text-center ¿Qué debilidad puede favorecer el evento?
          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t2/26.svg', alt='')
            h2.text-center Impacto
            p.text-center ¿Qué consecuencias podría generar?
          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t2/27.svg', alt='')
            h2.text-center Criticidad
            p.text-center ¿Qué tan importante es lo que podría verse afectado?
          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t2/28.svg', alt='')
            h2.text-center Tolerancia
            p.text-center ¿Qué nivel de variación puede aceptarse?
          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t2/29.svg', alt='')
            h2.text-center Apetito
            p.text-center ¿Qué nivel de riesgo está dispuesta a asumir la organización?

    p Al integrar estos elementos, el análisis deja de ser una simple asignación de números y se convierte en una #[b herramienta para comprender los riesgos y tomar decisiones más fundamentadas.]
    







</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
