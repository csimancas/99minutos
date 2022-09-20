import axios from "axios";

export const token = {
  email: "jose.cuetos31@gmail.com",
  password: "123456",
};
export const BASE_URL =
  "https://prueba-tecninca-backend-qndxoltwga-uc.a.run.app";

export const orderClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
  }
})

const data = `${token.email}:${token.password}`;
export const encodedData = Buffer.from(data).toString("base64");


