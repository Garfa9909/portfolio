let lang = localStorage.getItem("portfolio_language") || "en";
if(lang !== "es" && lang !== "en")  lang = "en"

document.documentElement.lang = lang;
document.addEventListener("DOMContentLoaded", createContent);

async function createContent() 
{
  const response = await fetch(`../data/${lang}/projects.json`);
  const projects = await response.json();
  document.getElementById("content").innerHTML = "";

  projects.forEach(p => createProject(p));
}

async function createProject(p)
{
  content = document.getElementById("content")
  content.innerHTML += `
  <article class = "project-container" id = "project-${p["name"]}">
    <h2 class = "project-title"> ${p["name"]} </h2>
    <p class = "project-description"> ${p["description"]} </p>
    <h3 class = "subtitle"> Specs </h3>
    <section class = "project-specs" id = "specs-${p["name"]}"> </section>
    <h3 class = "subtitle"> Stack </h3>
    <section class = "project-stack" id = "stack-${p["name"]}"> </section>
    <a href = "${p["github"]}" target = "_blank"> GitHub </a>
  </article>`

  specs = p["functionalities"]
  stack = p["technologies"]
  container_specs = document.getElementById("specs-" + p["name"])
  container_stack = document.getElementById("stack-" + p["name"])

  specs.forEach(s => createSpec(s, container_specs));
  stack.forEach(s => createStack(s, container_stack));
}

async function createSpec(s, container)
{
  container.innerHTML += `
  <h4 class = "spec"> ${s} </h4>
  `
}
  
async function createStack(s, container)
{
  container.innerHTML += `
  <h4 class = "stack_tech"> ${s} </h4>
  `
}