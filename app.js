const express = require("express");
const path = require("path");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const fs = require("fs");
const app = express();


const PORT = 3000;

app.engine("hbs", expressHbs.engine({
    layoutsDir: "views/layouts",
    defaultLayout: "main",
    extname: "hbs",
    partialsDir: "views/partials",
}));

app.set("view engine", "hbs");
app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/docs", express.static(path.join(__dirname, 'docs/html')))

app.get("/", function(req, res) {
    res.redirect("/about");
});

app.get("/about", (req, res)=>{
    res.render("about", {
        title: "Main - SHIP",
        layout: "main-layout"
    });
})

app.get("/download", function(req, res) {
    res.render("download", {
        title: "Download - SHIP",
        layout: "download-layout"
    });
});

app.get("/downloads/:file", (req, res) => {
    const file = req.params.file;
    const filePath = path.join(__dirname, 'downloads', file);
    res.download(filePath, (err) => {
        if (err) {
            console.error('File download error:', err);
            res.status(404).send('File not found');
        }
    });
});

app.get("/changelog", (req, res)=>{
    res.render("patches", {
        title: "Patches - SHIP",
        layout: "patches-layout"
    })
});

app.get('/documentation', (req, res) => {
    res.render('documentation', {
        title: 'Documentation',
        docPath: '/docs/index.html',
        layout: false
    });
});

app.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}`);
});