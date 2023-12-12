const spanCount = document.querySelector(".spanCount");
const sectionParties = document.querySelector(".sectionParties");
let parties = [];

const render = () => {
  spanCount.innerHTML = parties.length;
  const html = parties
    //wanted to get the datetime attribute to work but does not seem like it will unless I use some Date object and a tolocalestring method which we have not covered in class
    .map((party) => {
      return `
            <h4>Name: ${party.name}</h4>
            <article>Description: ${party.description}</article>
            <p>Date and Time: <time datetime="${party.date}">${party.date}</time></p> 
            <p>Location: ${party.location}</p>
        `;
    })
    .join("");
  sectionParties.innerHTML = html;
};

const fetchParties = async () => {
  try {
    const response = await fetch(
      "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2309_ftb_et_web_am/events"
    );
    const json = await response.json();
    parties = json.data;
    render();
  } catch (ex) {
    console.log(ex);
  }
};

fetchParties();
