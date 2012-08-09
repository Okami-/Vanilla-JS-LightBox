function expandPhoto() {

   // create overlay and append to page
   var overlay = document.createElement("div");
   overlay.setAttribute("id","overlay");
   overlay.setAttribute("class", "overlay");
   document.body.appendChild(overlay);

   // create image and append to page
   var img = document.createElement("img");
   img.style.width = "30%";
   img.setAttribute("id","img");
   img.src = this.getAttribute("data-larger");
   img.setAttribute("class","overlayimg");

   // click to restore page
   img.onclick=restore;

   document.body.appendChild(img);

}
// restore page to normal
function restore() {

 document.body.removeChild(document.getElementById("overlay"));
 document.body.removeChild(document.getElementById("img"));
}


window.onload=function() {
   var imgs = document.getElementsByTagName("img");
   imgs[0].focus();
   for (var i = 0; i < imgs.length; i++) {
     imgs[i].onclick=expandPhoto;
     imgs[i].onkeydown=expandPhoto;
   }
}
