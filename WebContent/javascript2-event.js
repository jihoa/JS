//Ex5 - mouse location
window.addEventListener("load", function(){
	var section = document.querySelector("#section6");
	var container = section.querySelector(".container");
	var box = section.querySelector(".box");
	
	
	container.onclick = function(e){
		box.style.position = "absolute";
		box.style.left = e.x +"px";
		box.style.top  = e.y +"px";
		
		
	}
	
}); 

//Ex5 - Trigger
window.addEventListener("load", function(){
	var section = document.querySelector("#section5");
	var fileButton = section.querySelector(".file-button");
	var fileTriggerButton = section.querySelector(".file-trigger-button");
	
	
	fileTriggerButton.onclick = function(){
		var event = new MouseEvent("click", {
			'view':window,
			'bubbles':true,
			'cancelable':true
		});
		
		
		fileButton.dispatchEvent(event);
	}
	
	 
}); 
//연습문제 1-선택된 레코드 삭제하기:event target
window.addEventListener("load", function(){
	var section = document.querySelector("#section1-1");
	
	var tbody = section.querySelector(".notice-list tbody");
	
	tbody.onclick = function(e){
		
		e.preventDefault();//A태그 역할 무효화
		
		var target = e.target;
		
		if(target.nodeName != "A") return;
		
		if(target.classList.contains("sel-button")){
			var tr = target.parentElement;
			
			for(; tr.nodeName != "TR"; tr=tr.parentElement);
			
			tr.style.background = "yellow";
		}
		else if (target.classList.contains("edit-button")){
		}
		else if (target.classList.contains("del-button")){
		}
		
		
	}
    
}); 




// Ex3-이벤트 버블링 멈추기
window.addEventListener("load", function(){

    var section = document.querySelector("#section3");
    
    var imgList = section.querySelector(".img-list"); 
    var addButton = section.querySelector(".add-button");
    var currentImg = section.querySelector(".current-img");
    
 
    
    
    imgList.onclick = function(e){
        if(e.target.nodeName != "IMG") return;
        
        currentImg.src = e.target.src;
    };

    addButton.onclick = function(e){
        e.stopPropagation();
        
        var img = document.createElement("img");
        img.src = "images/img1.jpg";
        currentImg.insertAdjacentElement("afterend", img);
    };

}); 





//Ex2-이벤트 버블링을 이용해 사용자 이벤트 처리하기:event Bubbling
window.addEventListener("load", function(){

    var section = document.querySelector("#section2");
    var imgList = section.querySelector(".img-list"); 
    var currentImg = section.querySelector(".current-img");
    
    imgList.onclick = function(e){
        if(e.target.nodeName != "IMG") return;
        
        currentImg.src = e.target.src;
    };
}); 


//연습문제 1-선택된 레코드 삭제하기:event target
window.addEventListener("load", function(){
	var section = document.querySelector("#section1-1");
	
	var delButtons = section.querySelectorAll(".del-button");
	
	for(var i=0; i<delButtons.length; i++){
		delButtons[i].onclick = function(e){
			var tr = e.target.parentElement.parentElement;
			tr.remove();
		}
	}
    
}); 



//Ex1-선택된 이미지 보여주기:event target
window.addEventListener("load", function(){

    var section = document.querySelector("#section1");
    
    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");
    
//    imgs[0].onclick = function(e){
//    	currentImg.src = e.target.src;
//    }
//    
//    imgs[1].onclick = function(e){
//    	currentImg.src = e.target.src;
//    }
//    imgs[2].onclick = function(e){
//    	currentImg.src = e.target.src;
//    }    
      for(var i=0; i<imgs.length; i++)
    	  imgs[i].onclick = function(e){
    	  	currentImg.src = e.target.src;
      };

}); 