//key  {"api_key":"24dbb569-d980-4c7a-8d60-8ccd2f2975b7"}
const API_KEY = "24dbb569-d980-4c7a-8d60-8ccd2f2975b7";
const BASE_URL = "https://project-1-api.herokuapp.com";
const apiParameter = `?api_key=${API_KEY}`;

let commentsSection = document.querySelector(".display-comments");
let submitForm = document.querySelector(".write-comments__col2-form");

// queries
let commentsQuery = `${BASE_URL}/comments${apiParameter}`;

// const comments = [];

/**
 *
 * @param {string} element
 * @param {string} className
 * @param {string} textContent
 * @param {object} attributeObj
 * @returns {object} - Returns a node element - object
 */

function createNodeEl(element, className, textContent, attributeObj) {
  const el = document.createElement(element);
  el.classList.add(className);
  el.textContent = textContent;

  if (attributeObj !== undefined) {
    for (let props in attributeObj) {
      el.setAttribute(props, attributeObj[props]);
    }
  }
  return el;
}

/**
 *
 * @param {object} comment
 * @returns {object} returns a node (html)
 */

function createCommentCard(comment) {
  const card = createNodeEl("article", "display-comments__card", null, null);
  const cardCol1 = createNodeEl("section", "display-comments__card-col1");
  const cardAvatar = createNodeEl("img", "display-comments__avatar", null, {
    src: "./assets/images/grey1.png",
    alt: "user avatar",
  });

  const cardCol2 = createNodeEl("section", "display-comments__card-col2");

  const cardCol2Row1 = createNodeEl(
    "section",
    "display-comments__heading-row1",
    null,
    null
  );
  const cardCol2Row2 = createNodeEl(
    "section",
    "display-comments__heading-row2",
    null,
    null
  );

  const cardHeader = createNodeEl(
    "h3",
    "display-comments__card-header",
    comment.name,
    null
  );
  const cardDate = createNodeEl(
    "time",
    "display-comments__date",
    `${new Date(comment.timestamp).toLocaleDateString()}`,
    null
  );

  const commentText = createNodeEl(
    "p",
    "display-comments__comment-text",
    comment.comment,
    null
  );

  const likebutton = createNodeEl(
    "img",
    "display-comments__like-button",
    null,
    { src: "./assets/icons/SVG/icon-like.svg", alt: "like" }
  );

  likebutton.addEventListener("click", () => {
    incrementLike(comment.id);
  });

  const likesCounter = createNodeEl(
    "label",
    "display-comments__likes-counter",
    `likes: ${comment.likes}`,
    {}
  );

  const deleteButton = createNodeEl(
    "img",
    "display-comments__delete-button",
    null,
    { src: "./assets/icons/SVG/icon-delete.svg", alt: "delete" }
  );

  deleteButton.addEventListener("click", () => {
    deleteComment(comment.id);
  });

  card.append(cardCol1, cardCol2);
  cardCol1.append(cardAvatar);
  cardCol2.append(cardCol2Row1, commentText, cardCol2Row2);
  cardCol2Row1.append(cardHeader, cardDate);

  cardCol2Row2.append(likebutton, likesCounter, deleteButton);
  return card;
}

function displayComment(comment) {
  card = createCommentCard(comment);
  commentsSection.prepend(card); //appends to first position
}

function getComments() {
  axios
    .get(commentsQuery)
    .then(function (response) {
      // console.log(response);

      let comments = response.data;
      displayComments(comments);
      console.log(comments);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

function postComment(submittedName, submittedComment) {
  axios
    .post(commentsQuery, {
      name: submittedName,
      comment: submittedComment,
    })
    .then(function (response) {
      console.log(`post worked`);
      console.log(response);
      refreshComments();

      // displayComments(getComments());
    })
    .catch(function (error) {
      console.log(error);
    });
}

function sortComments(comments) {
  //sort array of objects based on date of post
  return comments.sort((a, b) => {
    return a.timestamp - b.timestamp;
  });
}

function displayComments(comments) {
  let sortedComments = sortComments(comments);

  for (let comment of sortedComments) {
    displayComment(comment);
  }
}

function incrementLike(commentId) {
  let likeQuery = `${BASE_URL}/comments/${commentId}/like${apiParameter}`;
  console.log(likeQuery);
  axios
    .put(likeQuery)
    .then((response) => {
      console.log("Put worked!");
      refreshComments();
    })
    .catch((err) => {
      console.log("Put didn't work", err);
    });
}

function deleteComment(commentId) {
  let deleteQuery = `${BASE_URL}/comments/${commentId}${apiParameter}`;
  console.log(deleteQuery);

  axios
    .delete(deleteQuery)
    .then((response) => {
      console.log("delete worked");
      refreshComments();
    })
    .catch((err) => {
      console.log("Put didn't work", err);
    });
}

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let submittedName = document.querySelector(
    ".write-comments__input-name"
  ).value;
  let submittedComment = document.querySelector(
    ".write-comments__comment-area"
  ).value;

  let submission = {
    name: submittedName,
    comment: submittedComment,
  };

  postComment(submission.name, submission.comment);
  document.querySelector(".write-comments__input-name").value = "";
  document.querySelector(".write-comments__comment-area").value = "";
});

function refreshComments() {
  //clear comments from dom and reload fresh from api
  commentsSection.innerHTML = "";
  getComments();
}

//invocation
refreshComments();
