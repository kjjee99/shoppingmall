import { Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      type: new Schema(
        {
          postalCode: String,
          address1: String,
          address2: String,
        },
        { _id: false }
      ),
      required: true,
    },
    products: [
      {
        productId: {
          type: String,
          required: true,
        },
        productName: {
          type: String,
          require: true,
        },
        productCount: {
          type: Number,
          required: true,
        },
      },
      { required: true },
    ],
    status: {
      type: String,
      required: false,
      default: "Information Received",
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "orders",
    timestamps: true,
  }
);

export { OrderSchema };
