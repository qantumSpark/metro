function createModule(){
  let nbreMesures = document.querySelector('#nbreMesures').value
  let tempo = document.querySelector('#tempo.value')
  let tempoMs = 60000/tempo
  let base = document.querySelector('#baseTempo').value

  let module = {mesures : nbreMesures, tempo: tempoMs, base}
  return module
}

function append(module) {
  let modElement = document.createElement('div')
  modElement.classList.add("module")
  let {mesures, tempo, base} = document.createElement('h5')
  
  mesures.innerText = module.mesures
  tempo.innerText = module.tempo
  base.innerText = module.base

  modElement.appendChild(mesures)
              .appendChild(tempo)
                .appendChild(base)
  
  let modContainer = document.querySelector('.mod-container')
  modContainer.appendChild(modElement)
}

function createPart(name) {
  let list = document.querySelectorAll('module')
  let 
}

function getTargetCount(mesures, base) {
    metro.targetCount = mesures * base
}

function check() {
  if (metro.counter === metro.targetCount) {
    getNextModule()
  } else {
    check()
  }
}

function getNextModule(index) {
  let index = index + 1
  let module = partition[index]
  playModule(module)
}

function playModule(module) {
  let tempoMs = module.tempo
  let mesures = module.mesures
  let base = module.base
}