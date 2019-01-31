const express = require('express');
const _ = require("lodash");
const app = express();

const ta_name = _.sample(["Nico","Cami","Marc","Victor","Sonia","Miriam"]);
console.log(`El TA es ${ta_name}`);

app.get('/', (req,res) => {
    res.json({message:"Hola", ta:ta_name})
})


app.listen(3000, () => console.log("Ready on port 3000"))