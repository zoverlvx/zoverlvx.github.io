const express = require("express")
const app = express();
const PORT = 3001 || process.env.PORT;

/*
sets up public directory
serves all files on /
*/

app.use("/", express.static("assets"));


app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
