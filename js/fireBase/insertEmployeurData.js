// insertEmployeurData.js

import { getDatabase, set, get, update, remove, ref, child }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const db = getDatabase();

export function insertEmployeurData() {



        let tnomEnterprise = document.getElementById("nomEnterprise");
        let tadresseEnterprise = document.getElementById("adresseEnterprise");
        let tinfoEnterprise = document.getElementById("infoEnterprise");
    
    
        let tEnom = document.getElementById("Enom");
        let tEprenom = document.getElementById("Eprenom");
        let tEnaissance = document.getElementById("Enaissance");
        let tEadresse = document.getElementById("Eadresse");
        let tEpassword = document.getElementById("Epassword");
        let tEemail = document.getElementById("Eemail");
        let tEsexe = document.querySelector('input[name="sexe"]:checked').value;
        let tEId =generateRandomId();
      
        localStorage.setItem("nomEnterprise", tnomEnterprise.value);
        localStorage.setItem("adresseEnterprise", tadresseEnterprise.value);
        localStorage.setItem("infoEnterprise", tinfoEnterprise.value);
        localStorage.setItem("Enom", tEnom.value);
        localStorage.setItem("Eprenom", tEprenom.value);
        localStorage.setItem("Enaissance", tEnaissance.value);
        localStorage.setItem("Eadresse",tEadresse.value);
        localStorage.setItem("Epassword", tEpassword.value);
        localStorage.setItem("Eemail", tEemail.value);
        localStorage.setItem("Esexe",tEsexe);
        localStorage.setItem("Eid",tEId) ;
        
        function generateRandomId() {
         
          const randomString = Math.random().toString(10).substring(2);
        
          const timestamp = new Date().getTime();
        
          const randomId = randomString + timestamp;
        
          return randomId;
        }
      
      
      
      
 

    let Enom = localStorage.getItem("Enom");
    let Eprenom = localStorage.getItem("Eprenom");
    let Enaissance = localStorage.getItem("Enaissance");
    let Eadresse = localStorage.getItem("Eadresse");
    let Epassword = localStorage.getItem("Epassword");
    let Eemail = localStorage.getItem("Eemail");
    let Esexe = localStorage.getItem("Esexe");
    let Eid = localStorage.getItem("Eid");

    let nomEnterprise = localStorage.getItem("nomEnterprise");
    let adresseEnterprise = localStorage.getItem("adresseEnterprise");
    let infoEnterprise = localStorage.getItem("infoEnterprise");

    let alertMessage =
        "\nNom: " + Enom +
        "\nPrenom: " + Eprenom +
        "\nNaissance: " + Enaissance +
        "\nAdresse: " + Eadresse +
        "\nPassword: " + Epassword +
        "\nEmail: " + Eemail +
        "\nSexe: " + Esexe +
        "\nId: " + Eid +
        "\nnom Enterprise: " + nomEnterprise +
        "\nadresse Enterprise: " + adresseEnterprise +
        "\ninformation d'enterprise: " + infoEnterprise;

    alert(alertMessage);

    set(ref(db, "Employeur/" + Eemail), {
        Name: Enom,
        FirstName: Eprenom,
        BirthDate: Enaissance,
        Address: Eadresse,
        Password: Epassword,
        Email: Eemail,
        Sexe: Esexe,
        Id: Eid,
        CompanyName: nomEnterprise,
        CompanyAddress: adresseEnterprise,
        CompanyInfo: infoEnterprise,
    })
    .then(() => {
        alert("succeed");
        window.location.href = '../../html/Employeur/EmployeurDashboard.html';
    })
    .catch((error) => {
        alert(error);
    });
}
document.getElementById('Ecompleter').addEventListener('click', insertEmployeurData );
