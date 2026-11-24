let language = localStorage.getItem("portfolio_language") || "en";
if(language !== "es" && language !== "en")  language = "en"

document.documentElement.lang = language;
document.addEventListener("DOMContentLoaded", createNav);

async function createNav() 
{
  
  nav = document.getElementById("nav")
  const routePrefix = window.location.pathname.includes("/html/") ? "../" : "";

  const response = await fetch(`${routePrefix}data/${language}/nav.json`);
  const nav_data = await response.json();
  

  other_language = language === "es" ? "en" : "es";

  nav.innerHTML = `
    <a href = "${routePrefix}index.html" id="nav-name"> Rafael Ceres Martínez</a>
      <ul id = "nav-list">
        <li> <a href = ${routePrefix}index.html class = "nav-link"> ${nav_data["home"]} </a> </li>
        <li> <a href = ${routePrefix}html/projects.html class = "nav-link"> ${nav_data["projects"]} </a> </li>
        <li> <a href = ${routePrefix}html/competences.html class = "nav-link"> ${nav_data["competences"]} </a> </li>
      </ul>
      <button onclick="changeLanguage('${other_language}')" id = "nav-lang"> ${other_language.toUpperCase()} </button>
  `;
}

function changeLanguage(language)
{
  localStorage.setItem("portfolio_language", language)
  location.reload();
}