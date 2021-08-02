import {mainColor} from './Bullets'
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.className = 'myCanvas';
document.body.appendChild(canvas);
let particlesArray = [];
//amount of  bubbles
let numberOfParticles = 50;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let bodyColor =  localStorage.getItem('mainColor')

const clearParticals = () => {
    particlesArray = [];
}
class Particals  {

    
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius =  1.4;
        this.speedX = (Math.random() * 1) - 0.1;
        this.speedY =  (Math.random() * 1) - 0.1;
    }
    
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2,false);
        ctx.fillStyle = 'transparent';
        ctx.fill();
        mainColor ?  ctx.strokeStyle = mainColor :  ctx.strokeStyle = bodyColor;
        ctx.stroke();
    }
    
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x + this.radius > canvas.width ||
            this.x - this.radius < 0){
                
                this.speedX = -this.speedX;
            }
            if (this.y + this.radius > canvas.height ||
                this.y + this.radius < 0){
                this.speedY = -this.speedY;
            }
            this.draw();
        }
    render() {
        return (
            <>
                
            </>
        )
    }
}

const InitParticals = () => {
    for (let i = 0; i < numberOfParticles; i++){
        particlesArray.push(new Particals());
    }
    
}

const  animate = ()=> {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particlesArray.length; i++){
    particlesArray[i].update();
    

}
requestAnimationFrame(animate);
}

export{
    Particals,
    animate,
    InitParticals,
    clearParticals
}