const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HT5jVDihhdmGeEPFxvD5tU9OMDov0GyjTvud18QG342XmLVspOo318oHyn8P8bRNIr49ZHNZQU5yjDCYS4vkkga007rmM7azI')

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get('/',(request,response)=>response.status(200).send('Hello World'));

app.post('/payments/create', async(request,response)=>{
    const total = request.query.total;
    console.log("Payement Request Recieved for this amount",total);
    const payementIntent = await stripe.paymentIntents.create({
        amount:total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: payementIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app)