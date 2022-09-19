import axios from "axios";
import { CatchCommonHandler } from "../helpers/exception";

export const createOrder = async (params: any) => {
  try {
    const response = await axios({
      url: "https://prueba-tecninca-backend-qndxoltwga-uc.a.run.app/orders/create",
      method: "POST",
      params: params,
    });
    return response.data;
  } catch (error) {
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
