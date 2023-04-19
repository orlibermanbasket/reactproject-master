import axios from "axios";
import BuisnessCard from "../interfaces/BuisnessCard";
const api: string = process.env.REACT_APP_API + "/cards" || "";

export function newCard(newCard: BuisnessCard) {
    return axios.post(api, newCard, {
      headers: {
        Authorization: JSON.parse(sessionStorage.getItem("userData") as string)
          .token,
      },
    });
  }
export function getAllCards() {
    return axios.get(api, {
      headers: {
        Authorization: JSON.parse(sessionStorage.getItem("userData") as string)
          .token,
      },
    });
  }
export function deleteCard(id: string) {
    return axios.delete(`${api}/${id}`, {
        headers: {
          Authorization: JSON.parse(sessionStorage.getItem("userData") as string)
            .token,
        },
      });
    }
export function updateCard(cardId: string, cardToEdit: BuisnessCard) {
    return axios.put(`${api}/cards/${cardId}`, cardToEdit, {
        headers: {
          Authorization: JSON.parse(sessionStorage.getItem("userData") as string)
            .token,
        },
      });
    }
export function getCardById(id: string) {
    return axios.get(`${api}/${id}`, {
      headers: {
        Authorization: JSON.parse(sessionStorage.getItem("userData") as string)
          .token,
      },
    });
  }
  export function getMyCards(userId: string) {
    return axios.get(`${api}/${userId}`, {
      headers: {
        Authorization: JSON.parse(sessionStorage.getItem("userData") as string)
          .token,
      },
    });
  }