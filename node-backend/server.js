const express = require('express');
const { Client, Environment } = require('square');
const app = express();
app.use(express.json());

const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Sandbox,
});

const paymentsApi = client.paymentsApi;

app.post('/process-payment', async (req, res) => {
  const { nonce, amount } = req.body;

  try {
    const response = await paymentsApi.createPayment({
      sourceId: nonce,
      amountMoney: {
        amount: amount,
        currency: 'USD',
      },
      idempotencyKey: new Date().getTime().toString(),
    });

    res.status(200).json(response.result);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});