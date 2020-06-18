import { IRegister } from "../model/resgister.model";
import { ISubAccounts } from "../model/user.model";

const BASE_URL = "http://server.nhaviettech.vn/api/";
const SERVER_GATEWAY_URL = `${BASE_URL}ServerApiGateway/`;
const SERVER_SYS_URL = `${BASE_URL}SystemApi/`;

function loginSolar(SubAccounts: ISubAccounts): Promise<Response> {
  return fetch(`${BASE_URL}SolarApi/SolarHomeAsync`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(SubAccounts),
  });
}

function register(resgister: IRegister): Promise<Response> {
  return fetch(`${SERVER_SYS_URL}Register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resgister),
  });
}

function checkUserName(UserName: string): Promise<Response> {
  return fetch(`${SERVER_SYS_URL}CheckUserName`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ UserName }),
  });
}

function login(
  UserName: string,
  Password: string,
  BrowserClient: string,
  ClientLoginIp: string
): Promise<Response> {
  return fetch(`${SERVER_SYS_URL}login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      UserName,
      Password,
      BrowserClient,
      ClientLoginIp,
    }),
  });
}

function getInverter(PlantId: string, Token: string): Promise<Response> {
  return fetch(`${SERVER_GATEWAY_URL}GetInverter`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      PlantId: PlantId,
      Token: Token,
    }),
  });
}

function getPlantDetailTotal(SubAccounts: ISubAccounts): Promise<Response> {
  return fetch(`${SERVER_GATEWAY_URL}GetPlantDetailTotal`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(SubAccounts),
  });
}

function getPlantDetailMonth(SubAccounts: ISubAccounts): Promise<Response> {
  return fetch(`${SERVER_GATEWAY_URL}GetPlantDetailMonth`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(SubAccounts),
  });
}

function getPlantDetailDay(SubAccounts: ISubAccounts): Promise<Response> {
  return fetch(`${SERVER_GATEWAY_URL}GetPlantDetailDay`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(SubAccounts),
  });
}

function getNews(): Promise<Response> {
  return fetch(`http://nhaviettech.vn/api-news/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

function getNewsDetails(id: number): Promise<Response> {
  return fetch(`http://nhaviettech.vn/api-news-one/?id=${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export {
  login,
  register,
  checkUserName,
  loginSolar,
  getInverter,
  getPlantDetailTotal,
  getPlantDetailMonth,
  getPlantDetailDay,
  getNews,
  getNewsDetails,
};
