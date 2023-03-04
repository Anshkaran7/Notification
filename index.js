var box = document.querySelectorAll(".active");
box.forEach((active) => {
  active.addEventListener("click", () => {
    active.style.backgroundColor = "black";
   
  });
});

var btn = document.getElementById("mark-btn");
var unread = document.getElementById('unread')
var read = document.getElementById('read')
btn.addEventListener("click", function () {
  
  for (let i = 0; i < box.length; i++) {
    box[i].style.backgroundColor = "black";
    unread.style.display= "none"
    read.style.display="block"
  }
 
});


var Active = document.querySelectorAll('.active');

for (var i = 0; i < Active.length; i++) {
  Active[i].addEventListener('click', function() {
    var unread = this.querySelector('.unread');
    var read = this.querySelector('.read')
    unread.style.display="none"
    read.style.display="block"
  });
}

 
