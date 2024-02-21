// https://ytcuyyezqmwdqdpjhotr.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0Y3V5eWV6cW13ZHFkcGpob3RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5NDY4OTcsImV4cCI6MjAyMzUyMjg5N30.F5qT6xHF4HXJc6yuBAtGegp4xfqgo5aM29_Yg2767LA

const data = "";

const card = document.querySelector("forageCard");

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
}

fetch("https://ytcuyyezqmwdqdpjhotr.supabase.co/rest/v1/vildmad", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0Y3V5eWV6cW13ZHFkcGpob3RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5NDY4OTcsImV4cCI6MjAyMzUyMjg5N30.F5qT6xHF4HXJc6yuBAtGegp4xfqgo5aM29_Yg2767LA",
  },
})
  .then(res => res.json())
  .then(showData);

function showData(items) {
  console.table(items);
  //Her looper vi
  items.forEach(showIngredient);
}

function showIngredient(ingredient) {
  const temp = document.querySelector("#forageCardTemplate").content;
  const copy = temp.cloneNode(true);
  copy.querySelector("h1").textContent = ingredient.title;
  copy.querySelector("p.find_p").textContent = ingredient.wheretofind;
  copy.querySelector("p.spot_p").textContent = ingredient.howtospot;
  copy.querySelector("p.pick_p").textContent = ingredient.howtopick;
  copy.querySelector("p.reading_p").textContent = ingredient.continuedreading;
  copy.querySelector("img.profile_img").src = ingredient.image;
  copy.querySelector("a.reading_link").href = ingredient.about_me_link;
  copy.querySelector("a.reading_link2").href = ingredient.about_me_link;
  const parent = document.querySelector("#ingredientsGrid");
  parent.appendChild(copy);
}
