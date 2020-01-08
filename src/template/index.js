const Home = `<div class="home center" id="home">
            <div class="container center">
                <i class="plus"><img src="./src/css/icons/plus-solid.svg" alt="" srcset=""></i>
                <i class="minus"><img src="./src/css/icons/minus-solid.svg" alt="" srcset=""></i>
                <h1 id="tempo" class="morph tempo center" >120</h1>
                <input type="range" class="slider" id="slider" min="40" max="240" value="120">
            </div>
            
            <div class="selectors center">
                <div class="baseSelect two" id="2">2/4</div>
                <div class="baseSelect three" id="3">3/4</div>
                <div class="baseSelect four active" id="4">4/4</div>
                <div class="baseSelect six" id="6">6/8</div>
                <div class="baseSelect nine" id="9">9/8</div>
                <button class="btn gradient" id="btn">START</button>
            </div>
        </div>
        <script>
                //HOME SECTION
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
        </script>`
module.exports ={
    Home: Home
}