var modal = document.getElementById("DeletePost");
var yes = document.getElementById("yesbtn");

yes.onclick = function () {
    document.getElementById(yes.id).parentElement.removeChild(document.getElementById(yes.id));
    modal.style.display = "none";
    var totalPosts = document.getElementsByClassName("post-container");
    if (totalPosts.length % 2 == 0) {
        var centerpost = totalPosts[totalPosts.length - 1];
        centerpost.classList.remove("center");
    }
    else
    {
        var lastpost = totalPosts[totalPosts.length - 1];
        lastpost.classList.add("center");
    }
}

var no = document.getElementById("nobtn");
no.onclick = function () {
    modal.style.display = "none";
}

var listtrash = document.getElementsByClassName("fa fa-trash");
for (var i = 0; listtrash.length > i; i++) {
    var posttoremove = listtrash[i].parentNode.parentElement.parentElement.parentElement.id;
    var yes = document.getElementById("yesbtn");
    var test = listtrash[i];
   listtrash[i].onclick = function (e) {
       modal.style.display = "block";
       yes.id = e.toElement.parentNode.parentElement.parentElement.parentElement.id;
      
    }

}


