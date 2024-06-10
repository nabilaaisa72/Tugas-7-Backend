const Express = require('express')
const app = Express()
const PORT = 5000;
const routerMahasiswa = require('./routers/mahasiswa')

// untuk menerima req.body
app.use(Express.json())
app.use(Express.urlencoded({extended: true}))
app.use(routerMahasiswa)

const mongoose = require('mongoose') 
require('dotenv').config();
mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Sukses Terkoneksi dengan mongodb");
});

app.listen(PORT, () => 
    console.log(`Server running on http://localhost:${PORT}`)
);
 
