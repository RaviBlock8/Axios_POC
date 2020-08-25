import axios from "axios";

export const sellLimitOrderReq = axios.create({
  baseURL: "http://localhost:3000/selllimitorder",
  method: "post",
});

sellLimitOrderReq.interceptors.request.use(
  (req) => {
    console.log(`req object:${JSON.stringify(req)}`);
    console.log("request intercepted");
    if (req.method !== "post") {
      throw new Error("Request should be of post type");
    }
    if (req.data.price === undefined) {
      throw new Error("Price of shares are not mentioned in request body");
    }
    if (req.data.volume === undefined) {
      throw new Error("Amount of shares are not mentioned in request body");
    }
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const buyMarketOrderReq = axios.create({
  baseURL: "http://localhost:3000/buy-market-order",
  method: "post",
});

buyMarketOrderReq.interceptors.request.use((req) => {
  if (req.method !== "post") {
    throw new Error("Request should be of post type");
  }
  if (req.data.buyPrice === undefined) {
    throw new Error("Price of shares are not mentioned in request body");
  }
  return req;
});

buyMarketOrderReq.interceptors.response.use(
  (res) => res,
  (err) => {
    let fallBackValue = {
      mId: "Order not placed so no ID",
      price: 0,
      volume: 0,
    };
    return Promise.reject(fallBackValue);
  }
);
