function pageSuivant() {

  let Dnom = document.getElementById("Dnom");
  let Dprenom = document.getElementById("Dprenom");
  let Dnaissance = document.getElementById("Dnaissance");
  let Dadresse = document.getElementById("Dadresse");
  let Dpassword = document.getElementById("Dpassword");
  let Demail = document.getElementById("Demail");
  let sexe = document.querySelector('input[name="sexe"]:checked').value;
  let DId =generateRandomId();

  localStorage.setItem("Dnom", Dnom.value);
  localStorage.setItem("Dprenom", Dprenom.value);
  localStorage.setItem("Dnaissance", Dnaissance.value);
  localStorage.setItem("Dadresse", Dadresse.value);
  localStorage.setItem("Dpassword", Dpassword.value);
  localStorage.setItem("Demail", Demail.value);
  localStorage.setItem("sexe", sexe);
  localStorage.setItem("id",DId) ;
  
  function generateRandomId() {
   
    const randomString = Math.random().toString(36).substring(2);
  
    const timestamp = new Date().getTime();
  
    const randomId = randomString + timestamp;
  
    return randomId;
  }



}
