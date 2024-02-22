// let form = document.querySelector(".my-form");

// form.addEventListener("submit", (e) => e.preventDefault());
// const button = document.getElementById("b");
// button.addEventListener("submit", (e) => e.preventDefault())
const form = document.querySelector(".my-form");

function sub() {
    let value = document.getElementById("my-text").value;
    let acc = [];
    for (i = 0; i < value; i++) {
        if (i === 0) {
            acc.push(0)
        } else if (i === 1) {
            acc.push(1)
        } else {
            acc.push(acc[i - 1] + acc[i - 2])
        }
    }
    const para = document.createElement("p");

    para.innerText = `Nombre correspondant à n = ${value} sur la suite de fobonacci est le ${acc[acc.length - 1]}`
    form.appendChild(para);

}