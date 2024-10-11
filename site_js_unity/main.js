// create element link 

const style_text = document.createElement("link");
style_text.rel = 'stylesheet';
style_text.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"';
document.head.appendChild(style_text);

/* enter data  */ 

const title_section_1 = document.createTextNode("Calcule du pourcentage moyen d'une pente sur une distance");
const text_meter = document.createTextNode("Distance (m) "); 
const min_alt =  document.createTextNode("Minimum altitude (m) ");
const max_alt = document.createTextNode("Maximum altitude (m) ");
const result = document.createTextNode("Pourcentage moyen : ");
const bingo_text = document.createTextNode("Tape un nombre entre 1 et 20 ");

// create time field 

const date = document.createElement("input");
date.type="text"; 
const date_data = new Date(); 
let hours = date_data.getHours();
let minutes = date_data.getMinutes();
let seconds = date_data.getSeconds();

// conditions print time 

if (hours <10) {
    hours = "0"+ hours; 
}
if (minutes < 10) {
    minutes = "0" + minutes;
}
if (seconds < 10) {
    seconds = "0" + seconds;
}

// return time actual 

const hoursactually = hours + 'h' + minutes + 'm' + seconds + 's'; 
date.value=hoursactually;

/* input  */

const input_meter = document.createElement("input");
const input_min_alt = document.createElement("input");
const input_max_alt = document.createElement("input");
const input_bingo = document.createElement("input"); 

/* add id to input field */ 

input_meter.id = "distance"; 
input_min_alt.id= "minAltitude";
input_max_alt.id= "maxAltitude"; 
input_bingo.id = "bingo_field";

/* button */

const button_valid = document.createElement("button"); 
button_valid.innerHTML= "Validate"; 
button_valid.id = "button_send";

// button reset 

const button_reset = document.createElement("button"); 
button_reset.innerHTML= "Reset";
button_reset.id = "reset"; 

/*  input_result */ 

const input_result = document.createElement("input"); 
input_result.hidden = true;
input_result.disabled = true;
input_result.id = "resultat"; 

/* special element  */ 

const br = document.createElement("br"); 
const br1 = document.createElement("br"); 
const br2 = document.createElement("br"); 

/* create element in body */

const title1 = document.createElement("h1");
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const div4 = document.createElement("div");
const div5 = document.createElement("div"); 

/*  append const(text) in div*/

title1.appendChild(title_section_1);
title1.appendChild(date);

div1.appendChild(text_meter);
div1.appendChild(input_meter); 

div2.appendChild(min_alt); 
div2.appendChild(input_min_alt); 

div3.appendChild(max_alt);
div3.appendChild(input_max_alt); 
div3.appendChild(button_valid); 
div3.appendChild(button_reset); 

div4.appendChild(result);
div4.appendChild(input_result);

div5.appendChild(bingo_text); 
div5.appendChild(input_bingo); 

/* CSS part  */

Object.assign(button_valid.style,{
    width: "75px",
    backgroundImage: "linear-gradient(to left, #FF0000, #FFFF00)",
    cursor : "pointer",
    borderRadius: "10px",
    marginLeft: "10px"
});

Object.assign(button_reset.style,{
    width: "75px",
    backgroundImage: "linear-gradient(to left, #FF0000, #FFFF00)",
    cursor : "pointer",
    borderRadius: "10px",
    marginLeft: "10px"
});

Object.assign(title1.style,{
    textDecoration : "underline",
    textAlign : "center",
    marginLeft: "260px"
});

Object.assign(date.style,{
    marginLeft: "260px",
    pointerEvents: "none",
    background: "linear-gradient(90deg, rgba(5,0,36,1) 0%, rgba(77,9,125,1) 34%, rgba(90,9,121,1) 67%, rgba(255,0,215,1) 100%)",
    color: "white",
    textAlign: "center"
});

Object.assign(div5.style,{
    paddingTop: "100px",
    textAlign: "center",
    fontFamily: "Montserrat , sans-serif"
});

Object.assign(input_bingo.style,{
    textAlign: "center"
})

/* append element in body */

document.body.appendChild(title1);
document.body.appendChild(div1); 
document.body.appendChild(br);
document.body.appendChild(div2); 
document.body.appendChild(br1);
document.body.appendChild(div3);
document.body.appendChild(br2);
document.body.appendChild(div4);
document.body.appendChild(div5); 

// function calculate result and show result 
document.getElementById("button_send").addEventListener("click", function () {
    // get data 
    let data_input_meter = parseFloat(document.getElementById("distance").value);
    let data_input_min_alt = parseFloat(document.getElementById("minAltitude").value);
    let data_input_max_alt = parseFloat(document.getElementById("maxAltitude").value);

    // check value 
    let gradient;
    if (isNaN(data_input_meter) || isNaN(data_input_min_alt) || isNaN(data_input_max_alt) || data_input_meter === 0) {
        gradient = "Erreur : valeurs invalides ou division par zéro";
    } else {
        gradient = ((data_input_max_alt - data_input_min_alt) * 100) / data_input_meter;
    }

    // show input result 
    input_result.value = gradient;
    input_result.hidden = false; 
    input_result.disabled = false; 
});

// function reset input field 

document.getElementById("reset").addEventListener("click",function () {
    document.getElementById("distance").value=""; 
    document.getElementById("minAltitude").value=""; 
    document.getElementById("maxAltitude").value=""; 
    document.getElementById("resultat").value=""; 
});

//function bingo game 

input_bingo.addEventListener('keydown', bingo_game);

function bingo_game(event) {
    if (event.key === "Enter") {
        let correct_answer = Math.floor(Math.random() * 21); 
        let user_answer = parseInt(input_bingo.value, 10); 
        document.getElementById("bingo_field").value="";
        if (user_answer === correct_answer) {
            alert("bien  joué");
        }else{
            alert("dommage"); 
        }
    }
}