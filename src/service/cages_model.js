/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";


export const Cages_model = () => {

    const [users, setUsers] = useState([]);

    const data = [
        {
            no: "1",
            name: "kandang buaya",
            block: "A12",
            area: 100,
            volume: 3
        },
        {
            no: "2",
            name: "kandang macan",
            block: "A13",
            area: 110,
            volume: 3
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