import axios from "axios";
import { useState } from "react";


export const Users_model = () => {

    const [users, setUsers] = useState([]);

    const names = [
        "Agus",
        "Budi",
        "Citra",
        "Dewi",
        "Eko",
        "Fitri",
        "Gita",
        "Hadi",
        "Indah",
        "Joko",
        "Kartika",
        "Lia",
        "Mega",
        "Nita",
        "Oscar",
        "Putri",
        "Rudi",
        "Sari",
        "Tono",
        "Ulfa",
        "Vina",
        "Wawan",
        "Yanti",
        "Zain"
    ];


    const response = {
        data: Array.from({ length: 100 }, () => ({
            id: Math.floor(Math.random() * 1000),
            name: `${names[Math.floor(Math.random() * names.length)]} ${names[Math.floor(Math.random() * names.length)]}`,
            role: Math.random() < 0.5 ? 'Operator' : 'Investor',
            username: Math.random().toString(36).substring(7),
            pass: Math.random().toString(36).substring(7),
            status: Math.random() < 0.5 ? '<span class="badge badge-success rounded-pill">Active</span>' : '<span class="badge badge-fail rounded-pill">Non Active</span>',
        }))
    }


    const get_all = async () => {
        // const response = await axios.get(`${process.env.REACT_APP_API_URL}/dashboard`);


        setUsers(response.data);
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