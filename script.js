"use strict";

const avenger = {
    hero: ["Ванда Максимов", 
        "Вижен", 
        "Ртуть"]
};

const heroList = document.querySelector(".promo__interactive-list"),
        addForm = document.querySelector(`form.add`),
        addInput = addForm.querySelector(".adding__input"),
        checkbox = addForm.querySelector(`[type="checkbox"]`),
        deleteHero = document.querySelectorAll(`.hui`),
        Hero2 = document.querySelectorAll('.promo__interactive-item'),
        sreach = document.querySelector(`form.sreach`),
        sreachInput = sreach.querySelector(".input");

        sreach.addEventListener("submit", (e) => {
            e.preventDefault();
            let poisk = sreachInput.value;
            if (poisk == "Аня" || poisk == "Анна" || poisk == "аня" || poisk == "анна") {
                alert("Моя ты принцесса!");
            }else {
                alert("Не интересно");
            }
        });



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

            e.target.reset();
        }

        });




function SortArr (arr) {
    arr.sort();
}


function createNewHero(heroes, parent) {
    parent.innerHTML = "";
    heroes.forEach((item, i) => {
        parent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${item}
        <button class="hui">delete</button>
    </li>`;
    });
}


createNewHero(avenger.hero, heroList);

heroList.addEventListener("click", (e) => {
    if (e.target == e.target.classList.contains("hui")) {
        e.target.classList.add("hide");
    }
});



//timer
const deadLine ="2022-03-02";

function getTimeRemaining(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 *24)),
          hours = Math.floor((t / (1000 * 60 * 60) % 24)),
          minutes = Math.floor((t / 1000 / 60) % 60),
          seconds = Math.floor((t / 1000) % 60);

          return {
              "total": t,
              "days": days,
              "hours": hours,
              'minutes': minutes,
              "seconds": seconds
          };
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endTime) {
  const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timerID = setInterval(updateClock, 1000);
      updateClock();


      function updateClock() {
          const t = getTimeRemaining(endTime);
          days.innerHTML = getZero(t.days);
          hours.innerHTML = getZero(t.hours);
          minutes.innerHTML = getZero(t.minutes);
          seconds.innerHTML = getZero(t.seconds);

          if (t <= 0) {
              clearInterval(timerID);
          }
      }

}

setClock(".timer", deadLine);
