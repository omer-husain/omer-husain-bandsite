const shows = [
  {
    date: new Date("Mon Sept 06 2021"),
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: new Date("Tue Sept 21 2021"),
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: new Date("Fri Oct 15 2021"),
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: new Date("Sat Nov 06 2021"),
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: new Date("Fri Nov 26, 2021"),
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: new Date("Wed Dec 15 2021"),
    venue: "Press Club",
    location: "San Francisco, CA",
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

function createShows(show) {
  const table = createNodeEl("table", "shows__table", null, null);
  const row1 = createNodeEl("tr", null, null, null);
  const dateHeading = createNodeEl("th", "shows__sub-heading", "DATE", null);
  const row2 = createNodeEl("tr", null, null, null);
  const dateValue = createNodeEl(
    "td",
    "shows__date",
    `${show.date.toDateString()}`,
    null
  );
  const row3 = createNodeEl("tr", null, null, null);
  const venueHeading = createNodeEl("td", "shows__sub-heading", "VENUE", null);
  const row4 = createNodeEl("tr", null, null, null);
  const venueValue = createNodeEl("td", "shows__venue", show.venue, null);

  const row5 = createNodeEl("tr", null, null, null);
  const locationHeading = createNodeEl(
    "th",
    "shows__sub-heading",
    "LOCATION",
    null
  );

  const row6 = createNodeEl("tr", null, null, null);
  const locationValue = createNodeEl(
    "td",
    "shows__location",
    show.location,
    null
  );

  const row7 = createNodeEl("tr", null, null, null);
  const button = createNodeEl("button", "shows__button", "BUY TICKETS", null);

  table.append(row1, row2, row3, row4, row5, row6, row7);

  row1.append(dateHeading);
  row2.append(dateValue);
  row3.append(venueHeading);
  row4.append(venueValue);
  row5.append(locationHeading);
  row6.append(locationValue);
  row7.append(button);

  return table;
}

// function createShowCard(show) {
//   const card = createNodeEl("article", "shows__table", null, null);
//   const dateHeading = createNodeEl("h3", "shows__sub-heading", "DATE", null);
//   const dateValue = createNodeEl(
//     "time",
//     "shows__date",
//     `${show.date.toDateString()}`,
//     null
//   );

//   const venueHeading = createNodeEl("h3", "shows__sub-heading", "VENUE", null);
//   const venueValue = createNodeEl("p", "shows__venue", show.venue, null);

//   const locationHeading = createNodeEl(
//     "h3",
//     "shows__sub-heading",
//     "LOCATION",
//     null
//   );
//   const locationValue = createNodeEl(
//     "p",
//     "shows__location",
//     show.location,
//     null
//   );

//   const button = createNodeEl("button", "shows__button", "BUY TICKETS", null);

//   card.append(
//     dateHeading,
//     dateValue,
//     venueHeading,
//     venueValue,
//     locationHeading,
//     locationValue,
//     button
//   );

//   return card;
// }

function displayShow(show) {
  let table = createShows(show);
  console.log(table);
  showsSection.append(table); 
}

let showsSection = document.querySelector(".shows__container");

for (let show of shows) {
  displayShow(show);
}
