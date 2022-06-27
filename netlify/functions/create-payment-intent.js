require("dotenv").config(); //require - older version of import

const stripe = require("stripe")(
  "sk_test_51LFCJVFBJ4qgjv4Q2oPExOEahU0QPPwGbi9JsE8wgvOtkCwKMVS0y2ZeFsreOfMEmTxNHoRSgZtfQhaqDsIeqflL00pbLFOJkv"
);

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
