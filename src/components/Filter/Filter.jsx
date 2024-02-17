import React from "react"
import { getFilterValue } from "../../redux/contactsSlice"
import css from './flt.module.css'
import { useDispatch } from "react-redux";

export const Filter = () => {

    const dispatch = useDispatch();
    const searchName = (e) => dispatch(getFilterValue(e.currentTarget.value));

    return (<div className={css.flt}><h3>Find Contact</h3> <label>
        <input type="text" onChange={searchName}
        /> </label></div>);
}
