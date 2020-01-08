export function Metronome(){
    let self = this
    
    //Definit les propriétés du Metronome
    this.tempoMs = 500; //Default tempo : 120
    this.base = 4; //Default value
    this.count = 1;
    this.isOn = false;

    //Methods

    /**
     * @param {number} Chiffre - valeur du tempo
     */
    this.convertTempo = (tempo) => {
        let tempoMs = 60000 / tempo;
        return tempoMs;
    }


    /**
     * @param {number} Interval - Tempo convertit en Millisecondes pour set-up le time-out
     * @param {number} Base - La base du tempo choisit par l'utilisateur déterminant la fréquence des sons
     * @param {object} Son - Object contenant les sons -> {primarySound : elem, secondarySound: elem}
     */
    this.active = (tempoMs, base, sound) => {
        let timeOut = tempoMs;
        // console.log("base: ", base);
        // console.log("timeOut: ", timeOut);
        
        let primarySound = sound.primarySound;
        let secondarySound = sound.secondarySound;      
        if(self.isOn){
            if(self.count == 1){
                primarySound.play()
                self.count = self.count + 1
            }else if(self.count !== base){
                secondarySound.play()
                self.count = self.count + 1
            }else if(self.count == base){
                secondarySound.play()
                self.count = 1
            }
            setTimeout(()=>self.active(tempoMs, base, sound), timeOut)            
        }
    }


    //Private Functions
}
