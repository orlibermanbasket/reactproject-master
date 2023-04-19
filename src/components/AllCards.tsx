import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BuisnessCard from "../interfaces/BuisnessCard";
import { getAllCards } from "../services/CardServices";
import CardComponent from "./CardComponent";
import DeleteModalCard from "./DeleteModalCard";
import DeleteModalProduct from "./DeleteModalCard";
import NavBar from "./NavBar";
import UpdateModalCard from "./UpdateModalCard";

interface AllCardsProps {
    cardsChange: boolean
    setCardsChange: Function
    refresh: Function
    isBuisness: boolean


}

const AllCards: FunctionComponent<AllCardsProps> = ({ cardsChange, setCardsChange, refresh, isBuisness }) => {
    let navigate = useNavigate()
    let [cards, setCards] = useState<BuisnessCard[]>([])
    let [cardId, setCardId] = useState<string>("")
    let [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
    let [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
    let [cardRemove, setCardRemove] = useState<boolean>(false);


    useEffect(() => {
        getAllCards().then((res) => setCards(res.data))
    }, [cardsChange, cardRemove]);
    // let cards: BuisnessCard[] = []
    return <>
        <div className="container">
            <div className="row ">
                {cards.length ? (cards.map((card, idx) => (

                    <CardComponent key={idx} card={card} setCardId={setCardId} setOpenDeleteModal={setOpenDeleteModal} setOpenUpdateModal={setOpenUpdateModal} cardsChange={cardsChange} setCardsChange={setCardsChange} refresh={refresh} isBuisness={false} setCardRemove={setCardRemove} cardRemove={cardRemove}  />

                ))) :
                    (<p>  there is not card </p>)}
            </div>
        </div>


        <DeleteModalCard show={openDeleteModal} onHide={() => setOpenDeleteModal(false)} cardId={cardId} refresh={refresh} cardRemove={cardRemove} setCardRemove={setCardRemove}  ></DeleteModalCard>

        <UpdateModalCard onHide={() => (setOpenUpdateModal(false))} show={openUpdateModal} cardId={cardId} refresh={refresh}></UpdateModalCard>
    </>
}

export default AllCards;