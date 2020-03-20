const restify = require("restify");
const server = restify.createServer();
const klikkivarasto = require("./models/klikkivarasto");
const corsMiddleware = require("restify-cors-middleware");
const cors = corsMiddleware({
                                "origins" : ["*"]
                            });

const portti = process.env.PORT || 8000;

server.pre(restify.pre.sanitizePath()); //korjataan ylimääräiset kauttaviivat pois
server.use(restify.plugins.bodyParser()); //otetaan mukaan bodyParser
server.pre(cors.preflight); //tehdään pyyntöjä edeltävät cors-valmistelut
server.use(cors.actual); //kytketään cors-asetukset/otsikot jokaiseen pyyntöön

server.get("/app/osallistu", (req, res, next) => {

    let palautus = klikkivarasto.osallistu();
    res.send(palautus);

});

server.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin: ${portti}`);

});