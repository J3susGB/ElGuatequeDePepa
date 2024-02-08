document.addEventListener("DOMContentLoaded", function() {
    var scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(function(scrollLink) {
      scrollLink.addEventListener("click", function(e) {
        e.preventDefault();
        var targetId = this.getAttribute("href").substring(1);
        var targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          var offsetTop = targetElement.offsetTop;
          var duration = 1250; // Puedes ajustar la duración según tu preferencia
          var startTime;
          var startTop = window.scrollY || window.pageYOffset;
  
          function scrollToTarget(timestamp) {
            if (!startTime) {
              startTime = timestamp;
            }
  
            var progress = timestamp - startTime;
            var easeInOutQuad = progress < duration / 2 ? 2 * Math.pow(progress / duration, 2) : 1 - Math.pow(-2 * progress / duration + 2, 2) / 2;
            var newPosition = startTop + (offsetTop - startTop) * easeInOutQuad;
  
            window.scrollTo(0, newPosition);
  
            if (progress < duration) {
              requestAnimationFrame(scrollToTarget);
            }
          }
  
          requestAnimationFrame(scrollToTarget);
        }
      });
    });
  });
  