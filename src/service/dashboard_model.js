/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";


export const Dashboard_model = () => {

    const [dashboard, setDashboard] = useState([]);

    const response = {
        data: [
            {
                no: "1",
                date: '2011/04/25',
                name: 'Tiger Nixon',
                office: '<span class="badge badge-success rounded-pill">Uang Masuk</span>',
                salary: 'Rp. 320,800',
            },
            {
                no: "2",
                date: '2011/07/25',
                name: 'Garrett Winters',
                office: '<span class="badge badge-success rounded-pill">Uang Masuk</span>',
                salary: 'Rp. 170,750',
            },
            {
                no: "3",
                date: '2009/01/12',
                name: 'Ashton Cox',
                office: '<span class="badge badge-fail rounded-pill">Uang Keluar</span>',
                salary: 'Rp. 86,000',
            },
            {
                no: "4",
                date: '2012/03/29',
                name: 'Cedric Kelly',
                office: '<span class="badge badge-success rounded-pill">Uang Masuk</span>',
                salary: 'Rp. 433,060',
            },
            {
                no: "5",
                date: '2008/11/28',
                name: 'Airi Satou',
                office: '<span class="badge badge-success rounded-pill">Uang Masuk</span>',
                salary: 'Rp. 162,700',
            },
        ]
    }


    const get_all = async () => {
        // const response = await axios.get(`${process.env.REACT_APP_API_URL}/dashboard`);


        setDashboard(response.data);
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
        dashboard,
        get_all,
        create,
        read,
        update,
        remove
    }

}