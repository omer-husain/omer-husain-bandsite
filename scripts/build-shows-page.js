const API_KEY = "24dbb569-d980-4c7a-8d60-8ccd2f2975b7";
const BASE_URL = "https://project-1-api.herokuapp.com";
const apiParameter = `?api_key=${API_KEY}`;

// queries
let showsQuery = `${BASE_URL}/showdates${apiParameter}`;

console.log(showsQuery);

function getShows() {
  // Make a request for a user with a given ID
  axios
    .get(showsQuery)
    .then(function (response) {
      // handle success
      console.log(response);
      displayShows(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

// GET /showdates

// const shows = [
//   {
//     date: new Date("Mon Sept 06 2021"),
//     venue: "Ronald Lane",
//     location: "San Francisco, CA",
//   },
//   {
//     date: new Date("Tue Sept 21 2021"),
//     venue: "Pier 3 East",
//     location: "San Francisco, CA",
//   },
//   {
//     date: new Date("Fri Oct 15 2021"),
//     venue: "View Lounge",
//     location: "San Francisco, CA",
//   },
//   {
//     date: new Date("Sat Nov 06 2021"),
//     venue: "Hyatt Agency",
//     location: "San Francisco, CA",
//   },
//   {
//     date: new Date("Fri Nov 26, 2021"),
//     venue: "Moscow Center",
//     location: "San Francisco, CA",
//   },
//   {
//     date: new Date("Wed Dec 15 2021"),
//     venue: "Press Club",
//     location: "San Francisco, CA",
//   },
// ];

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

//toLocalDateString

function createShowCard(show) {
  const card = createNodeEl("article", "shows__table", null, null);
  const dateHeading = createNodeEl("h3", "shows__sub-heading", "DATE", null);
  const dateValue = createNodeEl(
    "time",
    "shows__date",
    new Date(Number(show.date)).toLocaleDateString(),
    null
  );

  const venueHeading = createNodeEl("h3", "shows__sub-heading", "VENUE", null);
  const venueValue = createNodeEl("p", "shows__venue", show.place, null);

  const locationHeading = createNodeEl(
    "h3",
    "shows__sub-heading",
    "LOCATION",
    null
  );
  const locationValue = createNodeEl(
    "p",
    "shows__location",
    show.location,
    null
  );

  const button = createNodeEl("button", "shows__button", "BUY TICKETS", null);

  card.append(
    dateHeading,
    dateValue,
    venueHeading,
    venueValue,
    locationHeading,
    locationValue,
    button
  );

  return card;
}

function displayShow(show) {
  let card = createShowCard(show);
  showsSection.append(card);
}

let showsSection = document.querySelector(".shows__container");

function displayShows(shows) {
  for (let show of shows) {
    displayShow(show);
  }
}

getShows();
