
/* enter data  */ 

const text_meter = document.createTextNode("Distance (m)"); 
const min_alt =  document.createTextNode("Minimum altitude (m)")
const max_alt = document.createTextNode("Maximum altitude (m) ")

/* input  */

const input_meter = document.createElement("input");
const input_min_alt = document.createElement("input");
const input_max_alt = document.createElement("input");

/* button */
const button_valid = document.createElement("button"); 
button_valid.innerHTML= "Validate"; 

/* special element  */ 
const br = document.createElement("br"); 
const br1 = document.createElement("br"); 

/* create element in body */
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");

/*  append const in div*/
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



/* append element in body */
document.body.appendChild(div1); 
document.body.appendChild(br);
document.body.appendChild(div2); 
document.body.appendChild(br1);
document.body.appendChild(div3);