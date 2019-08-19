const shops = {
  render: async () => {
    return `
    <section id="shops">
    <h3>Tiendas</h3>
    <div class="divider"></div>
    <div class="section">
      <h5>Zona sur</h5>
      <h6>Ciclocros</h6>
      <p><i class="material-icons tiny">location_on</i> Calle Melchor Pérez de soto, 211
      COLONIA AMPLIACIÓN MIGUEL HIDALGO TERCERA SECCIÓN (Tlalpan)
      14250, Tlalpan, CDMX</p>
      <p><i class="material-icons tiny">local_phone</i> 01 55 5423 7865</p>
    </div>
    <div class="divider"></div>
    <div class="section">
      <h5>Zona norte</h5>
      <h6>Bazzinga</h6>
      <p><i class="material-icons tiny">location_on</i>Calle Cienfuegos, 850
      Colonia Lindavista 07300, Gustavo A. Madero, CDMX </p>
      <p><i class="material-icons tiny">local_phone</i> 01 55 5929 4557</p>
    </div>
    <div class="divider"></div>
    <div class="section">
      <h5>Zona centro</h5>
      <h6>Bici Productos</h6>
      <p><i class="material-icons tiny">location_on</i>Calle San Pablo, 13
      Colonia Centro 06090, Cuauhtémoc, CDMX</p>
      <p><i class="material-icons tiny">local_phone</i> 01 55 3278 2328</p>
    </div>
    </section>
        `;
  },
  after_render: () => {}
};
export default shops;
