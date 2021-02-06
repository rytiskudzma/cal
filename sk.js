const lygiopasirinkimas = document.querySelector('.lygiopasirinkimas');
const lygis = document.querySelector('.lygis');
const lygioskaicius = document.querySelector('.lygioskaicius');
let randomNumber = lygioTikrinimas;
const spejimai = document.querySelector('.spejimai');
const paskutinisRezultatas = document.querySelector('.paskutinisRezultatas');
const lowOrHi = document.querySelector('.lowOrHi');
const perkiek = document.querySelector('.perKiek');
const speti = document.querySelector('.speti');
const spejimolaukas = document.querySelector('.spejimolaukas');
let spkiek = 1;
let resetMygtukas;
let lygioRekordas = 0;
(function () {
    spejimolaukas.disabled = true;
    speti.disabled = true;
})();
function lygioTikrinimas() {
    let zaidejolygis = Number(lygioskaicius.value);
    if (zaidejolygis == 1) {
        spejimolaukas.disabled = false;
        speti.disabled = false;
        randomNumber = Math.floor(Math.random() * 9) + 1;
        lygiopasirinkimas.innerHTML = 'Pasirinkote 1-ajį lygį.'
    } else if (zaidejolygis == 2) {
        spejimolaukas.disabled = false;
        speti.disabled = false;
        randomNumber = Math.floor(Math.random() * 100) + 1;
        lygiopasirinkimas.textContent = 'Pasirinkote 2-ajį lygį.'
    } else if (zaidejolygis === 3) {
        spejimolaukas.disabled = false;
        speti.disabled = false;
        randomNumber = Math.floor(Math.random() * 1000) + 1;
        lygiopasirinkimas.textContent = 'Pasirinkote 3-ajį lygį.'
    } else {
        lygiopasirinkimas.textContent = 'Yra tik trys lygiai, pasirinkite vieną iš trijų.'
    }
    event.preventDefault();
}

lygis.addEventListener('click', lygioTikrinimas);

function skaicioTikrinimas() {
    let zaidejoSpejimas = Number(spejimolaukas.value);
    if (spkiek === 1) {
        spejimai.textContent = 'Paskutiniai spėjimai: ';
    }
    spejimai.textContent += zaidejoSpejimas + ' ';

    if (zaidejoSpejimas === randomNumber) {
        paskutinisRezultatas.textContent = 'Sveikinimai! Atpėjote!';
        paskutinisRezultatas.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        perkiek.textContent = 'Atspėta per ' + spkiek + ' kartą (-us).';
        rekordas();
        zaidimoPabaiga();

    } else if (spkiek === 10) {
        paskutinisRezultatas.textContent = 'Wuahahaha, PRALAIMĖJAI!!!';
        paskutinisRezultatas.style.backgroundColor = 'red';
        zaidimoPabaiga();
    } else {
        if (zaidejoSpejimas < randomNumber) {
            paskutinisRezultatas.textContent = 'Skaičius per mažas';
            paskutinisRezultatas.style.backgroundColor = 'red';
        } else if (zaidejoSpejimas > randomNumber) {
            paskutinisRezultatas.textContent = 'Skaičius per didelis';
            paskutinisRezultatas.style.backgroundColor = 'pink';
        }
    }
    spkiek++;
    spejimolaukas.value = '';
    spejimolaukas.focus();
}

speti.addEventListener('click', skaicioTikrinimas);

function zaidimoPabaiga() {
    spejimolaukas.disabled = true;
    speti.disabled = true;
    resetMygtukas = document.createElement('button');
    resetMygtukas.textContent = 'Pradėti naują žaidimą';
    document.body.append(resetMygtukas);
    resetMygtukas.addEventListener('click', lygisIsNaujo);
    event.preventDefault();
}

function lygisIsNaujo() {
    spkiek = 1;
    const result = document.querySelectorAll('.result p');
    for (let i = 0; i < result.length; i++) {
        result[i].textContent = '';
    }
    resetMygtukas.parentNode.removeChild(resetMygtukas);
    spejimolaukas.disabled = true;
    speti.disabled = true;
    spejimolaukas.value = '';
    lygioskaicius.value = '';
    lygioskaicius.focus();
    paskutinisRezultatas.style.backgroundColor = 'yellow';
    event.preventDefault();
}

function rekordas() {
    let zaidejolygis = Number(lygioskaicius.value);
    if (zaidejolygis == 1) {
        if (lygioRekordas == 0) {
            lygioRekordas = spkiek;
            document.getElementById('lygiorekordas1').innerHTML = 'Pirmo lygio rekordas: ' + lygioRekordas
                + ' kartas(-ai).';
        } else if (spkiek < lygioRekordas) {
            lygioRekordas = spkiek;
            document.getElementById('lygiorekordas1').innerHTML = 'Pirmo lygio rekordas: ' + lygioRekordas + ' kartas(-ai).';
        }
    }
    if (zaidejolygis == 2) {
        lygioRekordas = 0;
        if (lygioRekordas === 0) {
            lygioRekordas = spkiek
            document.getElementById('lygiorekordas2').innerHTML = 'Antrojo lygio rekordas: ' + lygioRekordas + ' kartas(-ai).';
        } else if (spkiek < lygioRekordas) {
            lygioRekordas = spkiek
            document.getElementById('lygiorekordas2').innerHTML = 'Antrojo lygio rekordas: ' + lygioRekordas + ' kartas(-ai).';
        }
    }
    if (zaidejolygis == 3) {
        lygioRekordas = 0;
        if (lygioRekordas == 0) {
            lygioRekordas = spkiek
            document.getElementById('lygiorekordas3').innerHTML = 'Trečiojo lygio rekordas: ' + lygioRekordas + ' kartas(-ai).';
        } else if (spkiek < lygioRekordas) {
            lygiorlygioRekordas = spkiek
            document.getElementById('lygiorekordas3').innerHTML = 'Trečiojo lygio rekordas: ' + lygioRekordas + ' kartas(-ai).';
        }
    }
}