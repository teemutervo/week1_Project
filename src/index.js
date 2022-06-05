import "./styles.css";

/*const addCommentButton = document.getElementById("add-comment");

addCommentButton.addEventListener("click", function(){

    const ul = document.getElementById('ul');
    const li = document.createElement('li');
    li.innerHTML = addCommentButton.value;
    ul.appendChild(li);
  });
*/

const addCommentButton = document.getElementById("add-comment");
const ul = document.getElementById("list");
addCommentButton.addEventListener("click", () => {
  const li = document.createElement("li");
  const commentValue = document.getElementById("comment-text").value;
  li.appendChild(document.createTextNode(commentValue));
  ul.appendChild(li);
});

function removeComments() {
  ul.innerHTML = "";
  confirm("Haluatko varmasti poistaa kommentit?");
}

const removeCommentButton = document.getElementById("remove-comments");
removeCommentButton.addEventListener("click", removeComments);
