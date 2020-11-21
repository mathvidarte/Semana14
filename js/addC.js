const database = firebase.database();
const auth = firebase.auth();

const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const addContact = document.getElementById('addContact');


const addContacts = () => {
    auth.onAuthStateChanged(
        (user)=>{
            let reference = database.ref('users/'+user.uid+'/contacts').push();
            let contactos = {
                id: reference.key,
                nombre: nombre.value,
                telefono: telefono.value
                
            };
            console.log(nombre);
            reference.set(contactos).then(
                ()=>{
                   window.location.href="index.html";
                }
            );
        }
        
    );
  
    
}
addContact.addEventListener('click', addContacts);