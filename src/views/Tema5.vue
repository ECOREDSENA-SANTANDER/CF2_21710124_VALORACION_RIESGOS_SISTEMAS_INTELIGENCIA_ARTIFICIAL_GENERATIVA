<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Tratamiento y control de riesgos en inteligencia artificial generativa
    
    .row.justify-content-center.align-items-center.mb-5.bg-color-2.mb-4
      .col-lg-5
        img(src='@/assets/curso/temas/t5/1.png', alt='')
      .col-lg-7
        img(src='@/assets/curso/temas/t5/2.svg', alt='')
        p.text-white La valoración de riesgos permite establecer cuáles escenarios requieren intervención y qué nivel de atención demandan. El tratamiento del riesgo consiste en seleccionar e implementar medidas orientadas a modificar su probabilidad, disminuir sus consecuencias o mantenerlo dentro de los niveles de tolerancia definidos por la organización. En los sistemas de inteligencia artificial generativa, estas medidas pueden ser técnicas, humanas, organizacionales, procedimentales o contractuales.
        p.text-white El tratamiento debe guardar relación con el nivel de riesgo residual, la criticidad del proceso, las obligaciones aplicables y los recursos disponibles. Por esta razón, no todos los riesgos requieren la misma respuesta. Un escenario relacionado con generación de borradores puede admitir controles sencillos, mientras que otro que involucre datos personales, decisiones sobre personas o acceso a sistemas institucionales puede exigir medidas más estrictas.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.mx-3.text-white Opciones de tratamiento del riesgo
    
    img.mb-4(src='@/assets/curso/temas/t5/3.png', alt='')

    p Las principales opciones de tratamiento son evitar, reducir, compartir o transferir, y aceptar o monitorear el riesgo.
    p Evitar el riesgo implica eliminar la actividad o condición que genera una exposición considerada inaceptable. Por ejemplo, una institución puede decidir no permitir que un sistema generativo tome autónomamente decisiones académicas y limitar su uso a la elaboración de borradores sujetos a revisión humana.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/temas/t5/4.png', alt='')
      .col-lg-7
        .row.justify-content-center.mb-5
          .col-lg-2
            img(src='@/assets/curso/temas/t5/5.svg', alt='')
          .col-lg-10
            p Reducir el riesgo consiste en implementar controles que disminuyan su probabilidad o impacto. Entre las medidas aplicables se encuentran la restricción de accesos, minimización de datos, validación de contenidos, revisión humana, capacitación de usuarios, pruebas de seguridad y monitoreo. La combinación de varios controles suele ser más efectiva que depender de una única medida.
        p Compartir o transferir el riesgo permite distribuir determinadas responsabilidades o consecuencias mediante contratos, acuerdos con proveedores, seguros u otros mecanismos. Sin embargo, contratar un servicio externo no elimina la responsabilidad de la organización sobre la forma en que utiliza la tecnología, los datos que procesa o las decisiones que adopta.
        p Aceptar y monitorear el riesgo significa reconocer que un nivel de riesgo permanece y continuar la actividad cuando este se encuentra dentro de la tolerancia organizacional. La aceptación debe estar documentada, contar con la autorización correspondiente y acompañarse de seguimiento cuando las condiciones puedan cambiar.
    
    .row.mb-4
      .col-lg-12
        .cajon.color-primario.bg-color-5.p-4
          p.mb-0.text-center La selección de la opción de tratamiento debe responder, entre otras, a preguntas como: ¿el riesgo supera la tolerancia definida?, ¿puede eliminarse la actividad que lo origina?, ¿qué controles pueden reducirlo?, ¿existen obligaciones legales que condicionen la decisión? y ¿quién tiene autoridad para aceptar el riesgo residual?

    .bg-color-1.mb-4
      img(src='@/assets/curso/temas/t5/6.svg', alt='')
      .bg-color-1.p-4
        .tarjeta.bg-white.p-4
          TarjetaAudio.color-acento-botones(
          texto="<b>Pódcast:</b>"
          :audio="require_src('@/assets/actividad/audio/success.mp3')")
          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          p #[b ¡Explore el pódcast!]
          p Ahora es momento de profundizar en los controles y la formulación del plan de tratamiento. Reproduzca el pódcast y conozca cómo seleccionar medidas de control y estructurar acciones que permitan gestionar los riesgos identificados de manera organizada y efectiva.
    
    p Por ejemplo, frente al riesgo de generar información normativa incorrecta, una organización puede establecer como medida la revisión obligatoria de las respuestas mediante fuentes institucionales actualizadas, asignar un responsable, determinar un plazo de implementación y verificar periódicamente el porcentaje de contenidos revisados antes de su publicación.

    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 5.
      span Ejemplo simplificado de plan de tratamiento de riesgos
    .tabla-a.color-acento-contenido.mb-4
      table
        caption Ejemplo simplificado de plan de tratamiento de riesgos
        thead
          tr
            th Riesgo
            th Medida de tratamiento
            th Responsable
            th Indicador
            th Seguimiento
        tbody
          tr
            td Información incorrecta
            td Validación humana y fuentes autorizadas.
            td Responsable del proceso.
            td Respuestas revisadas.
            td Mensual.
          tr
            td Exposición de datos
            td Minimización y restricción de información.
            td Área tecnológica y protección de datos.
            td Incidentes registrados.
            td Mensual.
          tr
            td Inyección de instrucciones
            td Restricción de permisos y pruebas de seguridad.
            td Seguridad de la información.
            td Pruebas superadas.
            td Trimestral.
          tr
            td Dependencia del proveedor
            td Procedimiento alternativo de operación.
            td Área tecnológica.
            td Prueba de continuidad.
            td Semestral.

    p Los indicadores permiten comprobar tanto la ejecución como la eficacia de los controles. El seguimiento debe identificar cambios, incidentes, desviaciones o nuevos riesgos que justifiquen actualizar la evaluación.

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
