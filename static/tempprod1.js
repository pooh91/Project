//Code of Slide
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
showSlides(slideIndex += n);
}
function currentSlide(n) {
 showSlides(slideIndex = n);
}    
function showSlides(n) {
var i;
var slides = document.getElementsByClassName("slides");
          var dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = slides.length+1}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";  
          }
      
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          if(slideIndex==0){
            slideIndex=1;}
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
        };
//Code of Menu Tab.
 function openData(evt, dataName) {
                var i, tabcontent, tablinks;
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";
                }
                tablinks = document.getElementsByClassName("tablinks");
                for (i = 0; i < tablinks.length; i++) {
                    tablinks[i].className = tablinks[i].className.replace(" active", "");
                }
                document.getElementById(dataName).style.display = "block";
                evt.currentTarget.className += " active";
            }
 document.getElementById("defaultOpen").click();