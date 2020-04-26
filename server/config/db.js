import mongoose from "mongoose";
const URI = "mongodb+srv://jazzo:Karama@123@testcluster1-ljrzi.mongodb.net/Healthier?retryWrites=true&w=majority";
class DbHelper {
  async connectDb() {
    try {
      await mongoose.connect(URI, {
             useNewUrlParser: true,
             useUnifiedTopology:true
      });
      console.log('DB connection established');
    }catch(e) {
      console.log(e);
      throw e;
    }
  }
}
export default new DbHelper;