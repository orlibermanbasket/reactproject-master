import { useFormik } from "formik";
import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup"
import BuisnessCard from "../interfaces/BuisnessCard";
import { getCardById, newCard, updateCard } from "../services/CardServices";
import MyCards from "./MyCards";

interface UpdateCardProps {
    onHide: Function
    cardId: string
    refresh: Function
}

const UpdateCard: FunctionComponent<UpdateCardProps> = ({ onHide, cardId, refresh }) => {
    let navigate = useNavigate();
    let [cardData, setCardData] = useState<BuisnessCard>({
        buisnessName: "",
        buisnessDescription: "",
        buisnessAdress: "",
        buisnessPhone: "",
        buisnessImage: "",
      });
      useEffect(() => {
        getCardById(cardId).then((res) => setCardData(res.data)).catch((err) => console.log(err)
        )
    }, []);
    
    
    let formik = useFormik({
        initialValues: { buisnessName: cardData.buisnessName, buisnessDescription: cardData.buisnessDescription, buisnessAdress: cardData.buisnessAdress, buisnessPhone: cardData.buisnessPhone, buisnessImage: cardData.buisnessImage },

        validationSchema: yup.object({
            buisnessName: yup.string().required().min(2),
            buisnessDescription: yup.string().required().min(5),
            buisnessAdress: yup.string().required().min(8),
            buisnessPhone: yup.string().required().min(9).max(10),
            buisnessImage: yup.string().required(),
        }),
        
        onSubmit: (values: BuisnessCard) => {
            console.log(cardData);
            
            updateCard(cardId, values)
                .then((res) => {

                    onHide()
                    refresh()
                })
                .catch((err) => console.log(err));
        },
    });
    return <>
        <div className="container  mt-3 text-center"  >


            <form onSubmit={formik.handleSubmit} >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Buisness Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="buisnessName"
                        placeholder="Buisness Name"
                        value={formik.values.buisnessName}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.buisnessName && formik.errors.buisnessName && (
                        <p className="text-danger">{formik.errors.buisnessName}</p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Buisness Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Buisness Description"
                        name="buisnessDescription"
                        value={formik.values.buisnessDescription}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.buisnessDescription && formik.errors.buisnessDescription && (
                        <p className="text-danger">{formik.errors.buisnessDescription}</p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Buisness Adress</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="buisnessAdress"
                        placeholder="Buisness Adress"
                        value={formik.values.buisnessAdress}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Buisness Phone</label>
                    <input
                        type="number"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="buisnessPhone"
                        placeholder="Buisness Phone"
                        value={formik.values.buisnessPhone}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Buisness Image</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="buisnessImage"
                        placeholder="Buisness Image"
                        value={formik.values.buisnessImage}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    />
                </div>
                {/* {formik.touched.buisnessImage && formik.errors.buisnessImage && (
                            <p className="text-danger">{formik.errors.buisnessImage}</p>
                        )} */}
                <button
                    type="submit"
                    className="btn btn-dark w-100 my-3 text-success"
                    disabled={!formik.isValid || !formik.dirty}
                >
                    Update Card <i className="fa-solid fa-calendar-plus"></i>
                </button>
            </form>
        </div>


    </>
}

export default UpdateCard;