var createPostDiv = document.getElementById("createPost");
var createPost = document.getElementById("createPostBtn");
var createPostClose = document.getElementById("createPostClose");
createPost.onclick = function () {
    createPostDiv.style.display = "block";
}
createPostClose.onclick = function () {
    createPostDiv.style.display = "none";
}