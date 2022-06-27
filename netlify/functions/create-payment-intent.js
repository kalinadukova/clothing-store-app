require("dotenv").config(); //require - older version of import

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  console.log(JSON.parse(event.body));
  const { amount } = JSON.parse(event.body);
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });
    console.log("hello");
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
