// https://ytcuyyezqmwdqdpjhotr.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0Y3V5eWV6cW13ZHFkcGpob3RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5NDY4OTcsImV4cCI6MjAyMzUyMjg5N30.F5qT6xHF4HXJc6yuBAtGegp4xfqgo5aM29_Yg2767LA

const data = "";

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
}

fetch("https://ytcuyyezqmwdqdpjhotr.supabase.co/rest/v1/VildMad", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0Y3V5eWV6cW13ZHFkcGpob3RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5NDY4OTcsImV4cCI6MjAyMzUyMjg5N30.F5qT6xHF4HXJc6yuBAtGegp4xfqgo5aM29_Yg2767LA",
  },
})
  .then(res => res.json())
  .then(showData);

function showData(items) {
  console.log(items);
}
