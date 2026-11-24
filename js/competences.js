let lang = localStorage.getItem("portfolio_language") || "en";
if(lang !== "es" && lang !== "en")  lang = "en"

document.documentElement.lang = lang;
document.addEventListener("DOMContentLoaded", createContent);

async function createContent() 
{
  
  const response = await fetch(`../data/${lang}/competences.json`);
  const competences = await response.json();
  document.getElementById("content").innerHTML = "";

  competences.forEach(c => createCompetence(c));
}

async function createCompetence(c)
{
  content = document.getElementById("content")
  content.innerHTML += `<h2 class = "competence-title"> ${c["name"]} </h2>
  <article class = "tech-container" id = "container-${c["name"]}">

  </article>`

  technologies = c["technologies"]
  container = document.getElementById("container-" + c["name"])

  technologies.forEach(t => createTechnology(t, container));
}
  
async function createTechnology(t, container)
{
  container.innerHTML += `<section class = "technology">
    <img src = "../media/img/${t["img"]}" class ="technology-img">
    <h3 class = "technology-txt"> ${t["name"]} </h3>
  </section>
  `
}