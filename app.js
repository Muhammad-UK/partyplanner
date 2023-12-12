const spanCount = document.querySelector(".spanCount");
const sectionParties = document.querySelector(".sectionParties");
let parties = [];

const render = () => {
  spanCount.innerHTML = parties.length;
  const html = parties
    .map((party) => {
      return `
            <h4>${party.name}</h4>
            <article>${party.description}</article>
            <time datetime="${party.date}">
            <p>${party.location}</p>
        `;
    })
    .join("");
  sectionParties.innerHTML = html;
};
