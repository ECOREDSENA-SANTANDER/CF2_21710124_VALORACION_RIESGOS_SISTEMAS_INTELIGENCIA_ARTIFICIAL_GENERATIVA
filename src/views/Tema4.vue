<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Construcción y análisis de la matriz de riesgos
    
    .bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La matriz de riesgos constituye uno de los instrumentos más utilizados para consolidar los resultados de la valoración. Su función consiste en organizar los escenarios, aplicar criterios comunes, determinar niveles relativos y facilitar la priorización de decisiones.
        br
        br
        | Sin embargo, la matriz no debe comprenderse simplemente como una hoja de cálculo con colores. Su valor depende de la información que contiene y de la calidad del razonamiento utilizado para construirla.
    
    p Una matriz bien estructurada permite responder preguntas como las siguientes: ¿qué evento se está evaluando?, ¿qué lo puede originar?, ¿qué activo o proceso se encuentra expuesto?, ¿qué consecuencias produciría?, ¿qué tan probable resulta?, ¿qué impacto tendría?, ¿qué controles existen?, ¿son efectivos?, ¿qué riesgo permanece?, ¿quién debe tratarlo?
    p La matriz establece, de esta manera, un puente entre la identificación, la valoración y el tratamiento.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3.text-white Estructura, puntuación y determinación del riesgo inherente
    
    img.mb-4(src='@/assets/curso/temas/t4/2.png', alt='')

    p Antes de asignar puntuaciones se necesita recuperar la información construida durante la identificación. Cada escenario debe expresarse con suficiente precisión para evitar valoraciones ambiguas.
    p Una formulación útil mantiene una secuencia lógica:

    .row.mb-4
      .col-lg-12
        .cajon.color-primario.bg-color-5.p-4
          p.mb-0.text-center #[b Fuente o causa → evento → consecuencia]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        img(src='@/assets/curso/temas/t4/3.png', alt='')
      .col-lg-9
        .row.justify-content-center.align-items-center.mb-5.bg-color-4
          .col-lg-5
            img(src='@/assets/curso/temas/t4/4.svg', alt='')
          .col-lg-7
            h4 Por ejemplo:
            p Debido a la ausencia de restricciones para el ingreso de información confidencial, un usuario podría introducir datos personales en un servicio externo de IA generativa, ocasionando tratamiento no autorizado, exposición de información y afectación reputacional.
        p Esta formulación es más útil que registrar solamente “riesgo de privacidad”, porque permite comprender qué condición origina el escenario, qué podría ocurrir y cuál sería su efecto.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3.text-white Campos esenciales de una matriz
    
    p Aunque cada organización puede adoptar su propio instrumento, una matriz para IA generativa puede incluir los siguientes elementos:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 2.
          span Campos de una matriz
        .tabla-a.color-acento-contenido
          table
            caption Campos de una matriz
            thead
              tr
                th Campo
                th Propósito
            tbody
              tr
                td #[b Identificador]
                td Facilita la trazabilidad del escenario.
              tr
                td #[b Proceso o caso de uso]
                td Relaciona el riesgo con la actividad organizacional.
              tr
                td #[b Activo o elemento afectado]
                td Indica qué recurso, persona o proceso puede verse comprometido.
              tr
                td #[b Fuente o causa]
                td Explica la condición que origina el escenario.
              tr
                td #[b Evento]
                td Describe qué podría ocurrir.
              tr
                td #[b Consecuencia]
                td Expresa los posibles efectos.
              tr
                td #[b Categoría de riesgo]
                td Permite agrupar escenarios semejantes.
              tr
                td #[b Probabilidad]
                td Estima la posibilidad de ocurrencia.
              tr
                td #[b Impacto]
                td Estima la severidad de las consecuencias.
              tr
                td #[b Nivel inherente]
                td Representa el riesgo antes de considerar controles.
              tr
                td #[b Controles existentes]
                td Registra medidas ya implementadas.
              tr
                td #[b Eficacia del control]
                td Valora el funcionamiento real de dichas medidas.
              tr
                td #[b Riesgo residual]
                td Representa el nivel que permanece.
              tr
                td #[b Prioridad]
                td Ordena la necesidad de intervención.
              tr
                td #[b Responsable]
                td Identifica quién debe gestionar el escenario.
    
    p No todos los instrumentos requieren exactamente los mismos campos. La organización debe seleccionar aquellos que permitan tomar decisiones y conservar trazabilidad sin transformar la evaluación en una carga documental innecesaria.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3.text-white Determinación del riesgo inherente

    p El riesgo inherente corresponde al nivel existente antes de considerar el efecto de los controles implementados. Su función consiste en mostrar la exposición inicial del escenario.
    p Una metodología semicuantitativa sencilla puede emplear:

    .row.mb-4
      .col-lg-12
        .cajon.color-primario.bg-color-5.p-4
          p.mb-0.text-center #[b Riesgo inherente = Probabilidad × Impacto]
    
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-3.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Si se utilizan escalas entre 1 y 5, el resultado se encontrará entre 1 y 25.
        br
        br
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 3.
          span Ejemplo de una organización
          .tabla-a.color-acento-contenido
            table
              caption Ejemplo de una organización
              thead
                tr
                  th Puntuación
                  th Nivel
              tbody
                tr
                  td 1 a 4
                  td Bajo.
                tr
                  td 5 a 9
                  td Moderado.
                tr
                  td 10 a 16
                  td Alto.
                tr
                  td 17 a 25
                  td Crítico.
        br
        br
        | Estos rangos son únicamente ilustrativos. No existe una clasificación universal que deba aplicarse a todas las organizaciones.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3.text-white Eficacia de controles, riesgo residual y priorización

    p Una vez determinado el riesgo inherente, se analizan los controles existentes. Un control corresponde a una medida técnica, organizacional, procedimental o humana destinada a modificar el riesgo.
    p En sistemas de IA generativa pueden existir controles como:

    .row.justify-content-center.align-items-center.mb-5.bg-color-8
      .col-lg-3
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | restricciones de acceso;
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | autenticación;
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | segmentación de permisos;
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | filtros de información;
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | validación de entradas;
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | revisión humana;
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | pruebas de seguridad;
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | registro de actividades;
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | políticas de uso;
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | capacitación;
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | mecanismos de trazabilidad;
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | procedimientos de respuesta a incidentes.
      .col-lg-5
        img(src='@/assets/curso/temas/t4/6.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/temas/t4/7.png', alt='')
      .col-lg-7
        .row.justify-content-center.mb-5
          .col-lg-2
            img(src='@/assets/curso/temas/t4/8.svg', alt='')
          .col-lg-10
            p Sin embargo, la mera existencia documental de un control no significa que sea eficaz.
            p Una política puede indicar que ningún empleado debe ingresar datos sensibles en herramientas externas, pero si no existe capacitación, supervisión ni mecanismo técnico que facilite el cumplimiento, su eficacia podría ser limitada.
        p De manera semejante, una organización puede afirmar que todas las salidas generadas son revisadas por una persona, pero si un trabajador debe revisar miles de respuestas en un tiempo insuficiente, la supervisión humana existe formalmente sin garantizar un control efectivo.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3.text-white Evaluación de la eficacia de controles
    
    p La eficacia puede analizarse mediante diferentes criterios:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.color-acento-contenido
              .p-4 
                h3.text-center Diseño
                p.mb-.text-center Determina si el control está concebido adecuadamente para modificar el riesgo.
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.color-acento-contenido
              .p-4 
                h3.text-center Implementación
                p.mb-.text-center Establece si el control realmente se encuentra aplicado.
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.color-acento-contenido
              .p-4 
                h3.text-center Operación
                p.mb-.text-center Verifica si funciona de forma consistente durante el uso cotidiano.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.color-acento-contenido
              .p-4 
                h3.text-center Cobertura
                p.mb-.text-center Analiza qué proporción de escenarios o usuarios se encuentra protegida.
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.color-acento-contenido
              .p-4 
                h3.text-center Evidencia
                p.mb-.text-center Permite comprobar el funcionamiento mediante registros, pruebas, auditorías o indicadores.
      

    p Considérese nuevamente el riesgo de publicación de información incorrecta generada por IA.
    p La organización establece como control que un instructor debe validar todo contenido antes de publicarlo. Para valorar su eficacia se debería comprobar:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-9
              .p-4 
                p.mb-.text-center #[b ¿Existe un procedimiento definido?]
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-9
              .p-4 
                p.mb-.text-center #[b ¿Los instructores conocen el procedimiento?]
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-9
              .p-4 
                p.mb-.text-center #[b ¿Poseen tiempo y competencias para verificar las respuestas?]
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-9
              .p-4 
                p.mb-.text-center #[b ¿La plataforma impide técnicamente la publicación antes de la revisión?]
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-9
              .p-4 
                p.mb-.text-center #[b ¿Queda registro de quién aprobó el contenido?]
      .col-lg-4
        .row.mb-4
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta.bg-color-9
              .p-4 
                p.mb-.text-center #[b ¿Se han detectado casos donde el control no funcionó?]
    
    p Estas preguntas transforman una afirmación general “hay revisión humana” en evidencia concreta sobre su efectividad.
    
    SlyderE(indicadores="derecha")
      .row.bg-color-6
        .col-md-6.mb-4.mb-md-0
          h3 Riesgo residual
          p El riesgo residual representa el nivel que permanece después de considerar los controles existentes y su eficacia.
          p Una forma simplificada de representar el proceso consiste en volver a estimar probabilidad e impacto considerando la situación posterior a los controles.
          p Retomando el ejemplo anterior:
          h3 Riesgo inherente
          p.mb-0 Probabilidad = 4
          p.mb-0 Impacto = 4
          p Nivel = 16
          p Después de establecer revisión obligatoria, fuentes verificadas y registro de aprobación, el equipo vuelve a analizar el escenario.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t4/9.png', alt='')
      .row.bg-color-6
        .col-md-6.mb-4.mb-md-0
          h3 Riesgo residual
          p.mb-0 Probabilidad = 2
          p.mb-0 Impacto = 4
          p Nivel = 8
          p El impacto puede permanecer en 4 porque, si el evento llegara a ocurrir, sus consecuencias continuarían siendo importantes. Lo que disminuye es la probabilidad de que un error alcance al usuario debido a los controles.
          p Este ejemplo permite comprender que un control no necesariamente modifica todas las variables.
          p Otros controles pueden disminuir el impacto. Por ejemplo, limitar el número de registros accesibles a una herramienta puede reducir la cantidad de información comprometida en caso de incidente.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/t4/10.png', alt='')


    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3.text-white Eficacia y puntuaciones porcentuales
    
    .bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Algunas metodologías utilizan porcentajes para representar la eficacia de controles. Por ejemplo, podrían clasificarla como:
          br
          br
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Inexistente.
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Baja.
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Moderada.
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Alta.
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Muy alta.
          br
          br
          | También podrían asignarse porcentajes aproximados.
          br
          br
          | Debe actuarse con prudencia cuando se utilizan cifras. Afirmar que un control tiene “80 % de eficacia” requiere explicar cómo se obtuvo ese porcentaje. Si no existe evidencia suficiente, resulta más transparente utilizar categorías descriptivas respaldadas por criterios.
          br
          br
          | La falsa precisión puede generar una confianza injustificada.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3.text-white Priorización de riesgos
    
    p El propósito final de la valoración consiste en apoyar la priorización. Los recursos organizacionales son limitados y no todos los escenarios pueden recibir la misma atención al mismo tiempo.
    p La priorización considera normalmente el nivel residual, pero puede incorporar otros criterios:

    .row.justify-content-center.align-items-center.mb-5.bg-color-8
      .col-lg-3
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | Impacto máximo posible.
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | Obligaciones legales.
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | Afectación de derechos.
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | Criticidad del proceso.
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | Número de personas expuestas.
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | Dependencia tecnológica.
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | Dificultad para detectar el evento.
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | Velocidad con que puede propagarse.
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | Capacidad de recuperación.
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | Costo y viabilidad del tratamiento.
      .col-lg-5
        img(src='@/assets/curso/temas/t4/12.png', alt='')
    
    .row.justify-content-center.align-items-center.mb-5
        .col-lg-7
          .row.justify-content-center.mb-4
            .col-lg-2
              img(src='@/assets/curso/temas/t4/14.svg', alt='')
            .col-lg-10
              p Por ejemplo, dos riesgos pueden tener el mismo nivel residual, pero uno afecta un proceso administrativo interno mientras el otro puede comprometer información personal de miles de usuarios. El segundo podría recibir prioridad superior.
          p #[em NIST AI RMF] plantea que la gestión debe priorizar los riesgos de acuerdo con el contexto y con la tolerancia definida por la organización. El objetivo no consiste en eliminar absolutamente toda incertidumbre, sino en adoptar decisiones fundamentadas sobre qué escenarios requieren respuesta inmediata, cuáles pueden monitorearse y cuáles pueden aceptarse bajo condiciones determinadas.
        .col-lg-5
          img(src='@/assets/curso/temas/t4/13.png', alt='')
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3.text-white Ejemplo integrado de una matriz
    
    p A continuación, se presenta una matriz simplificada para un caso de uso educativo.
    p Caso: asistente generativo para apoyar la elaboración de materiales de formación.

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 4.
      span Matriz simplificada para un caso de uso educativo
    .tabla-a.color-acento-contenido.mb-4
      table
        caption Matriz simplificada para un caso de uso educativo
        thead
          tr
            th Riesgo
            th P
            th I
            th Inherente
            th Control existente
            th P residual
            th I residual
            th Residual
            th Prioridad
        tbody
          tr
            td #[b Generación de información técnica incorrecta]
            td 4
            td 4
            td 16
            td Revisión por instructor y verificación de fuentes.
            td 2
            td 4
            td 8
            td Media.
          tr
            td #[b Ingreso de datos personales en prompts]
            td 3
            td 5
            td 15
            td Política de uso, anonimización y capacitación.
            td 2
            td 5
            td 10
            td Alta.
          tr
            td #[b Uso de contenido generado sin identificar procedencia]
            td 3
            td 3
            td 9
            td Lineamientos de transparencia y registro.
            td 2
            td 3
            td 6
            td Media.
          tr
            td #[b Interrupción del proveedor externo]
            td 2
            td 4
            td 8
            td Procedimiento alternativo de trabajo.
            td 2
            td 2
            td 4
            td Baja.
          tr
            td #[b Inyección de instrucciones mediante documentos externos]
            td 3
            td 5
            td 15
            td Restricción de permisos y validación de fuentes.
            td 2
            td 5
            td 10
            td Alta.
    
    p.mb-0 #[b P = Probabilidad.]
    p #[b I = Impacto.]

    p Este ejemplo demuestra que el riesgo residual no depende exclusivamente de la puntuación inicial. Los controles existentes pueden modificar su nivel, pero los escenarios de impacto elevado pueden continuar requiriendo atención.

    //podcats

    p Una organización puede establecer momentos específicos de reevaluación, por ejemplo:

    .row.justify-content-center.align-items-center.mb-5.bg-color-8
      .col-lg-3
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | Incorporación de un nuevo modelo.
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | Modificación de permisos.
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | Conexión con una nueva base de datos.
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | Ampliación significativa del número de usuarios.
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | Aparición de un incidente.
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | Cambio contractual.
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | Modificación normativa.
        ul.lista-ul--color.lista-ul--separador
          li 
            i.fas.fa-feather
            | Identificación de una nueva categoría de riesgo.
      .col-lg-5
        img(src='@/assets/curso/temas/t4/16.png', alt='')

    p La matriz debe comprenderse como un instrumento dinámico de gestión y no como un documento elaborado una única vez para cumplir un requisito.


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
