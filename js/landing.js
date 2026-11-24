let lang = localStorage.getItem("portfolio_language") || "en";
if(lang !== "es" && lang !== "en")  lang = "en"

document.documentElement.lang = lang;
document.addEventListener("DOMContentLoaded", createText);

async function createText() 
{
  
  descr = document.getElementById("desc")
  pr = document.getElementById("projects-link")
  cm = document.getElementById("competences-link")

  const response = await fetch(`data/${lang}/landing.json`);
  const landing_data = await response.json();

  descr.innerHTML = landing_data["description"]
  pr.innerHTML = landing_data["projects"]
  cm.innerHTML = landing_data["competences"]
  
}