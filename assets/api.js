const dev = process.env.NODE_ENV === "development";
const prod = process.env.NODE_ENV === "production";

export const devApi = "http://localhost:1337";
export const prodApi = "http://api.kollektiv-fortuna.ru";

export const API_URL = dev ? devApi : prod ? devApi : devApi;
