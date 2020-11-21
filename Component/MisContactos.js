class MisContactos {
    constructor(contactos){
        this.contactos = contactos;
    }

    render = ()=> {
        let component = document.createElement('div');
        component.className='listaContactos';

        let nomContacto = document.createElement('div');
        nomContacto.className='nomContacto'
        nomContacto.innerHTML=(
            this.contactos.nombre
        );

        let telCotacto = document.createElement('div');
        telCotacto.className='cadaContacto'
        telCotacto.innerHTML=(
            this.contactos.telefono
        );

        let deleteBtn = document.createElement('button');
        deleteBtn.className='deleteBtn';
        deleteBtn.innerHTML= ( 'x' 
        );

        deleteBtn.addEventListener('click', () => {
           
            auth.onAuthStateChanged(
                (user)=>{
                    console.log(user.uid);
                    const database = firebase.database();
                    database.ref('users/'+user.uid+'/contacts/'+this.contactos.id).set(null);
                }
            );
            
        });


        component.appendChild(nomContacto);
        component.appendChild(telCotacto);
        component.appendChild(deleteBtn);
        
       
        
        return component;
    }
}