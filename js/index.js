const database = firebase.database();
const auth = firebase.auth();

const usuario = document.getElementById('usuario');

//btn logout
const logout = document.getElementById('logout');

//Btn agregar
const agregar = document.getElementById('agregar');

//Conteiner de los contactos
const contactosContainer = document.getElementById('contactosContainer');

//Saber quien esta loggeado
auth.onAuthStateChanged(
    (user)=>{
        if(user !== null) {
            database.ref('users/'+user.uid).once(
                'value',
                (data)=>{
                    let userDB = data.val();
                    usuario.innerHTML=userDB.nombre;
                }
            );

        //Lectura del firebase
            database.ref('users/'+user.uid+'/contacts').on('value', function(data){
                contactosContainer.innerHTML='';
                data.forEach(
                    contactos =>{
                        let valor = contactos.val();
                        console.log(valor.nombre);
                        let mc = new MisContactos(valor);
                        contactosContainer.appendChild(mc.render());
                    }
            );
        });
    
        }else {
            window.location.href="login.html";
        }
    }
);







logout.addEventListener('click', ()=>{
    auth.signOut().then(
        ()=>{
            window.location.href='login.html';
        }
    ).catch(
        (error)=> {
            alert(error.message);
        }
    );
});

agregar.addEventListener('click', ()=> {
    window.location.href="addC.html";
});