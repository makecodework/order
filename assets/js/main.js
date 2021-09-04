// Responsive menu with hamburger.
$("#hamburger").on("click", function(){
	  $(this).toggleClass("hamburger__open");
	  $( ".nav-top" ).toggleClass( "open" );
	  $("html").toggleClass( "fixed" );
}); // #Responsive menu with hamburger.
// Google map.
function initMap(){
  // The location of Uluru
    const uluru = { lat: 39.7219538, lng: -91.5098444 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const iconFolder = 'assets/img/';
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
      icon: `${iconFolder}location.svg`,
    });
}
// #Google map.
//
// Tabs with services at home page.
const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs-panel");
for (let el of tabLinks) {
  el.addEventListener("click", e => {
    e.preventDefault();

    document.querySelector(".tabs li.active").classList.remove("active");
    document.querySelector(".tabs-panel.active").classList.remove("active");

    const parentListItem = el.parentElement;
    parentListItem.classList.add("active");
    const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

    const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
    panel[0].classList.add("active");
    });
  }
// #Tabs with services at home page.
