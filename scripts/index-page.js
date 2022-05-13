const connorWalton = {
    __id: 001,
  firstName: "Connor",
  lastName: "Walton",
  avatarImageSrc: "",
  comments: [
    {
      __id: 1001,

      //months in date object start from 0
      dateAdded: new Date(2021, 02 - 1, 17),
      text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
  ],
};

const emilieBeach = {
  __id: 002,
  firstName: "Emilie",
  lastName: "Walton",
  avatarImageSrc: "",
  comments: [
    {
      __id: 1002,
      dateAdded: new Date(2021, 01 - 1, 09),
      text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
  ],
};

const milesAcosta = {
  __id: 003,
  firstName: "Miles",
  lastName: "Acosta",
  avatarImageSrc: "",
  comments: [
    {
      __id: 1003,
      dateAdded: new Date(2020, 12 - 1, 20),
      text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    },
  ],
};

const userList = [connorWalton, emilieBeach, milesAcosta];

let commentsSection = document.querySelector(".submitted-comments");

const displayComments = (users) => {
  for (let user of users) {
    console.log(`${user.firstName} ${user.lastName}`);
    commentsSection.innerHTML += `${user.firstName} ${user.lastName} `;

    for (let comment of user.comments) {
      console.log(comment.dateAdded.toLocaleDateString());
      commentsSection.innerHTML += `${comment.dateAdded.toLocaleDateString()} 
      ${comment.text} `;
      console.log(comment.text);
    }

    commentsSection.innerHTML += "<br><br>";
  }
};

submitComments(payload){
  userList.push(payload);
}

displayComments(userList);
