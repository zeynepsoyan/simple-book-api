const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('Hello API!')
})

// parse requests of content-type - application/json
app.use(express.json());

// set port, listen for requests
const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server is running on port 8080.");
});