//data for comments in array of objects

let comments = [
  {
    fullName: "Connor Walton",
    //months in date object start from 0
    dateAdded: new Date(2021, 02 - 1, 17),
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    fullName: "Emilie Beach",
    //months in date object start from 0
    dateAdded: new Date(2021, 01 - 1, 09),
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },

  {
    fullName: "Miles Acosta",
    //months in date object start from 0
    dateAdded: new Date(2020, 12 - 1, 20),
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

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
    src: "./assets/images/Mohan-muruge.jpg",
    alt: "user avatar",
  });

  const cardCol2 = createNodeEl("section", "display-comments__card-col2");
  const cardCol2Row = createNodeEl(
    "section",
    "display-comments__heading-row",
    null,
    null
  );
  const cardHeader = createNodeEl(
    "h3",
    "display-comments__card-header",
    comment.fullName,
    null
  );
  const cardDate = createNodeEl(
    "time",
    "display-comments__date",
    `${comment.dateAdded.toLocaleDateString()}`,
    null
  );

  const commentText = createNodeEl(
    "p",
    "display-comments__comment-text",
    comment.text,
    null
  );

  card.append(cardCol1, cardCol2);
  cardCol1.append(cardAvatar);
  cardCol2.append(cardCol2Row, commentText);
  cardCol2Row.append(cardHeader, cardDate);

  //structure of appends

  /*
  
      card   
        cardCol1
          cardAvatar
        
        cardCol2
          cardCol2Row
            cardHeader
            cardDate
          commentText
  */

  return card;
}

function displayComment(comment) {
  card = createCommentCard(comment);
  commentsSection.appendChild(card);
}

// console.log(comment.dateAdded.toLocaleDateString());
let commentsSection = document.querySelector(".display-comments");

for (let comment of comments) {
  displayComment(comment);
}
