
/**
 * @param {string} Selector - CSS selector pour selectionner le DOM Element
 * @param {boolean} MultipleElement - If True, fait un querySelectorAll //
  */
export function $(selector, all){
    let self = {}
    self.el = getElem()
    self.text = self.el.innerText
    self.html = self.el.innerHTML
    /**
     * @param {string} CSSclass - Le nom de la class CSS à ajouter
     */
    self.addClass = (className)=>{
        let list = self.el.classList
        list.add(className)
        return self
    }
     /**
     * @param {string} CSSclass - Le nom de la class CSS à suprimer
     */
    self.rmvClass = (className)=>{
        let list = self.el.classList
        list.remove(className)
        return self
    }
    /**
     * @param {string} CSSclass - Le nom de la class CSS à toggle
     */
    self.tglClass = (className)=>{
        let list = self.el.classList
        list.toggle(className)
        return self
    }
    // Hightlight l'élément cliqué dans la list des élements sélectionnés
    self.lightOnClick = ()=>{
        let bases = self.el
        bases.forEach(e=>{
            e.addEventListener('click', ev =>{
                //Retire la class sur tout les éléments
                bases.forEach(e=>{e.classList.remove('active')})
                let target = ev.target
                //Ajoute la class sur l'élément cliqué
                target.classList.add('active')
            })     
        })
        return self
    }

    /**
     * @param {function} callback - Function à éxcécuter sur chaque éléments
     */
    self.each = (callback)=>{
        self.el.forEach(e=>callback(e))
    }
    //Link la valeur de l'élement sélectionné au innerText de l'élément target
    /**
     * @param {string} CSSselector - CSS Selector de l'élément target
     */
    self.linkValueTo = (target)=>{
        let t = document.querySelector(target)

        
        let valueRef = self.el.value

        
        t.innerText = valueRef
        return self
    }

    //Add eventListener
    /**
     * @param {string} Event - L'event à écouter
     * @param {function} callback - la function a éxcécuter pendant l'event
     */
    self.on = (type, callback)=>{
        self.el.addEventListener(type, callback)
        return self
    }
//Private Functions:
    function getElem(){

        //Check all et choisit single ou multiple elements 
        if(all){
            let el = document.querySelectorAll(selector);
            return el
        }else{
            let el = document.querySelector(selector)
            return el
        }
    }
    //Renvoi l'objet de départ
    return self
}



