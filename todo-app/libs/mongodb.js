import mongoose from "mongoose";
const url = 'mongodb+srv://aadish:aadishjain@cluster0.chshrvt.mongodb.net/?retryWrites=true&w=majority'
mongoose.set("strictQuery", false);
const connection = async () => {
  await mongoose
    .connect(url)
    .then(function (result) {
    })
    .catch((err) => {
      console.log(err);
    });
};
export default connection;
