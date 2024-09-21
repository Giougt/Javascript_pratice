/* enter data  */ 

const title_section_1 = document.createTextNode("Calcule du pourcentage moyen d'une pente sur une distance");
const text_meter = document.createTextNode("Distance (m)"); 
const min_alt =  document.createTextNode("Minimum altitude (m)")
const max_alt = document.createTextNode("Maximum altitude (m) ")

/* input  */

const input_meter = document.createElement("input");
const input_min_alt = document.createElement("input");
const input_max_alt = document.createElement("input");

/* add id to input field */ 

input_meter.id = "distance"; 
input_min_alt.id= "minAltitude";
input_max_alt.id= "maxAltitude"; 

/* button */

const button_valid = document.createElement("button"); 
button_valid.innerHTML= "Validate"; 

/* special element  */ 

const br = document.createElement("br"); 
const br1 = document.createElement("br"); 

/* create element in body */

const title1 = document.createElement("h1");
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");

/*  append const(text) in div*/

title1.appendChild(title_section_1);

div1.appendChild(text_meter);
div1.appendChild(input_meter); 

div2.appendChild(min_alt); 
div2.appendChild(input_min_alt); 

div3.appendChild(max_alt);
div3.appendChild(input_max_alt); 
div3.appendChild(button_valid); 

/* CSS part  */

Object.assign(button_valid.style,{
    width: "75px",
    backgroundColor: "#6e766b", 
    cursor : "pointer",
    borderRadius: "10px"
});

Object.assign(title1.style,{
    textDecoration : "underline"
});

/* append element in body */

document.body.appendChild(title1);
document.body.appendChild(div1); 
document.body.appendChild(br);
document.body.appendChild(div2); 
document.body.appendChild(br1);
document.body.appendChild(div3);

/* get data in input*/ 

let data_input_meter = document.getElementById("distance");
let data_input_min_alt = document.getElementById("minAltitude");
let data_input_max_alt = document.getElementById("maxAltitude");