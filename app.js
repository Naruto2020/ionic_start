const nom = document.querySelector("#nom");
const prenom = document.querySelector("#prenom");
const valide = document.querySelector("#valide");
const cancel = document.querySelector("#cancel");
const liste = document.querySelector("#liste");
//const alertCtrl = document.querySelector("ion-alert");


const clear = () =>{
    nom.value = "";
    prenom.value = "";
}
// gestion des évènements 
valide.addEventListener("click", ()=>{
    
    const enterNom = nom.value;
    const enterPrenom = prenom.value;

    if(enterNom.trim().length <=0 || enterPrenom <=0 || enterPrenom.trim().length <=0){
        function presentAlert() {
            const alert = document.createElement('ion-alert');
            alert.cssClass = 'my-custom-class';
            alert.header = 'Alert';
            alert.subHeader = 'invalid input ';
            alert.message = 'Please enter valid fields.';
            alert.buttons = ['OK'];
          
            document.body.appendChild(alert);
            return alert.present();
          }
        return presentAlert();

    }
    const newItem = document.createElement("ion-item");
    newItem.textContent = enterNom + " " + enterPrenom;
    
    liste.appendChild(newItem);
    clear();
});

cancel.addEventListener("click", clear);