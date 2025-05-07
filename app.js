const express = require("express");
const path = require("path");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const app = express();

const PORT = 3000;

app.engine("hbs", expressHbs.engine({
    layoutsDir: "views/layouts",
    defaultLayout: "main",
    extname: "hbs"
}));

app.set("view engine", "hbs");
app.use("/static", express.static(path.join(__dirname, "public")));
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", function(req, res) {
    res.render("about", {
        title: "Main - SHIP",
    });
});

app.get("/download", function(req, res) {
    res.render("download", {
        title: "Download - SHIP",
    });
});

app.get('/download/:file', (req, res) => {
    const file = req.params.file;
    const filePath = path.join(__dirname, 'downloads', file);
    res.download(filePath, (err) => {
        if (err) {
            console.error('File download error:', err);
            res.status(404).send('File not found');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});