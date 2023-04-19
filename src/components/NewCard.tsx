import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import BuisnessCard from "../interfaces/BuisnessCard";
import { newCard } from "../services/CardServices";
import { successMsg } from "../services/Feedbacks";

interface NewCardProps {
    cardsChange: boolean;
    setCardsChange: Function
}

const NewCard: FunctionComponent<NewCardProps> = ({ cardsChange, setCardsChange }) => {
    let navigate = useNavigate()
    let refresh = () => {
        setCardsChange(!cardsChange)
    }
    let formik = useFormik({
        initialValues: { buisnessName: "", buisnessDescription: "", buisnessAdress: "", buisnessPhone: "", buisnessImage: "" },
        validationSchema: yup.object({
            buisnessName: yup.string().required().min(2),
            buisnessDescription: yup.string().required().min(5),
            buisnessAdress: yup.string().required().min(3),
            buisnessPhone: yup.string().required().min(9).max(10),
            buisnessImage: yup.string().required(),
        }),
        onSubmit: (values: BuisnessCard) => {
            values.userId = JSON.parse(
                sessionStorage.getItem("userData") as string
            ).userId;

            newCard(values)
                .then((res) => {

                    navigate("/allCards");
                    refresh();
                    successMsg("New Card added successfully")
                    
                })
                .catch((err) => console.log(err));
        },
    });
    return <>
        <div className="container">
            <div className="row">
                <div className="col-8 ml-1">
                    <img src="https://helpx.adobe.com/content/dam/help/en/indesign/how-to/business-card-design/jcr_content/main-pars/image_1047841121/business-card-design-hero_900x506.jpg.img.jpg"></img>
                </div>
                <div className="col-4">
                    <form onSubmit={formik.handleSubmit} style={{ border: "aqua solid 0.5px" }}  >
                        <h1 style={{ textAlign: "center", fontFamily: "fantasy", color: "crimson" }}> Make your own card</h1>
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
                                placeholder="Buisness Phone"
                                name="buisnessPhone"
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
                            Create <i className="fa-solid fa-calendar-plus"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default NewCard;