// Dom elements 
let nom = document.querySelector("#nom");
let rank = document.querySelector("#rank");
let liste = document.querySelector("#liste");
let add = document.querySelector("#add");

let clear = ()=>{
    nom.value = "";
    rank.value = "";
};

// settings events 
add.addEventListener("click", ()=>{
    enterNom = nom.value;
    enterRank = rank.value; 

    if(enterNom.trim().length <=0 || enterRank <5 || enterRank >1 || enterRank.trim().length <=0){
        // set alert in case wrong input value 
        function presentAlert() {
            const alert = document.createElement('ion-alert');
            alert.header = 'Alert';
            alert.subHeader = 'Input';
            alert.message = 'Input invalid please correct an try again.';
            alert.buttons = ['OK'];
    
            document.body.appendChild(alert);
            return alert.present();

        }
        return presentAlert();

    }
    
    const newItem = document.createElement("ion-item");
    newItem.innerHTML += "<strong>" + enterNom + " " + "-" + "The Complete Guide </strong> "  + " - " + enterRank + "/5";
    liste.appendChild(newItem);
    clear();
    
  
});