const cardContainer = document.getElementsByClassName("card-container")[0];
const selectType = document.getElementById("select_type");
/* const h6cards = document.querySelectorAll("h6") */


/* FUNZIONE PER DETERMINARE IL TIPO DI CARD DA MOSTRARE */
/* avrei potuto mettere nell'html direttamente i value 
    "animal, vegetable, all, user invece dei valori numerici, avrei potuto 
    evitare la funzione typeToShow*/
function typeToShow(typeCard){

    let showType = "";

    if (typeCard === 2){
        showType = "vegetable";
    } else if (typeCard === 3){
        showType = "animal";
    } else if(typeCard === 4){
        showType = "user";
    } else if(typeCard === 1){
        showType = "";
    }
    return showType;
}

/* FUNZIONE PER CREARE LA CARD */
/**
 * 
 * @param {{name: string}} icon // da qui posso modificare il tipo di dato
 */
function createCardIcon(icon){

    /* USO IL DESCTRURING DELL'OGGETTO PASSATO ALLA FUNZIONE PER PRENDERE TUTTE LE PROPRIETA DI CUI HO BISOGNO */
    let { name, prefix, type, family } = icon; 
          
    cardContainer.innerHTML += `<div class="flex-center card-icon">
                                        <i class="${family} ${prefix}${name} color-${type}"></i>
                                        <h6>${name.toUpperCase()}</h6>
                                    </div>`;
}

/* FOREACH PER AVERE SUBITO A SCHERMATA TUTTE LE ICONE */

allIcons.forEach(function(icon) {
    createCardIcon(icon)
});  

selectType.addEventListener("change", function() { 

    cardContainer.innerHTML = "";

    const typeCard = selectType.value;
    console.log(typeCard)

    const selectedTypeCard = typeToShow(parseInt(typeCard));
    console.log(selectedTypeCard);
    
    let arrayType = [];

    if (selectedTypeCard === "") {

        allIcons.forEach(function(icon) {
            createCardIcon(icon)
        });                  
    } else { 
    /************ CORREZIONE USANDO *FILTER* ***************/    
        arrayType = allIcons.filter(function(icon) {
            // voglio quest'elemento nell'array finale?
            return icon.type === selectedTypeCard
        })
        
    /*********** FILTRO MANUALE *********/    
        /* allIcons.forEach(function(icons) {
            let {type} = icons;
             console.log(type); 
            if (type === selectedTypeCard){
                arrayType.push(icons);
            }  
        }); */
        console.log(arrayType)
        arrayType.forEach(function(icon){
            createCardIcon(icon);
        })

    }
                        
    
});
 
