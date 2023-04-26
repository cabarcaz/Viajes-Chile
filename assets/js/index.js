// Enable tootip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Alert al pulsar enviar en formulario.
$(document).ready(function () {
  $("#btn-enviar").click(function () {
      alert("El correo fue enviado correctamente.");
  });
});