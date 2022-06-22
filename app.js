//ProgettoNuovo
const express = require ('express'),
    bodyParser = require('body-parser'),
    dotenv = require('dotenv'),
    cors = require('cors'),
    mongoose = require ('mongoose');
    

const router = require('./routers/index');
dotenv.config();
const app = express();


app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(bodyParser.json());

app.use(router);
app.use('/', (req,res)=> res.status(404).json({error : "Risorsa non trovata"}));


mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log("Connessione al DB effettuata");
        app.listen(process.env.PORT || 3000, () => console.log("Applicazione in ascolto"));
    });

//suca





    