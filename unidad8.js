
const userCard = document.querySelector(".user");


let datos = document.querySelectorAll("input");
let datoTipo = document.querySelectorAll("select");

let infoCard = {
    nombre: '',
    edad: 0,
    type: '',
    end: 0
};

let submit = document.getElementById("submitButton");

datos[0].addEventListener("change", (event)=> {
    let input = event.target
    infoCard.nombre = input.value;
});

datos[1].addEventListener("change", (event)=> {
    let input = event.target
    infoCard.edad = parseFloat(input.value);
});

datoTipo[1].addEventListener("change", (event)=> {
    let input = event.target
    infoCard.type = input.value;
});

datos[2].addEventListener("change", (event)=> {
    let input = event.target
    infoCard.end = input.value;
});


const generarCard = () => {
    userCard.innerHTML = "";


        let code = `

        <div class="userCard">
            <img src="./assets/logo/logo.png">
            <h4>TRAINER: <span>${infoCard.nombre}</span></h4>
            <h4>AGE: <span class="age">${infoCard.edad}</span></h4>
            <h4>BAIMOS PREFERENCE: <span>${infoCard.type}</span></h4>
            <h4>BAIMO'S SQUAD SIZE: <span>${infoCard.end}</span></h4>
        </div>
        `
        userCard.innerHTML += code;
        
        let span = document.getElementsByTagName('span');
        
        if (infoCard.edad >= 18) {
            span[1].style.color = '#1C0811';
        } else {
            span[1].style.color = '#ff2d00';
        };
   

    console.log(infoCard);

};


submit.addEventListener("click", generarCard);


