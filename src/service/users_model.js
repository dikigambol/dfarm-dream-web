/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";


export const Users_model = () => {

    const [users, setUsers] = useState([]);

    const names = [
        "Agus",
        "Budi",
        "Citra",
        "Dewi",
        "Eko"
    ];

    const data = [
        {
            no: "1",
            name: "dendik",
            role: "Operator",
            username: "dendik",
            pass: "ygmeg",
            status: '<span class="badge badge-fail rounded-pill">Non Active</span>',
        },
        {
            no: "2",
            name: "ridho",
            role: "Investor",
            username: "ridho",
            pass: "ygmeg",
            status: '<span class="badge badge-success rounded-pill">Active</span>',
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