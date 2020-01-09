function Nav(){
  let self = this

  this.listElem = document.querySelectorAll('.nav-item')
  this.pages = []

  this.init = () =>{ console.log("Init");

    self.listElem.forEach(el => {
      //Référence toutes les pages en fonction des btn de navigation
      let targetId = el.getAttribute('data-name')
      let targetPage = document.getElementById(targetId)
      //Append page à pages
      let page = {name: targetId, elem: targetPage}
      self.pages.push(page)

      el.addEventListener('click', e => {
        let targetId = e.target.getAttribute('data-name')
        clearView()
        setTimeout(() => {
          appear(targetId)
        }, 300);

      })
    }); 
  }


  function clearView(){
    self.pages.forEach(page=>{
      if(self.pages.length !== 0 && page.elem.classList.contains('active')){
        page.elem.classList.remove('active')
        setTimeout(()=>{
          page.elem.classList.add('hidden')
        }, 300)
      }
      
    })
  }
  function appear(id){
    let page = document.getElementById(id)
    page.classList.remove('hidden')
    setTimeout(() => {
      page.classList.add('active')
    }, 50);
  }
}
module.exports = {
  Nav: Nav
}