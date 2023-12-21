// afficherOffre.js
import { getDatabase, ref, get, remove, query, orderByChild, equalTo } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const db = getDatabase();

document.addEventListener('DOMContentLoaded', fetchAndDisplayOffers);

export function fetchAndDisplayOffers() {
    const offresContainer = document.querySelector('.offres-container');

    // Référence au nœud "OffresCreer" dans la base de données
    const offresRef = ref(db, 'OffresCreer');

    // Récupérer toutes les offres depuis la base de données
    get(offresRef)
        .then((snapshot) => {
            const offresData = snapshot.val();

            // Vérifier s'il y a des offres
            if (offresData) {
                // Effacer le contenu existant
                offresContainer.innerHTML = "";

                // Parcourir chaque offre et l'afficher
                Object.keys(offresData).forEach((offerId) => {
                    const offer = offresData[offerId];
                    const offerElement = createOfferElement(offerId, offer);
                    offresContainer.appendChild(offerElement);
                });
            } else {
                // Aucune offre trouvée
                offresContainer.innerHTML = "<p>Aucune offre disponible.</p>";
            }
        })
        .catch((error) => {
            console.error('Erreur lors de la récupération des offres :', error);
            offresContainer.innerHTML = "<p>Erreur lors de la récupération des offres.</p>";
        });
}

function createOfferElement(offerId, offer) {
    const offerElement = document.createElement('div');
    offerElement.classList.add('offre');
    // Création du bouton d'action sur l'offre
    const titleElement = document.createElement('div');
    titleElement.classList.add('offre-title');
    titleElement.textContent = `Titre : ${offer.title}`;

    const descElement = document.createElement('div');
    descElement.classList.add('offre-desc');

    const dateElement = document.createElement('div');
    dateElement.classList.add('offre-d', 'offre-date');
    dateElement.textContent = `| ${offer.profession}`;

    const experienceElement = document.createElement('div');
    experienceElement.classList.add('offre-d', 'offre-experience');
    experienceElement.textContent = `| ${offer.experience} ans`;

    const nomEnterpriseElement = document.createElement('div');
    nomEnterpriseElement.classList.add('offre-d', 'offre-nom-enterprise');
    let ent = localStorage.getItem("nomEnterprise")
    nomEnterpriseElement.textContent = `| ${ent}`;

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('icon', 'delete-icon');
    deleteButton.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6"
                                        stroke="#2b3952" stroke-width="1.272" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </g>
                            </svg>`;

    // Création du bouton pour afficher les emails des demandeurs
    let showEmailsButton = document.createElement('button');
    showEmailsButton.classList.add('btn')
    showEmailsButton.textContent = 'Afficher les emails des demandeurs';
    showEmailsButton.addEventListener('click', () => {
        displayDemandersWithSameProfession(offer.profession);
    });

    deleteButton.addEventListener('click', () => {
        deleteOffer(offerId);
    });

    descElement.appendChild(dateElement);
    descElement.appendChild(experienceElement);
    descElement.appendChild(nomEnterpriseElement);

    offerElement.appendChild(titleElement);
    offerElement.appendChild(descElement);
    offerElement.appendChild(deleteButton);
    offerElement.appendChild(showEmailsButton); // Ajout du bouton à l'élément de l'offre

    return offerElement;
}

function displayDemandersWithSameProfession(profession) {
    // Référence au nœud "Demandeurs" dans la base de données
    const demandeursRef = ref(db, 'Demandeur');

    // Créer une requête pour filtrer les demandeurs par profession
    const professionQuery = query(demandeursRef, orderByChild('Profession'), equalTo(profession));

    // Récupérer les demandeurs avec la même profession
    get(professionQuery)
        .then((snapshot) => {
            const demandeursData = snapshot.val();

            if (demandeursData) {
                const demandeurEmails = Object.values(demandeursData).map(demandeur => demandeur.Email);
                alert('Emails des demandeurs avec la même profession : \n ' + demandeurEmails.join(', '));
            } else {
                alert('Aucun demandeur avec la même profession trouvé.');
            }
        })
        .catch((error) => {
            console.error('Erreur lors de la récupération des demandeurs :', error);
        });
}


function deleteOffer(offerId) {
    const offresRef = ref(db, `OffresCreer/${offerId}`);

    // Supprimer l'offre de la base de données
    remove(offresRef)
        .then(() => {
            console.log('Offre supprimée avec succès');
            // Récupérer et afficher à nouveau les offres après la suppression
            fetchAndDisplayOffers();
        })
        .catch((error) => {
            console.error('Erreur lors de la suppression de l\'offre :', error);
        });
}
