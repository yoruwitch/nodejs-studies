/* eslint-disable linebreak-style */
import app from "./src/app.js";

const PORT = 3000;

// 3000 é a porta a ser usado, depois precisa de uma arrow function

app.listen(PORT, () => {
    console.log("Server is listening");
});
