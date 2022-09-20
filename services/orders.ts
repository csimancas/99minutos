import axios from "axios";
import { CatchCommonHandler } from "../helpers/exception";
import { orderClient, encodedData } from "./constants";

export const createOrder = async (data: any) => {
  try {
    await orderClient({
      url: "/orders/create",
      method: "POST",
      data: data,
      headers: { Authorization: `Basic ${encodedData}` },
    }).then((res) => {
      console.log(res);
    });
  } catch (error: any) {
    CatchCommonHandler(error);
  }
};

export const getOrders = async (orderId: any) => {
  try {
    const response = await axios({
      url: `/orders/${orderId}`,
      method: "GET",
    });
    return response.data;
  } catch (error) {
    CatchCommonHandler(error);
  }
};

export const cancelOrder = async (orderId: any) => {
  try {
    await orderClient({
      url: `/orders/${{ orderId }}/cancelado`,
      method: "PUT",
    });
  } catch (error) {
    CatchCommonHandler(error);
  }
};
