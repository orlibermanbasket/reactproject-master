import { FunctionComponent, useEffect, useState } from "react";
import BuisnessCard from "../interfaces/BuisnessCard";
import { getUserProfile } from "../services/UserServices";

interface CardComponentProps {
    card: BuisnessCard
    cardsChange: boolean
    setCardsChange: Function
    refresh: Function
    setCardId: Function
    setOpenDeleteModal: Function
    setOpenUpdateModal: Function
    setCardRemove: Function
    cardRemove: boolean
    isBuisness: boolean
    
}


const CardComponent: FunctionComponent<CardComponentProps> = ({ card, refresh, setCardId, setOpenDeleteModal, setOpenUpdateModal, setCardRemove, cardRemove,isBuisness }) => {
    let [userId,setUserId] = useState <string>("")
    

    useEffect(()=>{
getUserProfile().then((res)=>setUserId(res.data._id)).catch((err)=>(err))
    })
   
    return <>
        <div className="card col-4" style={{ width: "18rem", margin: "20px" }}>
            <div className="card" style={{ width: "100%", height: "100%" }}>
                <img src={card.buisnessImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{card.buisnessName}</h5>
                    <p className="card-text">{card.buisnessDescription}</p>
                    <hr></hr>
                    <p className="card-text"> <i className="fa-solid fa-map-location-dot text-info"></i> {card.buisnessAdress}</p>
                    <p className="card-text"><i className="fa-solid fa-phone text-success"></i> {card.buisnessPhone}</p>
                   
                       
                            <button className="btn btn-danger  m-2"><i className="fa-solid fa-trash-can" onClick={() => {
                        setOpenDeleteModal(true);
                        setCardId(card._id as string)


                    }}></i></button>
                    <button className="btn btn-warning" ><i className="fa-solid fa-pen-to-square" onClick={() => {
                        setOpenUpdateModal(true);
                        setCardId(card._id as string);
                        refresh()
                    }} ></i></button>
                            
                    
                    
                    
                    
                </div>
            </div>
        </div>
    </>
}

export default CardComponent;