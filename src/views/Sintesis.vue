<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La valoración de riesgos en sistemas de inteligencia artificial generativa permite transformar los escenarios previamente identificados en información útil para la toma de decisiones. El proceso requiere definir metodologías, criterios, escalas y fuentes de evidencia para estimar probabilidad, exposición, vulnerabilidad, impacto y criticidad de manera coherente con el contexto organizacional. La matriz de riesgos consolida esta información mediante la determinación del riesgo inherente, el análisis de los controles existentes y la estimación del riesgo residual, facilitando la priorización de los escenarios que demandan intervención. Sin embargo, la puntuación no sustituye el juicio profesional: la afectación de derechos, la sensibilidad de los datos, las obligaciones aplicables y la importancia del proceso pueden justificar decisiones específicas aun cuando dos escenarios presenten resultados numéricos semejantes.
    p El tratamiento convierte los resultados de la valoración en acciones concretas. Evitar, reducir, compartir o aceptar un riesgo exige considerar los objetivos del proceso, la tolerancia organizacional, la eficacia de los controles y las responsabilidades de las partes involucradas. En inteligencia artificial generativa, los controles pueden abarcar gobernanza, datos, seguridad, configuración, validación, supervisión humana, trazabilidad, proveedores, incidentes y continuidad. Su implementación debe integrarse en un plan con responsables, recursos, plazos, indicadores, umbrales, alertas, seguimiento y comunicación. De esta manera, la gestión deja de ser una actividad aislada y se convierte en un ciclo de mejora continua que permite adoptar y utilizar estas tecnologías de forma proporcional, responsable y coherente con las necesidades del proceso de negocio.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Valoración y tratamiento de riesgos en sistemas de inteligencia artificial generativa, presenta seis etapas: valoración del riesgo, factores de valoración, impactos, matriz de riesgos, tratamiento y plan de tratamiento. Incluye criterios, probabilidad, exposición, vulnerabilidad, impacto, controles, responsables y recursos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
