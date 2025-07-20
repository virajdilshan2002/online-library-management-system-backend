import app from "./app"
import dotenv from "dotenv"
import DBConnection from "./db/DBConnection";

dotenv.config() // Load the environment variables from the env file

//  1. Access the port
const port = process.env.PORT || 3000;
console.log(process.env.PORT);

// 2. Start the server
DBConnection().then(result => console.log(result))

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
