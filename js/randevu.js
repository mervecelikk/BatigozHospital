
let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let button3 = document.getElementById("button3")
let button4 = document.getElementById("button4")
let button5 = document.getElementById("button5")
let page1 = document.getElementById("page1")
let page2 = document.getElementById("page2")
let page3 = document.getElementById("page3")
let page4 = document.getElementById("page4")
let page5 = document.getElementById("page5")

//PAGE1
sube = () => {
    button1.classList.remove("active");
    button2.removeAttribute("disabled")
    button2.classList.add("bg-active")
    button2.className += " active"
    page2.className += " show active"
    page1.classList.remove("show", "active")

}

prevBtn = () => {
    page2.classList.remove("show", "active")
    page1.className += " show active"
    let subePart = document.querySelectorAll('.sube-part');
    var subeSelectedItem;
    subePart.forEach((item) => {
        item.addEventListener('click', () => {
            if (subeSelectedItem) {
                subeSelectedItem.style.backgroundColor = '';
            }

            if (subeSelectedItem = item) {
                item.style.backgroundColor = '#35b5e6';

            }

        })
    })
}

//PAGE2
bransSec = () => {
    button2.classList.remove("active");
    button3.removeAttribute("disabled")
    button3.className += "active"
    page3.className += "show active"
    page2.classList.remove("show", "active")
    button3.classList.add("bg-active")

}
prevBtn = () => {
    page2.classList.remove("show", "active")
    page1.className += "show active"
    let subePart = document.querySelectorAll('.sube-part');
    var subeSelectedItem;
    subePart.forEach((item) => {
        item.addEventListener('click', () => {
            if (subeSelectedItem) {
                subeSelectedItem.style.backgroundColor = '';
            }

            if (subeSelectedItem = item) {
                item.style.backgroundColor = '#35b5e6';
                button2.classList.add("bg-active")

            }
        })
    })
}

//PAGE3
let drSec = document.querySelectorAll('.dr-sec');
console.log(drSec);
var drSelectedItem;
drSec.forEach((item) => {
    item.addEventListener('click', () => {
        if (drSelectedItem) {
            drSelectedItem.style.backgroundColor = '';
        }

        if (drSelectedItem = item) {
            item.style.backgroundColor = '#35b5e6';
            button3.classList.remove("active");
            button4.removeAttribute("disabled")
            button4.className += "active"
            page4.className += "show active"
            page3.classList.remove("show", "active")

        }
        button4.classList.add("bg-active")
    })
})


drSec[1].addEventListener("click", () => {
    var drName = document.getElementById("dr-name");
    drName.innerHTML = "Altunizade Batıgöz - Göz Hastalıkları - OPR.DR. AYHAN BAŞOĞLU"
})

drSec[2].addEventListener("click", () => {
    var drName = document.getElementById("dr-name");
    drName.innerHTML = "Altunizade Batıgöz - Göz Hastalıkları - OPR.DR. DİLHAN GÖNENÇ"
})

prevBtn2 = () => {
    let goz = document.querySelector('.goz');
    page3.classList.remove("show", "active")
    page2.className += "show active";
    goz.classList.add("bg-active")
    button3.classList.add("bg-active")
}

//PAGE4
prevBtn3 = () => {
    page4.classList.remove("show", "active")
    page3.className += "show active";
}

var today = new Date().toISOString().split('T')[0];
document.getElementsByName("tarih")[0].setAttribute('min', today);

const noDate = document.querySelector(".noDate");
const tarihInput = document.querySelector("#tarih");
const tdClock = document.querySelector(".td-clock");

let selectedTime = null;

function getAvailableTimes(date) {
    const availableTimes = [];
    const hoursInDay = 15;
    const dayOfWeek = date.getDay();

    if (dayOfWeek !== 6 && dayOfWeek !== 0) {
        for (let hour = 9; hour < hoursInDay; hour++) {
            availableTimes.push(`${hour}:00`);
        }
    }

    return availableTimes;
}

tarihInput.addEventListener("change", () => {
    const selectedDate = new Date(tarihInput.value);
    const currentDate = new Date();
    const dayDifference = Math.ceil((selectedDate - currentDate) / (1000 * 60 * 60 * 24));

    if (dayDifference >= 0 && dayDifference <= 5) {
        const availableTimes = getAvailableTimes(selectedDate);
        if (availableTimes.length > 0) {
            noDate.style.display = "none";
            tdClock.style.display = "block";
            renderAvailableTimes(availableTimes);
        } else {
            noDate.style.display = "flex";
            tdClock.style.display = "none";
        }
    } else {
        noDate.style.display = "flex";
        tdClock.style.display = "none";
    }
});

function renderAvailableTimes(times) {
    const table = document.createElement("table");
    const row = table.insertRow();
    times.forEach(time => {
        const cell = row.insertCell();
        const clock = document.createElement("button");
        clock.textContent = time;
        clock.classList.add("btn", "btn-outline-light", "bg-transparent", "td-oclock", "me-1");
        clock.onclick = function () {
            button4.classList.remove("active");
            button5.removeAttribute("disabled")
            button5.classList.add("bg-active")
            button5.className += " active"
            page5.className += " show active"
            page4.classList.remove("show", "active")
            selectedTime = time;
        };
        cell.appendChild(clock);
    });

    tdClock.innerHTML = "";
    tdClock.appendChild(table);
}

//page 5

prevBtn4 = () => {
    page5.classList.remove("show", "active");
    page4.classList.add("show", "active");
}

function formGonder() {
    alert(`Randevunuz alınmıştır. Seçilen saat: ${selectedTime}`);
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1000);
};



