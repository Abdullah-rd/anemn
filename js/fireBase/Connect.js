import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const db = getDatabase();

function loginUser(email, password) {
    const usersRef = ref(db, 'Employeur');

    get(usersRef)
        .then((snapshot) => {
            const userData = snapshot.val();
            if (userData) {
                const userIds = Object.keys(userData);
                const foundUser = userIds.find((userId) => userData[userId].Email === email);

                if (foundUser) {
                    const user = userData[foundUser];
                    if (user.Password === password) {
                        alert("Connexion réussie");
                        
                        window.location.href = '../../html/Employeur/EmployeurDashboard.html';

                    } else {
                        alert("Mot de passe invalide");
                    }
                } else {
                    alert("Utilisateur non trouvé");
                }
            } else {
                alert("Aucune donnée utilisateur trouvée");
            }
        })
        .catch((error) => {
            console.error('Erreur lors de la vérification de l\'utilisateur :', error);
        });
}

document.getElementById('Blogin').addEventListener('click', function (event) {
    event.preventDefault(); 
    const email = document.forms[0]["email"].value;
    const password = document.forms[0]["password"].value;

    if (validateForm()) {
        loginUser(email, password);
    }
});

function validateForm() {
    let email = document.forms[0]["email"].value;
    let password = document.forms[0]["password"].value;
    if (email == "" || password == "") {
        alert("Veuillez saisir toutes les informations");
        return false;
    }
    return true;
}
