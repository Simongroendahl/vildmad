// https://ytcuyyezqmwdqdpjhotr.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0Y3V5eWV6cW13ZHFkcGpob3RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5NDY4OTcsImV4cCI6MjAyMzUyMjg5N30.F5qT6xHF4HXJc6yuBAtGegp4xfqgo5aM29_Yg2767LA

const data = "";

const card = document.querySelector("forageCard");

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
}

function openNav() {
  //document.getElementById("minSidebar").style.width = "20%";
  document.getElementById("minSidebar").classList.add("open");
}

function closeNav() {
  //document.getElementById("minSidebar").style.width = "0";
  document.getElementById("minSidebar").classList.remove("open");
}

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
//const url = `https://ytcuyyezqmwdqdpjhotr.supabase.co/rest/v1/vildmad?id=eq.${id}`;

function getProduct() {
  fetch(`https://ytcuyyezqmwdqdpjhotr.supabase.co/rest/v1/vildmad?id=eq.${id}`, {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0Y3V5eWV6cW13ZHFkcGpob3RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5NDY4OTcsImV4cCI6MjAyMzUyMjg5N30.F5qT6xHF4HXJc6yuBAtGegp4xfqgo5aM29_Yg2767LA",
    },
  })
    .then(res => res.json())
    .then(showData);
}

function showData(ingredient) {
  console.log(ingredient);

  const singleCard = ingredient[0];
  //Herfra vil vi ændre indholdet af alt lige fra tekst, billeder og links.
  document.querySelector("h1").textContent = singleCard.title;
  document.querySelector("p.find_p").textContent = singleCard.wheretofind;
  document.querySelector("p.spot_p").textContent = singleCard.howtospot;
  document.querySelector("p.pick_p").textContent = singleCard.howtopick;
  document.querySelector("p.reading_p").textContent = singleCard.continuedreading;
  document.querySelector("img.profile_img").src = singleCard.image;
  document.querySelector("a.reading_link").href = singleCard.about_me_link;
  document.querySelector("a.reading_link2").href = singleCard.about_me_link;
  document.querySelector("p.warning_p").textContent = singleCard.warning;
  const parent = document.querySelector("#ingredientsGrid");
  //parent.appendChild(copy);
}

getProduct();
