function getcomment(id) {
    if (id.value != "") {
        var com = '<p class="singleComment">' + id.value + '</p>';
        document.getElementById("addEventNames").innerHTML = com + document.getElementById("addEventNames").innerHTML;
        document.getElementById("userComments").value = document.getElementById("userComments").defaultValue;
    }
}
function PostEdit() {
    debugger;
    var editbtn = document.getElementById("edit");
    if (editbtn.childNodes[0].nodeValue == "Edit") {
        editbtn.childNodes[0].nodeValue = "Save";
        editbtn.childNodes[1].classList.remove("fa-edit");
        editbtn.childNodes[1].classList.add("fa-save");
        document.getElementById("heading").contentEditable = "true";
        document.getElementById("postcontent").contentEditable = "true";
        document.getElementById("heading").classList.add("editable");
        document.getElementById("postcontent").classList.add("editable");

    }
    else {
        editbtn.childNodes[0].nodeValue = "Edit";
        editbtn.childNodes[1].classList.remove("fa-save");
        editbtn.childNodes[1].classList.add("fa-edit");
        document.getElementById("heading").contentEditable = "false";
        document.getElementById("postcontent").contentEditable = "false";
        document.getElementById("heading").classList.remove("editable");
        document.getElementById("postcontent").classList.remove("editable");
    }
}
var likecount = 0;
function LikeClick() {

    var likemessage = document.getElementById("likemessage");
    likemessage.innerText = "1 person likes this!";
    var likebtn = document.getElementById("likebtn");
    likebtn.children[0].innerText = "Liked";
}


