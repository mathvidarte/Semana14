const database = firebase.database();
const auth = firebase.auth();

const usuario = document.getElementById('usuario');

//btn logout
const logout = document.getElementById('logout');

//Btn agregar
const agregar = document.getElementById('agregar');

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