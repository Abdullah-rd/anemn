import { getDatabase, set, get, update, remove, ref, child }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const db = getDatabase();

export function insertDemandeurData() {
    let experience = localStorage.getItem('Dexperience');
    let Dnom = localStorage.getItem("Dnom");
    let Dprenom = localStorage.getItem("Dprenom");
    let Dnaissance = localStorage.getItem("Dnaissance");
    let Dadresse = localStorage.getItem("Dadresse");
    let Dpassword = localStorage.getItem("Dpassword");
    let Demail = localStorage.getItem("Demail");
    let sexe = localStorage.getItem("sexe");
    let Job = localStorage.getItem("Dprofession");

    let Did = localStorage.getItem("id");

    let alertMessage = "Experience: " + experience +
                       "\nNom: " + Dnom +
                       "\nPrenom: " + Dprenom +
                       "\nNaissance: " + Dnaissance +
                       "\nAdresse: " + Dadresse +
                       "\nPassword: " + Dpassword +
                       "\nEmail: " + Demail +
                       "\nSexe: " + sexe +
                       "\nId: " + Did+
                       "\nprofession: "+ Job;

    alert(alertMessage);

    set(ref(db, "Demandeur/" + Demail), {
        Name: Dnom,
        Experience: experience,
        FirstName: Dprenom,
        BirthDate: Dnaissance,
        Address: Dadresse,
        Password: Dpassword,
        Email: Demail,
        Sexe: sexe,
        Id: Did,
        Profession: Job,
    })
    .then(() => {
        alert("succeed");
    })
    .catch((error) => {
        alert(error);
    });
}
document.getElementById('completer').addEventListener('click', insertDemandeurData );
