function Nav(){
  let self = this

    //Recherche tous les éléments sur la page ayant la class nav-item (btn de navigation)
  this.listElem = document.querySelectorAll('.nav-item')
    // Array destiné à contenir tous les objets {page}
  this.pages = []

    //Initialise la Navigation
  this.init = () =>{ console.log("Init");

    self.listElem.forEach(el => {
      //Référence toutes les pages en fonction des btn de navigation
      let targetId = el.getAttribute('data-name')
      //Grab toutes les pages grace a l'id
      let targetPage = document.getElementById(targetId)
      //Créer l'objet page et append à pages
      let page = {name: targetId, elem: targetPage}
      self.pages.push(page)

      //Setup le listener sur chaque bouton
      el.addEventListener('click', e => {
        //Recupère l'id de la page en founction du bouton cliqué
        let targetId = e.target.getAttribute('data-name')
        //Efface toute les pages
        clearView()

        //Attend que l'animation de départ soit finie
        setTimeout(() => {
          //lance l'animation d'apparition grace a l'id
          appear(targetId)
        }, 300);

      })
    }); 
  }

  //Trouve la page active et rend la cachée
  function clearView(){
    //Utilise l'array Pages crée dans init()
    self.pages.forEach(page=>{

      //Check que pages existe, enléve la class active
      if(self.pages.length !== 0 && page.elem.classList.contains('active')){
        page.elem.classList.remove('active')
        setTimeout(()=>{
          //Masque la page aprés l'animation
          page.elem.classList.add('hidden')
        }, 300)
      }
      
    })
  }

  /**
   * 
   * @param {string} id - Id de la page a faire apparaitre
   */
  function appear(id){
    //Attrape la page
    let page = document.getElementById(id)
    //La rend visible
    page.classList.remove('hidden')
    setTimeout(() => {
      //Lance l'animation d'appaition aprés delay
      page.classList.add('active')
    }, 10);
  }
}

//EXPORT
module.exports = {
  Nav: Nav
}