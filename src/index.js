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
  //const li = document.createElement("li");
  //const commentValue = document.getElementById("comment-text").value;
  //li.appendChild(document.createTextNode(commentValue));
  //ul.appendChild(li);

  const div = document.createElement("div");
  const commentValue = document.getElementById("comment-text").value;
  const review = document.getElementById("review").value;
  div.classList.add("comment");
  commentValue.classList("comment-rating");
  review.classList.add("comment-tex");
  div.appendChild(document.createTextNode(review));
  div.appendChild(document.createTextNode(" " + commentValue));
  ul.appendChild(div);
});

function removeComments() {
  let question = "Haluatko varmasti poistaa kommentit?";
  //confirm(question);
  if (confirm(question) == true) {
    ul.innerHTML = "";
  }
}
/*addCommentButton.addEventListener("click", () => {
  const div = document.createElement("div");
  const commentValue = document.getElementById("comment-text").value;
  const review = document.getElementById("review").value;
  div.appendChild(document.createTextNode(commentValue));
  div.appendChild(document.createTextNode(review));
});*/

const removeCommentButton = document.getElementById("remove-comments");
removeCommentButton.addEventListener("click", removeComments);
