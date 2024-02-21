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

fetch("https://ytcuyyezqmwdqdpjhotr.supabase.co/rest/v1/vildmad", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0Y3V5eWV6cW13ZHFkcGpob3RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5NDY4OTcsImV4cCI6MjAyMzUyMjg5N30.F5qT6xHF4HXJc6yuBAtGegp4xfqgo5aM29_Yg2767LA",
  },
})
  .then(res => res.json())
  .then(showData);

function showData(cards) {
  console.table(cards);
  //Her looper vi
  cards.forEach(showList);
}

function showList(card) {
  const temp = document.querySelector("#forageListTemplate").content;
  const copy = temp.cloneNode(true);
  copy.querySelector("h3").textContent = card.title;
  copy.querySelector("h4").textContent = card.title;
  copy.querySelector("img.profile_img").src = card.image;
  const parent = document.querySelector("#listParent");
  parent.appendChild(copy);
}
