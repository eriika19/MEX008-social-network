import Utils from "../../services/Utils.js";


const sidebar = {
  render: async () => {
    let user = firebase.auth().currentUser;
    let name, email, photoUrl;
    
    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
    }

    return `
    <nav> 
    <a id="side-trigger" href="#" data-target="slide-out" class="sidenav-trigger">
    <i id="menu" class="material-icons">view_list</i></a>
    </nav>
    <ul id="slide-out" class="sidenav">
      <li>
        <div class="user-view">
          <div class="background">
            <!-- <img src="img/bike-day.jpg">-->
          </div>
          <a><img class="circle" src="${photoUrl}"></a>
          <a><span class="white-text name">${name}</span></a>
          <a><span class="white-text email">${email}</span></a>
        </div>
      </li>
      <li><a href="#/timeline"><i class="material-icons">home</i>Timeline</a></li>
      <li>
      <div class="divider"></div>
    </li>
      <li><a href="#/profile"><i class="material-icons">account_circle</i>Perfil</a></li>
      <li><a href="#/settings"><i class="material-icons">settings</i>Configuración</a></li>
      <li>
        <div class="divider"></div>
      </li>
      <li><a class="subheader">Directorio</a></li>
      <li><a class="waves-effect" href="#/shops"><i class="material-icons">directions_bike</i>Tiendas</a></li>
      <li><a class="waves-effect" href="#/workshops"><i class="material-icons">build</i>Talleres de reparación</a></li>
      <li class="right"><a id="sos" class="waves-effect right-align modal-trigger" href="#modalSOS"><i class="material-icons">report_problem</i>S.O.S.</a></li>     
      <li id="divider-final">
        <div class="divider"></div>
      </li>
      <li class="right"><a id="sign-out" class="waves-effect">Cerrar Sesión</a></li>
    </ul>

    <!-- Modal S.O.S. Structure -->
    <div id="modalSOS" class="modal">
      <div class="modal-content">
        <h5>¡${name} has presionado el botón de emergencia!</h4>
        <h6>Tu ubicación y alerta serán enviadas inmediatamente a todos los ciclistas cercanos a ti</h6>
      </div>
      <div class="modal-footer">
        <a class="modal-close waves-effect waves-green btn-flat">Entendido</a>
        <a href="#modalAddSOS" class="modal-close waves-effect waves-green btn-flat modal-trigger sos">Publicar S.O.S.</a>
      </div> 
    </div>

    <!-- Modal Add Structure -->
    <div id="modalAddSOS" class="modal modal-fixed-footer">
        <div class="modal-content">
            <h4>S.O.S.</h4>
            <div class="divider"></div>
            <div class="input-field">
                <textarea id="textarea-sos" class="materialize-textarea">¡Chicos necesito ayuda! Me encuentro en las calles:</textarea>
                <label for="textarea-post"></label>
            </div>
        </div>
        <div class="modal-footer">
            <a class="modal-close waves-effect waves-green btn-flat">Cancelar</a>
            <a id="add-sos" href="#/timeline" class="modal-close waves-effect waves-green btn-flat">Publicar S.O.S.</a>
        </div>
    </div>
    `;
  },
  after_render: () => {
    const addSOS = document.getElementById('add-sos');
    addSOS.addEventListener('click', () => {
      Utils.sosPost();
    });

    //Inicializando sidebar
    const btnCollapse = document.querySelectorAll(".sidenav");
    M.Sidenav.init(btnCollapse);

    //Inicializando modales   
    let mSOS = document.querySelectorAll('.modal');
    M.Modal.init(mSOS);   



    //agregando chismosa para 'sign-out'
    document.getElementById("sign-out").addEventListener("click", () => {
      firebase.auth().signOut();
    });
  },
};

export default sidebar;
