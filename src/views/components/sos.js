const btnSos = {
    render: async () => {
      return `
      <div class="row modal">
      <div class="col s12 m5">
        <div class="card-panel teal">
          <span class="white-text">
          Has apretado el botón de emergencia S.O.S
          Tu ubicación será enviada a tu contacto de emergencia
          </span>
        </div>
      </div>
    </div>
      `;
    },
    after_render: () => {
      let sos = document.querySelectorAll('.modal');
      M.Modal.init(sos);
      console.log("se inicializó s.o.s");
    }
  };
  export default btnSos;
