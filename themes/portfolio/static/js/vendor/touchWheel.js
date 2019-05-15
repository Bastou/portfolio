var addTouchWheelEventListener = function (wheelHandler)
{
  // Desktop wheel
  function desktopWheel() {

    function wheel(event) { 
      var delta = 0;
      if (!event) event = window.event;
      if (event.wheelDelta) {
        delta = event.wheelDelta/120;
      } else if (event.detail) {
        delta = -event.detail/3;
      }
      if (delta)
      //console.log(delta);
        wheelHandler(delta);
      // if (event.preventDefault)
      //   event.preventDefault();
      event.returnValue = false;
    }
  
  
    if (window.addEventListener) 
    {
      // IE9+, Chrome, Safari, Opera
      window.addEventListener("mousewheel", wheel, false); 
      // Firefox
      window.addEventListener("DOMMouseScroll", wheel, false);
    } 
    else 
    {
      // // IE 6/7/8
      window.attachEvent("onmousewheel", wheel);
    }
  }

    // Touch wheel
   function touchWheel() {

      // Swipe Up / Down
      var initialY = null;
  
      function startTouch(e) {
        // get if touch in current section
        initialY = e.touches[0].clientY;
      };
  
      function moveTouch(e) {
        e.preventDefault();
        if (initialY === null) {
          return;
        }
  
        var currentY = e.touches[0].clientY;
        var delta = initialY - currentY;

        wheelHandler(delta)
  
        // reset touch pos
        initialY = null;
      };
  
      // add listeners
      window.addEventListener("touchstart", startTouch, false); 
      window.addEventListener("touchmove", moveTouch, false);
    }

    if(!is_touch_device()) {
      desktopWheel(); 
    } else {
      touchWheel();
    }
}



window.addTouchWheelEventListener = addTouchWheelEventListener;

// HELPERS
function is_touch_device() {
  return (('ontouchstart' in window)
       || (navigator.MaxTouchPoints > 0)
       || (navigator.msMaxTouchPoints > 0));
 }
