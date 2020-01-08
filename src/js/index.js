//Importation du Métronome App
import { Metronome } from "./metro";

//Importation de la librairie
import { $ } from "./utilities";

//Init Métronome App:
const metro = new Metronome();
// console.log(metro)

//DOM Manipulations:

    //Hightlight des selector de la base du tempo
$('.baseSelect', true).lightOnClick();

    //Link le slider avec le display du tempo
$('#slider').on('input', ()=>{
    $('#slider').linkValueTo('#tempo');

    //Update la valeur du tempo dans l'obj métronome
    let tempo = parseInt($("#tempo").text, 10)
    metro.tempoMs = metro.convertTempo(tempo)
    console.log(metro);
    
})

//APP Control:
    //Uptdate base
$('.baseSelect', true).el.forEach(el => {
    el.addEventListener('click', e=>{
        let t = e.target;
        metro.base = parseInt(t.id, 10);
        console.log(metro.base);
        console.log(metro);
    })
})

    //Bouton start
let sound ={
    primarySound: document.getElementById('primSound'),
    secondarySound: document.getElementById('secSound')
}


$("#btn").on('click', ()=>{
    if(!metro.isOn){
        metro.isOn = true
        metro.active(metro.tempoMs, metro.base, sound)
    }else{
        metro.isOn = false
    }
})








   
    




