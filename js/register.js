const database = firebase.database();
const auth = firebase.auth();

const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const correo = document.getElementById('correo');
const password = document.getElementById('password');
const rpassword = document.getElementById('rpassword');
const regBtm = document.getElementById('regBtm');

var isSignup = false;

auth.onAuthStateChanged(
    (user)=>{
        if(user !== null) {
            if(isSignup) {
                //Depositar datos
                let userDB = {
                    id: user.uid,
                    nombre: nombre.value,
                    telefono: telefono.value,
                    correo: correo.value,
                    password: password.value
                };
                //Se crea en el db;
                database.ref('users/'+userDB.id).set(userDB).then(
                    ()=>{
                        //Va a la lista
                        window.location.href="index.html";
                    }
                );
            } else {
                //Si ya estoy loggeado y entro a registro me lleva a lista
                window.location.href="index.html";
            }
        }
    }
);

//Realizo el registro
regBtm.addEventListener('click', () => {
    isSignup = true;
    auth.createUserWithEmailAndPassword(correo.value, password.value);
});

