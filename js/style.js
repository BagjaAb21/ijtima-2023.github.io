var modal = document.getElementById("myModal");

var img = document.getElementsByTagName("img");
var modalImg = document.getElementById("img01");
for(var i=0;i<img.length;i++){
    img[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}