//Importation du Métronome App
import { Metronome } from "./metro";
//Importation de la librairie
import { $ } from "./utilities";



//Init Métronome App:
const metro = new Metronome();
// console.log(metro)


//DOM Manipulations:

//NAVIGATION

    //Single page app logic
        //Selectionne view
const view = document.getElementById('view')

    //End of Single page app logic
    //Home Section
        //BTN plus et moins

    $('.minus').on('mousedown', ()=>{
        let tempo = document.getElementById('tempo')
        let value = parseInt(tempo.innerText, 10)
        tempo.innerText = value - 1
    })
    $('.plus').on('mousedown', ()=>{
        let tempo = document.getElementById('tempo')
        let value = parseInt(tempo.innerText, 10)
        tempo.innerText = value + 1
    })
        //Hightlight des selector de la base du tempo
    $('.baseSelect', true).lightOnClick();

        //Link le slider avec le display du tempo
    $('#slider').on('input', ()=>$('#slider').linkValueTo('#tempo'))

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

    //    
    let sound ={
        primarySound: document.getElementById('primSound'),
        secondarySound: document.getElementById('secSound')
    }


    $("#btn").on('click', ()=>{
        //Update la valeur du tempo dans l'obj métronome
        let tempo = parseInt($("#tempo").text, 10)
        metro.tempoMs = metro.convertTempo(tempo)

        if(!metro.isOn){
            metro.isOn = true
            $("#btn").el.innerText = "STOP"
            console.log(metro.isOn);      
            metro.active(metro.tempoMs, metro.base, sound)
        }else{
            console.log($("#btn").text)
            $("#btn").el.innerText = "START"
            metro.isOn = false
            metro.count = 1
            console.log(metro.isOn);
        }
    })
    // END OF HOME SECTION
    // PART SECTION

    // END OF PART SECTION
    // SAVE SECTION

    // END OF SAVE SECTION











   
    




