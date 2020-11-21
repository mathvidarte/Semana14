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
                nombre: nombre.value,
                telefono: telefono.value
            };
            reference.set(contactos).then(
                ()=>{
                    window.location.href="index.html";
                }
            );
        }
        
    );
   
    
}
addContact.addEventListener('click', addContacts);