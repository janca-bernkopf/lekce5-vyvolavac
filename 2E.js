let jmena = [
    "Markéta",
    "Kateřina",
    "Júlia",
    "Lucie",
    "Aneta",
    "Veronika",
    "Petra",
    "Olga",
    "Naďa",
    "Nikola",
    "Eva",
    "Anísa",
    "Terezia",
    "Diana",
    "Anna",
    "Iva",
    "Denisa",
    "Zuzana",
    "Jana",
    "Martina",
    "Lenka",
    "Iveta",
    "Pavla",
    "Lucie",
    "Kamila",
    "Soňa"
];

let tazenaJmena = [];

// pokud je pole "jména" rovna 0, tak se vrať
function tahnoutJmeno() {
    if (jmena.length === 0) {
        return;
    }

    // Generujeme náhodný index
    let vylosovanyIndex = Math.floor(Math.random() * jmena.length);

    // Získáme výherní jméno na patřičném indexu
    let vylosovaneJmeno = jmena[vylosovanyIndex];

    // Vyřadíme vylosované jméno z osudí
    jmena.splice(vylosovanyIndex, 1);

    // Výherní jméno si uložíme do pole k ostatním výherním
    tazenaJmena.push(vylosovaneJmeno);

    // Vložíme výherní jméno a seznam tažených do HTML
    let vyherce = document.querySelector("#vylosovany");
    vyherce.innerHTML = vylosovaneJmeno;

    let seznamJmen = document.querySelector("#seznam");
    seznamJmen.innerHTML = tazenaJmena


    
}