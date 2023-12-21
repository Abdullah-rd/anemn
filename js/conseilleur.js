function showForm(type) {
    document.querySelector('.titre').style.display = 'none';
    document.querySelector('.CSO').style.display = 'none';
    document.querySelector('.CSD').style.display = 'none';


    type === 'Demandeur' ? codeD = 'D4213' : codeD = 'Of4213'
    const form = document.querySelector('.screen-1');
    form.innerHTML = `<div class="titre"> Conseilleur ${type}</div>
                      <form class="tout" onsubmit="return valider('${type}')"> 
                          <label for="userId" class="userid">Entrer votre id  (ps: ${codeD})</label>
                      <div class="sec">   <input type="text" class="pas" name="userId" placeholder="${codeD}"> </div>
                          <input type="submit" class="login" value="Submit">

                      </form>`;
    document.body.appendChild(form);
    
}

function valider(type){


    let userId = document.forms[0]["userId"].value;
    
    if(userId != codeD) {alert("le id est fausse !");
    return false;
}

if (type === 'Demandeur') {
    window.location.href = '../html/ConseilleurDemande/CSDdashboard.html';
} else {

    window.location.href = '../html/ConseilleurOffre/CSOdashboard.html';
}

return false;
}