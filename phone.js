var adjustp = 1.3*vw;
var adjustt = 2.9*vw;


// document.body.ontouchmove = (event)=>{
//     for (let i = 0; i < alla.length; i++) {
// var itemtop = parseInt($(alla[i]).css('height')) * (i+1);
// var chktop = Math.floor(parseInt($(alla[i].parentElement).css('top')) + itemtop) - Math.floor(event.touches[0].clientY + adjustt);
// var chkleft = Math.floor(parseInt($(alla[i].parentElement).css('left'))+ adjustp) - Math.floor(event.touches[0].clientX )
//         if(chktop>-10 && chktop <10){
//             if(chkleft>-25 && chkleft<25){
//                 part=true
//                 if(i>0){
//                     if(alla[i-1].style.backgroundColor ==='crimson' && alla[i].style.backgroundColor !=='crimson'){
//                         if(i==alla.length-1){
//                             var lbtop = parseInt($('.lb').css('height'));
//                                 $('.lb').css({height:lbtop+(1.07*vw)+40+'px'})
//                                 alla[i].style.backgroundColor = 'crimson';
//                                 sound()
//                                 for (let i = 0; i < 5; i++) {
//                                     particleM(event)  
//                                 }
//                                 side1m();
//                                 $('#arrow').css({
//                                     transform: 'rotate(270deg)',
//                                     left: '42vw',
//                                     top: '16vw',
//                                     Animation: 'left1 2000ms linear infinite'
//                                 })
//                                 side.style.backgroundColor = '#ff5c6d'
//                         }
//                         else{
//                             var lbtop = parseInt($('.lb').css('height'));
//                             $('.lb').css({height:lbtop+(1.07*vw)+'px'})
//                             alla[i].style.backgroundColor = 'crimson';
//                             sound()
//                             for (let i = 0; i < 5; i++) {
//                                 particleM(event)  
//                             }
//                         } 
//                     }
//                 }

//                 else if(alla[i].style.backgroundColor !=='crimson'){
//                         var lbtop = parseInt($('.lb').css('height'));
//                         $('.lb').css({height:lbtop+(1.07*vw)+'px'})
//                         alla[i].style.backgroundColor = 'crimson';
//                         sound()
//                         for (let i = 0; i < 5; i++) {
//                             particleM(event)  
//                         }
//                 }     
//             }
//         }
//     }
// }

document.body.ontouchmove = (event)=>{
    for (let i = 0; i < all.length; i++) {
        if(i==0){
            var x =  Math.floor(parseInt($(all[i]).attr('x')) - ((event.touches[0].clientX/screen.availWidth)*100)) ;
            var y =  Math.floor(parseInt($(all[i]).attr('y')) - ((event.touches[0].clientY/screen.availWidth)*100)) ;
            console.log('x :' + x)
           console.log('y :' + y)
            if(x>-2 && x<2){
              if(y>-2 && y<2){
               all[i].style.fill = 'crimson';
              }
            }
        }
        else if(i==8){
            if(all[i-1].style.fill ==='crimson' && all[i].style.fill !=='crimson' ){
                var x =  Math.floor(parseInt($(all[i]).attr('x')) - ((event.touches[0].clientX/screen.availWidth)*100)) ;
                var y =  Math.floor(parseInt($(all[i]).attr('y')) - ((event.touches[0].clientY/screen.availWidth)*100)) ;
                console.log('x :' + x)
               console.log('y :' + y)
                if(x>-2 && x<2){
                  if(y>-2 && y<2){
                   all[i].style.fill = 'crimson';
                   $('#arrow').hide();
                   $('#ar').show();
                   sound();
                   for (let i = 0; i < 12; i++) {
                    particleM(event)
                }
                  }
                }
            }
        }
        else{
            if(all[i-1].style.fill ==='crimson' && all[i].style.fill !=='crimson' ){
                var x =  Math.floor(parseInt($(all[i]).attr('x')) - ((event.touches[0].clientX/screen.availWidth)*100)) ;
                var y =  Math.floor(parseInt($(all[i]).attr('y')) - ((event.touches[0].clientY/screen.availWidth)*100)) ;
                console.log('x :' + x)
               console.log('y :' + y)
                if(x>-2 && x<2){
                  if(y>-2 && y<2){
                   all[i].style.fill = 'crimson';
                   sound()
                   for (let i = 0; i < 12; i++) {
                    particleM(event)
                }
                  }
                }
            }

        }
     
        
    }
}

var elem = document.getElementById("game");
function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }


  