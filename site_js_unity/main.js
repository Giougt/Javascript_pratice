/* enter data  */ 

const title_section_1 = document.createTextNode("Calcule du pourcentage moyen d'une pente sur une distance");
const text_meter = document.createTextNode("Distance (m)"); 
const min_alt =  document.createTextNode("Minimum altitude (m)");
const max_alt = document.createTextNode("Maximum altitude (m) ");
const result = document.createTextNode("Pourcentage moyen :");

/* input  */

const input_meter = document.createElement("input");
const input_min_alt = document.createElement("input");
const input_max_alt = document.createElement("input");
const date = document.createElement("input");

/* add id to input field */ 

input_meter.id = "distance"; 
input_min_alt.id= "minAltitude";
input_max_alt.id= "maxAltitude"; 
date.id = "date_data"; 

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
    background: "linear-gradient(to left, #FF0000, #FFFF00)",
    WebkitBackgroundClip : "text",
    WebkitTextFillColor : "transparent",
    textAlign : "center",
    marginLeft: "260px"
});

Object.assign(date.style,{
    marginLeft: "260px",
    maxWidth: "fit-content"
});
/* append element in body */

document.body.appendChild(title1);
document.body.appendChild(div1); 
document.body.appendChild(br);
document.body.appendChild(div2); 
document.body.appendChild(br1);
document.body.appendChild(div3);
document.body.appendChild(br2);
document.body.appendChild(div4);

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