/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";


export const Cost_model = () => {

    const [users, setUsers] = useState([]);

    const data = [
        {
            no: "1",
            fee: "Modal Awal",
            date: '2011/07/25',
            amount: 'Rp. 86,000',
            status: '<span class="badge badge-success rounded-pill">Active</span>',
        },
        {
            no: "2",
            fee: "Biaya Pakan",
            date: '2009/01/12',
            amount: 'Rp. 170,750',
            status: '<span class="badge badge-fail rounded-pill">Not Active</span>',
        }
    ]


    const get_all = async () => {
        // const response = await axios.get(`${process.env.REACT_APP_API_URL}/dashboard`);
        setUsers(data);
    }


    const create = async (data) => {
        // return await axios.post(`${process.env.REACT_APP_API_URL}/dashboard`, data);
    }

    const read = async (id) => {
        // return await axios.get(`${process.env.REACT_APP_API_URL}/dashboard/${id}`);
    }

    const update = async (id, data) => {
        // return await axios.put(`${process.env.REACT_APP_API_URL}/dashboard/${id}`, data);
    }

    const remove = async (id) => {
        // return await axios.delete(`${process.env.REACT_APP_API_URL}/dashboard/${id}`);
    }

    return {
        users,
        get_all,
        create,
        read,
        update,
        remove
    }

}