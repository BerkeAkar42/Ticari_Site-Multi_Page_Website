/* Smooth Scroll */
$(document).ready(function(){
  // Add smooth scrolling to all links
   var x = document.getElementById("mouseScrool");
  $(x).on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){ // 1000 =  1saniye 
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



// "Yukarı Çık" Butonu

  // Butonu seç
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Sayfa kaydırıldığında butonu göster/gizle
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) { // 300px aşağı inince butonu göster
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };

  // Butona tıklanınca yukarı kaydır
  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Yumuşak kaydırma
    });
  });
