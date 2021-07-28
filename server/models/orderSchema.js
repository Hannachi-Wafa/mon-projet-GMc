const Order = mongoose.model(
    "order",
    new mongoose.Schema(
      {
        _id: {
          type: String,
          default: shortid.generate,
        },
        email: String,
        nom: String,
        prénom: String,
        adress: String,

        total: Number,
        cartItems: [
          {
            _id: String,
            title: String,
            price: Number,
            qty: Number,

          },
        ],
      },
      {
        timestamps: true,
      }
    )
  );
  