class Drag{
	constructor(id){
		this.box=document.getElementById(id);
		this.boxx=0;
		this.boxy=0;
		this.init();
	}
	init(){
		this.box.onmousedown=function(event){
			this.boxx=event.clientX - this.box.offsetLeft;
			this.boxy=event.clientY - this.box.offsetTop;
			
			document.onmousemove=this.fnMove.bind(this);
			document.onmouseup = this.fnUp.bind(this);
			
			return false;
		}.bind(this);
	}
	fnMove(event){
		this.box.style.left = (event.clientX - this.boxx) +'px';
		this.box.style.top = (event.clientY - this.boxy) +'px';	
	}
	fnUp(event){
		document.onmousemove=null;
		document.onmouseup=null;
	}
}

class LimitDrag extends Drag{
	constructor(id){
		super(id);
		this.windowX=document.body.offsetWidth;
		this.windowY= document.body.clientHeight;
//		alert(this.windowY);
	}
	fnMove(event){
		super.fnMove(event);
		
		if(this.box.offsetLeft<0){
			this.box.style.left = '0px';
		}
		if(this.box.offsetLeft>this.windowX){
			this.box.style.left = this.windowX+'px';
		}
		if(this.box.offsetTop<0){
			this.box.style.top='0px';
		}
		if(this.box.offsetTop>this.windowY){
			this.box.style.top = this.windowY+'px';
		}
	}
}

export {Drag,LimitDrag} ;
