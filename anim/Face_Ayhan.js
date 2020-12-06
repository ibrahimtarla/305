class Color_Eyler extends Animator  {
    constructor() {
        super();
        this.author = 'Ayhan Arslan MADEN'
        this.desc = 'Smooth Face Change'
        let x0 = "translateX(0)", x1 = "translateY(680px)", x2 = "translateX(540px)"
        let b = ["url('1.png')", "url('2.png')", "url('3.png')", "url('4.png')", "url('5.png')"]
        this.anim = { background: b, transform: [x0, x1, x2, (x1+x2), x0]  }
        //this.anim = { transform: [x0, x1, x0] }
        this.elt = document.createElement('div')
        this.elt.style = "width: 9.7%; height: 8%; position: relative;"
        this.time = 12000
    }
    update() { }  //no code is needed here
}
