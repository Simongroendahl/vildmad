fetch("https://ytcuyyezqmwdqdpjhotr.supabase.co/rest/v1/vildmad?select=tags", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0Y3V5eWV6cW13ZHFkcGpob3RyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5NDY4OTcsImV4cCI6MjAyMzUyMjg5N30.F5qT6xHF4HXJc6yuBAtGegp4xfqgo5aM29_Yg2767LA",
  },
})
  .then(res => res.json())
  .then(showCategories);

function showCategories(items) {
  items.forEach(showCategory);
}

function showCategory(cat) {
  console.table(cat);
  // Først skal vi hente vores template
  const template = document.querySelector("template").content;
  //Derefter cloner vi dets indhold
  const clone = template.cloneNode(true);
  //Ændrer indhold
  clone.querySelector("a").textContent = cat.tag;
  //Appender
  document.querySelector(".landScape ol").appendChild(clone);
}
