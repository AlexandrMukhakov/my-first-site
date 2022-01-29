"use strict";

const avenger = {
    hero: ["Ванда Максимов", 
        "Вижен", 
        "Ртуть"]
};

const heroList = document.querySelector(".promo__interactive-list"),
        addForm = document.querySelector(`form.add`),
        addInput = addForm.querySelector(".adding__input"),
        checkbox = addForm.querySelector(`[type="checkbox"]`);

        addForm.addEventListener(`submit`, (e) => {
            e.preventDefault();

            let newHero = addInput.value;
            const favorite = checkbox.checked;

            if (newHero != null && newHero != "") {

            if (newHero) {
                if (newHero.length > 21) {
                newHero = `${newHero.substring(0, 22)}...`;
            }}
            if (checkbox) {
                console.log(`Добавлен любимчик`);
            }

            avenger.hero.push(newHero);
            SortArr(avenger.hero);

            createNewHero(avenger.hero, heroList);

            e.target.reset();}

        });




function SortArr (arr) {
    arr.sort();
}

document.querySelectorAll(`.hui`).forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
        btn.parentElement.remove();
        avenger.hero.splice(i, 1);
        createNewHero(avenger.hero, heroList);
    });
});

function createNewHero(heroes, parent) {
    parent.innerHTML = "";
    heroes.forEach((item, i) => {
        parent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${item}
        <button class="hui">delete</button>
    </li>`;
    });
}

createNewHero(avenger.hero, heroList);



 
    

