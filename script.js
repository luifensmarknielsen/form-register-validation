let form = document.getElementsByTagName("form")[0];
let statusFirstname = document.querySelector(".statusMessage.firstname");
let statusAftername = document.querySelector(".statusMessage.aftername");
let statusUsername = document.querySelector(".statusMessage.username");
let statusPassword = document.querySelector(".statusMessage.password");
let statusEmail = document.querySelector(".statusMessage.email");
let statusStreetname = document.querySelector(".statusMessage.streetname");
let statusPhone = document.querySelector(".statusMessage.phone");
let statusCountry = document.querySelector(".statusMessage.country");
let statusZip = document.querySelector(".statusMessage.zip");
let statusGender = document.querySelector(".statusMessage.gender");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let status = true;

    statusFirstname.innerText = "";
    if (form.firstname.value == "") {
        statusFirstname.innerText = "Indtast dit fornavn";
        status = false;
    }

    statusAftername.innerText = "";
    if (form.aftername.value == "") {
        statusAftername.innerText = "Indtast dit efternavn";
        status = false;
    }

    statusEmail.innerText = "";
    if (form.email.value == "") {
        statusEmail.innerText = "Indtast din email";
        status = false;
    }

    statusPhone.innerText = "";
    if (form.phone.value == "") {
        statusPhone.innerText = "Indtast dit telefonnr";
        status = false;
    }

    statusCountry.innerText = "";
    if (form.country.value == "") {
        statusCountry.innerText = "Vælg din nationalitet";
        status = false;
    }

    statusStreetname.innerText = "";
    if (form.streetname.value == "") {
        statusStreetname.innerText = "Skriv din adresse";
        status = false;
    }

    statusZip.innerText = "";
    if (form.zip.value == "") {
        statusZip.innerText = "Skriv din adresse";
        status = false;
    }

    statusGender.innerText = "";
    if (form.gender.value == "") {
        statusGender.innerText = "Vælg venligst dit køn";
        status = false;
    }


    if (!status) return;
    fetch("login.php") //dette sker når formularen er udfyldt korrekt
});