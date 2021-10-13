window.addEventListener('DOMContentLoaded', event => {

    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    navbarShrink();

    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



var BMIgivenHeight = document.querySelector("#BMIheight");

function BMIheightValueFunc() {
    if (BMIheightValue.value == "cm") {
        BMIgivenHeight.setAttribute("placeholder", "Enter Your Height (in centimeter)");
    } 
}

function BMIcalc() {
    var BMImainWeight = document.querySelector("#BMIweight").value;
    var BMImainHeight;
    if (BMIheightValue.value == "cm") {
        BMImainHeight = BMIgivenHeight.value / 100;
    } 
    BMImainHeight = BMImainHeight ** 2;
    var BMIres = BMImainWeight / BMImainHeight;
    var BMIres = BMIres.toFixed(3);
    var BMIresPlus;
    if (BMIres < 18.5) {
        BMIresPlus = "<h5>Você está com magreza!</h5>";
    } else if (BMIres <= 24.99999999999999999999999999999999999999999999 && BMIres >= 18.5) {
        BMIresPlus = "<h5>Você está em forma!</h5>";
    } else if (BMIres <= 29.99999999999999999999999999999999999999999999 && BMIres >= 25) {
        BMIresPlus = "<h5>Vocé está com sobrepeso!</h5>";
    } else if (BMIres <= 34.99999999999999999999999999999999999999999999 && BMIres >= 30) {
        BMIresPlus = "<h5>Você está com obesidade leve!</h5>";
    } else if (BMIres <= 39.99999999999999999999999999999999999999999999 && BMIres >= 35) {
        BMIresPlus = "<h5>Você está com obesidade moderada!</h5>";
    } else if (BMIres >= 40) {
        BMIresPlus = "<h5>Você está com obesidade mórbida!</h5>";
    } else {
        BMIres = BMIres.toString();
    }
    if (BMIres == "NaN" || BMIres == "0" || BMImainWeight == "" || BMImainHeight == "") {
        document.getElementById("BMIres").innerHTML = "<h5>Por favor, insira informações válidas!</h5>";
        window.alert("Por favor, insira informações válidas.");
    } else {
        var all = `<h5>Seu IMC é: ${BMIres} ${BMIresPlus}</h5>`;
        document.getElementById("BMIres").innerHTML = all;
    }
}



