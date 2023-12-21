function validateForm(input) {
    let email = document.forms[0]["email"].value;
    let password = document.forms[0]["password"].value;
    let adresse = document.forms[0]["adresse"].value;
    let prenom = document.forms[0]["prenom"].value;
    let nom = document.forms[0]["nom"].value;
    let date = document.forms[0]["date"].value;
    
    let hasError = false;
    if (email == "" || password == "" || adresse == "" || prenom == "" || nom == "" || date == "") {
        alert("Veuillez remplir tous les champs obligatoires.");
        hasError = true;
    }

    if(input == 'employeur'){
    let nomE = document.forms[0]["nomE"].value;
    let information = document.forms[0]["information"].value;
    let Adressee = document.forms[0]["Adressee"].value;



    if( nomE == "" || information=="" || Adressee == "" ){
        alert("Veuillez remplir tous les champs de l'enterprise.");
        hasError = true;

    }

    }

     const birthYear = new Date(date).getFullYear();
     const currentYear = new Date().getFullYear();
     if (birthYear > 2005 || birthYear < 1900) {
         alert("La date de naissance doit être en 2005 ou avant.");
         hasError = true;
     }

    let sexeInput = document.getElementsByName('sexe');
    if (!sexeInput[0].checked && !sexeInput[1].checked) {
        alert("Veuillez sélectionner votre sexe.");
        hasError = true;
    }

    return !hasError;
}

