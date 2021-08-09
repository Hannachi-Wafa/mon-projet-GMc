const Order = mongoose.model(
    "order",
    new mongoose.Schema(
      {
        email: String,
        nom: String,
        prénom: String,
        adress: String,
        telephone:Number,

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
  