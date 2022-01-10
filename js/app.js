const app = {
    feeDefault : 15,
    /*Contient la valeur retournée par l'input, initialisée à feeDefault*/
    rangeFee : 15,
    /*Valeur possiblement modifée par la fréquence de l'abonnement*/
    feeToDisplay : 15,
    
    displayedPageviewsNumber : document.querySelector('.setting__pageviews-number'),
    displayedFee : document.querySelector('.displayed-fee__number'),
    inputFeeElm : document.getElementById('setting__slider'),
    sliderElm : document.getElementById('frequency__slider'),

    calculatePageviews : (fee) => 200 + (fee - app.feeDefault) * 10,

    modifyFeePageviews() {
        /*On calcule feeToDisplay en tenant compte de la fréquence d'abonnement*/
        (app.sliderElm.checked)? app.feeToDisplay = app.rangeFee * .75 : app.feeToDisplay = app.rangeFee;
        app.displayedPageviewsNumber.textContent = `${app.calculatePageviews(app.rangeFee)}K`;
        app.displayedFee.textContent = `$ ${app.feeToDisplay}`;
    },
    
    feePageviewsHandler (){
        /*On met à jour la valeur de l'abonnement en fonction de la valeur du range*/
        app.rangeFee = app.inputFeeElm.value;
        app.modifyFeePageviews();
        console.log("feePageviewsHandler a été exécuté")
    },

    feeModifierHandler (){ 
        app.modifyFeePageviews();
        document.querySelector(".yearly__tag").classList.toggle("yearly__tag--selected");
        console.log("feeModifierHandler a été exécuté")
    },

    init () {
        app.modifyFeePageviews();
        app.inputFeeElm.addEventListener('change', app.feePageviewsHandler);
        app.sliderElm.addEventListener('change', app.feeModifierHandler);
    }
}

app.init();