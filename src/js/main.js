//Importation du Métronome App
import { Metronome } from "./metro";
//Importation de la librairie
import { $ } from "./utilities";



//Init Métronome App:
const metro = new Metronome();
// console.log(metro)


//DOM Manipulations:

//NAVIGATION
    //import des pages
const Home = require('../template/index')
const Part = require('../template/part')
const Save = require('../template/save')

    //Selectionne la vue
const view = document.getElementById('view')

    //Récupère le Html des templates
const homePageHTML = Home.Home
const partPageHTML = Part.Part
const savePageHTML = Save.Save

//Gere les BTN de Navigation
console.log(document.getElementById('view').children[0]);

$('.nav-item', true).lightOnClick().each((e)=>{
    e.addEventListener('click', ()=>{
        let page = document.getElementById('view').children[0]

        if (e.id === "homeL"){
            page.classList.add('disapear-right')
            setTimeout( ()=>{
                view.innerHTML = homePageHTML
            },500)
        }else if(e.id ==="partL"){
            console.log(page.id);
            
            if(page.id === "home"){
                page.classList.add('disapear-left')
            }else if(page.id === "save"){
                page.classList.add('disapear-right')
            }

            setTimeout( ()=>{
                view.innerHTML = partPageHTML
            },500)
        }else if(e.id === "saveL"){
            page.classList.add('disapear-left')
            setTimeout( ()=>{
                view.innerHTML = savePageHTML
            },500)
        }
    }) 
})


    // //HOME SECTION
    //     //BTN plus et moins
    // $('.minus').on('mousedown', ()=>{
    //     let tempo = document.getElementById('tempo')
    //     let value = parseInt(tempo.innerText, 10)
    //     tempo.innerText = value - 1
    // })
    // $('.plus').on('mousedown', ()=>{
    //     let tempo = document.getElementById('tempo')
    //     let value = parseInt(tempo.innerText, 10)
    //     tempo.innerText = value + 1
    // })
    //     //Hightlight des selector de la base du tempo
    // $('.baseSelect', true).lightOnClick();

    //     //Link le slider avec le display du tempo
    // $('#slider').on('input', ()=>$('#slider').linkValueTo('#tempo'))

    // //APP Control:
    //     //Uptdate base
    // $('.baseSelect', true).el.forEach(el => {
    //     el.addEventListener('click', e=>{
    //         let t = e.target;
    //         metro.base = parseInt(t.id, 10);
    //         console.log(metro.base);
    //         console.log(metro);
    //     })
    // })

    //     //Bouton start

    // //    
    // let sound ={
    //     primarySound: document.getElementById('primSound'),
    //     secondarySound: document.getElementById('secSound')
    // }


    // $("#btn").on('click', ()=>{
    //     //Update la valeur du tempo dans l'obj métronome
    //     let tempo = parseInt($("#tempo").text, 10)
    //     metro.tempoMs = metro.convertTempo(tempo)

    //     if(!metro.isOn){
    //         metro.isOn = true
    //         $("#btn").el.innerText = "STOP"
    //         console.log(metro.isOn);      
    //         metro.active(metro.tempoMs, metro.base, sound)
    //     }else{
    //         console.log($("#btn").text)
    //         $("#btn").el.innerText = "START"
    //         metro.isOn = false
    //         metro.count = 1
    //         console.log(metro.isOn);
    //     }
    // })
    // // END OF HOME SECTION
    //PART SECTION

    //END OF PART SECTION
    //SAVE SECTION

    //END OF SAVE SECTION











   
    




