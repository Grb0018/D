
var vw = screen.availWidth/100;
var down = 0.5*vw;
var part=true;

function sound(){
    var audio = new Audio('./img/Touch.mp3')
    audio.play()
}




var all = document.querySelectorAll('ellipse') ;
for (let i = 0; i < all.length; i++) {
    if(i==0){
        all[i].onmousemove = ()=>{
          if(all[i].style.fill !='crimson'){
            all[i].style.fill = 'crimson';
            sound();
            for (let i = 0; i < 12; i++) {
                 particle(event)
             }
             setTimeout(()=>{part = true},2050)
        }
      }
    }
    else if(i==8){
      all[i].onmousemove = ()=>{
        if(all[i].style.fill !='crimson'){
          all[i].style.fill = 'crimson';
          sound();
          for (let i = 0; i < 12; i++) {
               particle(event)
           }
           setTimeout(()=>{part = true},2050)
           $('#arrow').hide();
           $('#ar').show()
      }
    }
    }
    else if(i==all.length-1){
      all[i].onmousemove = ()=>{
        if(all[i-1].style.fill ==='crimson'){
            if(all[i].style.fill !='crimson'){
              all[i].style.fill = 'crimson';
          sound();
          for (let i = 0; i < 12; i++) {
            particle(event)
        } 
        for (let i = 0; i < all.length; i++) {
          $(all[i]).hide();
        }
        $('#ar').hide();
        setTimeout(()=>{part = true},2050)
        document.getElementById('b').style.animation = 'fade 2000ms linear';
        setTimeout(()=>{
          document.getElementById('b').style.border= '2vw solid white';
          
        },1800)
            }
        }
      }
    }
    else{
        all[i].onmousemove = ()=>{
        if(all[i-1].style.fill ==='crimson'){
            if(all[i].style.fill !='crimson'){
              all[i].style.fill = 'crimson';
          sound();
          for (let i = 0; i < 12; i++) {
            particle(event)
        } 
        setTimeout(()=>{part = true},2050)
            }
        }
    }
    }
    
}


var create = 0;
var dire=['l','r'];
var count = 5*vw

function particle(event){
    if(part == true){
        var c = document.createElement('c');
         create=1;
         var left;
         var chk = dire[Math.floor(Math.random()*2)]
         if(chk=='l'){
           left  = (event.clientX - Math.floor(Math.random()*count)) + 'px';
         }
         else{
           left= (event.clientX + Math.floor(Math.random()*count)) + 'px';
         }
         var height= (event.clientY - Math.floor(Math.random()*count)) + 'px';
         c.setAttribute('style','width:0.2vw;height:0.2vw;display:block;position:absolute;z-index:5;border-radius:count%;box-shadow:0px 0px 10px white;');
        c.style.left  = event.clientX + 'px' ;
        c.style.top = event.clientY +'px';
       c.style.backgroundColor = 'white';
     
        $(c).animate({
         left: left,
         top: height
        },500)
        setTimeout(()=>{
         $(c).fadeOut()
        },490)
        document.body.append(c);
        setTimeout(()=>{c.remove();},2000)
        
    } 
}

function particleM(event){
    if(part == true){
        var c = document.createElement('c');
         create=1;
         var left;
         var chk = dire[Math.floor(Math.random()*2)]
         if(chk=='l'){
           left  = (event.touches[0].clientX - Math.floor(Math.random()*count)) + 'px';
         }
         else{
           left= (event.touches[0].clientX + Math.floor(Math.random()*count)) + 'px';
         }
         var height= (event.touches[0].clientY - Math.floor(Math.random()*count)) + 'px';
         c.setAttribute('style','width:0.2vw;height:0.2vw;display:block;position:absolute;z-index:5;border-radius:count%;box-shadow:0px 0px 10px white;');
        c.style.left  = event.touches[0].clientX + 'px' ;
        c.style.top = event.touches[0].clientY -15 +'px';
       c.style.backgroundColor = 'white';
     
        $(c).animate({
         left: left,
         top: height
        },500)
        setTimeout(()=>{
         $(c).fadeOut()
        },490)
        document.body.append(c);
        setTimeout(()=>{c.remove();},2000)
        
    } 
}