const adBtn = {
  render: async () => {
    return `
    <a class="btn-floating btn-large waves-effect waves-light teal" id="publicar"><i class="material-icons">add</i></a>
    `;
  },
  after_render: () => {}
};
export default addBtn;

/*FUNCIÓN PARA PUBLICAR*/

const publicar=document.getElementById("publicar");
​
let publish= async() => {
  const { value: text } = await Swal.fire({
    input: 'textarea',
    inputPlaceholder: '¿Qué quieres compartir?',
    inputAttributes: {
      'aria-label': 'Type your message here'
    },
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Publicar'
  })
  
  if (text) {
    Swal.fire('¡Listo!')
  }
}
​