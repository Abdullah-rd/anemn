// insertOffreData.js

import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const db = getDatabase();

export function insertOffre() {
    document.getElementById('offreCompleter').addEventListener('click', function (event) {
        event.preventDefault();

        let title = document.getElementById("title").value;
        let description = document.getElementById("description").value;
        let experience = document.getElementsByName('Oexperiencee')[0].value; 
        let profession = document.getElementsByName('oprofession')[0].value; 
      

        set(ref(db, "OffresCreer/" + title), {
            title: title,
            description: description,
            experience: experience,
            profession: profession,
        })
            .then(() => {
                alert("succeed");
                window.location.href = '../../html/Employeur/EmployeurDashboard.html';

            })
            .catch((error) => {
                alert(error);
            });
    });


    
}
document.getElementById('offreCompleter').addEventListener('click', function (event) {
    insertOffre();
});
