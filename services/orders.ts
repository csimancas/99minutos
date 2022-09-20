import axios from "axios";
import { CatchCommonHandler } from "../helpers/exception";
import { token } from "./token";
import { url } from "./token";

export const createOrder = async (data: any) => {
  const encodedData = `Basic ${Buffer.from(
    `${token.email}:${token.password}`,
    "utf8"
  ).toString("base64")}`;
  console.log(encodedData);
  try {
    const response = await axios({
      url: url.create,
      method: "POST",
      data: data,
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: encodedData,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    CatchCommonHandler(error);
  }
};

export const getCheckInCollector = async (
  collectorId: string,
  maxDate: Date
) => {
  try {
    const response = await axios({
      url: `/api/checkin/get-checkin`,
      method: "POST",
      data: { collectorId, maxDate },
    });
    return response.data;
  } catch (error: any) {
    CatchCommonHandler(error);
  }
};

export const getOrders = async (orderId: any) => {
  try {
    const response = await axios({
      url: "https://prueba-tecninca-backend-qndxoltwga-uc.a.run.app/orders/",
      method: "GET",
      params: orderId,
    });
    return response.data;
  } catch (error) {
    CatchCommonHandler(error);
  }
};

// PENDIENTE
// export const cancelOrder = async (orderId: any) => {
//   try {
//     const response = await axios({
//       url: "https://prueba-tecninca-backend-qndxoltwga-uc.a.run.app/orders/",
//       method: "PUT",
//       params: orderId,
//     });
//     return response.data;
//   } catch (error) {
//     CatchCommonHandler(error);
//   }
// };
