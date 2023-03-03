import { readFileSync } from "fs";
import { handleNumberOfLogin } from "./handleLogin.js";
const fileUrl = new URL("./mockLoginData.json", import.meta.url);
const mockLoginData = JSON.parse(readFileSync(fileUrl).toString());

handleNumberOfLogin(mockLoginData);
