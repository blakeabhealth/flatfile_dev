<button onclick="importer.requestDataFromUser().then(function(results) { 
    // do something with the results
    importer.displaySuccess('Thanks for uploading your data!')
})">Start Import</button>

<script src="https://unpkg.com/@flatfile/adapter/build/dist/index.min.js"></script>

<script>
const importer = new FlatfileImporter("b7793ea8-1939-4876-bb48-61b2bafc3c4f", {
  type: "imports",
  fields: [
      {key: "name", label: "Name"},
      {key: "email", label: "Email"}
    ],
  managed: true,
});

importer.setCustomer({userId: "12345"});
</script>
