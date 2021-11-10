window.onload = ()=>{
const can = document.getElementById("canvas");
can.width = window.innerWidth;
can.height = window.innerHeight;

const c = can.getContext("2d");
let particles = [];
const friction = 0.99;
const gravity = 0.05;
class Particle {
  constructor(x, y, r, color, velocity) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.alpha = 1;
	(this.color = color), (this.velocity = velocity);
  }

  draw() {
	c.save();
	c.globalAlpha = this.alpha;
	c.beginPath();
	c.moveTo(can.width/2,can.height);
	// c.lineTo(this.x,this.y);
	c.strokeStyle = this.color;
	c.stroke();
	c.beginPath();
	c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
	c.fillStyle = this.color;
	c.fill();
	c.closePath();
	c.restore();
  }

  update() {
	this.draw();
	this.velocity.y += gravity
	this.x += this.velocity.x;
	this.y += this.velocity.y;
	this.alpha -= 0.005;
  }
}

can.addEventListener("click", (e) => {
  const particleCount = 500;
  const angleIncrement = Math.PI*2/particleCount;
  const power = 10;
  for (let i = 0; i < particleCount; i++) {
	particles.push(
	  new Particle(e.clientX, e.clientY, 1, `hsl(${Math.random()*360},50%,50%)`, {
		x: Math.sin(angleIncrement*i)*Math.random()*power,
		y: Math.cos(angleIncrement*i)*Math.random()*power,
	  })
	);
  }
});

setInterval(() => {
  const e = {
	clientX: Math.random()*can.width,
	clientY: Math.random()*can.height,
  }
  const particleCount = 500;
  const angleIncrement = Math.PI*2/particleCount;
  const power = 10;
  for (let i = 0; i < particleCount; i++) {
	particles.push(
	  new Particle(e.clientX, e.clientY, 1, `hsl(${Math.random()*360},50%,50%)`, {
		x: Math.sin(angleIncrement*i)*Math.random()*power,
		y: Math.cos(angleIncrement*i)*Math.random()*power,
	  })
	);
  }
},5000);

const animate = () => {
  requestAnimationFrame(animate);
  c.fillStyle = 'rgba(0,0,0, 0.05)'
  c.fillRect(0, 0, can.width, can.height);
//   c.clearRect(0, 0, can.width, can.height);
//   c.fill()
  for (let i = 0; i < particles.length; i++) {
	if(particles[i].alpha>0){
	   particles[i].update();
	}else{
		particles.splice(i,1);
	}
  }
};
animate();}
