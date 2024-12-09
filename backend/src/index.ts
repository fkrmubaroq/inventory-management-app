import web from "@/config/web";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
web.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
