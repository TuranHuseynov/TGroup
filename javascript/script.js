	function togglemenu(){
    	document.getElementById("sidebar").style.left = "0%";
    	document.getElementById("sp").style.display = "none";
        document.getElementById("ie").style.display = "block";
    	document.getElementById("rightnavi").style.display = "block";
    	
    	 	};

    	 	function togglemenutwo(){
    	document.getElementById("sidebar").style.left = "-100%";
    	document.getElementById("ie").style.display = "none";
    	document.getElementById("sp").style.display = "block";
    	 	};


function togglemenuphoto(){
  document.getElementById("carouselExampleControls").style.left = "98%";
  document.getElementById("etraflibut").style.display = "none";

     

};

function togglemenuphotoblock(){
  document.getElementById("carouselExampleControls").style.left = "0%";
  document.getElementById("etraflibut").style.display = "block";

     

};















$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 170) {
          $("bdo").css('background-color', 'blue');
      }
      
   });
});