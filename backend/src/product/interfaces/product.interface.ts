import { Document } from "mongoose";

export interface Product extends Document {
  readonly IdProduct: String;
  readonly NameProduct: String;
  readonly Category: String;
  readonly Description: String;
  readonly ProductQuantity: Number;
  readonly Status: Boolean;
  readonly TimeStamp: Date;
}
