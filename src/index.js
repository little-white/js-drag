var target = {};
target.$item = document.querySelector('.drag-item')
target.$item.addEventListener('mousedown', function(e){
    target.active = true
  	target.point = {
      x: e.clientX - target.$item.offsetLeft,
      y: e.clientY - target.$item.offsetTop
    }
})
document.addEventListener('mousemove', function(e){
    if(target.active){
        target.$item.style.left = (e.clientX - target.point.x)+'px';
        target.$item.style.top = (e.clientY - target.point.y)+'px';
    }
})
document.addEventListener('mouseup', function(e){
    target.active = false
})
