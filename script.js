const cardContainer = document.getElementsByClassName("card-container")[0];
const selectType = document.getElementById("select_type");
/* const h6cards = document.querySelectorAll("h6") */


/* FUNZIONE PER DETERMINARE IL TIPO DI CARD DA MOSTRARE */

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

function createCardIcon(icons){

    /* USO IL DESCTRURING DELL'OGGETTO PASSATO ALLA FUNZIONE PER PRENDERE TUTTE LE PROPRIETA DI CUI HO BISOGNO */
    let { name, prefix, type, family } = icons; 
    
    let stringName = `${name}`;
    let upperName = stringName.toUpperCase();
    

    
    cardContainer.innerHTML += `<div class="flex-center card-icon">
                                        <i class="${family} ${prefix}${name} color-${type}"></i>
                                        <h6>${upperName}</h6>
                                    </div>`;
}

/* FOREACH PER AVERE SUBITO A SCHERMATA TUTTE LE ICONE */

allIcons.forEach(function(icons) {
    createCardIcon(icons)
});                  

selectType.addEventListener("change", function() { 

    cardContainer.innerHTML = "";

    const typeCard = selectType.value;
    console.log(typeCard)

    const selectedTypeCard = typeToShow(parseInt(typeCard));
    console.log(selectedTypeCard);
    
    const arrayType = [];

    if (selectedTypeCard === "") {

        allIcons.forEach(function(icons) {
            createCardIcon(icons)
        });                  
    } else { 

        allIcons.forEach(function(icons) {
            let {type} = icons;
            /* console.log(type); */
            if (type === selectedTypeCard){
                arrayType.push(icons);
            }  
        });
        console.log(arrayType)
        arrayType.forEach(function(icons){
            createCardIcon(icons);
        })

    }
                        
    
});
 
