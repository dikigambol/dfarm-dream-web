import axios from "axios";
import { useState } from "react";


export const Dashboard_model = () => {

    const [dashboard, setDashboard] = useState([]);

    const response = {
        data: [
            {
                date: '2011/04/25',
                name: 'Tiger Nixon',
                office: '<span class="badge badge-success rounded-pill">Uang Masuk</span>',
                salary: 'Rp. 320,800',
                id: Math.floor(Math.random() * 1000),
            },
            {
                date: '2011/07/25',
                name: 'Garrett Winters',
                office: '<span class="badge badge-success rounded-pill">Uang Masuk</span>',
                salary: 'Rp. 170,750',
                id: Math.floor(Math.random() * 1000),
            },
            {
                date: '2009/01/12',
                name: 'Ashton Cox',
                office: '<span class="badge badge-fail rounded-pill">Uang Keluar</span>',
                salary: 'Rp. 86,000',
                id: Math.floor(Math.random() * 1000),
            },
            {
                date: '2012/03/29',
                name: 'Cedric Kelly',
                office: '<span class="badge badge-success rounded-pill">Uang Masuk</span>',
                salary: 'Rp. 433,060',
                id: Math.floor(Math.random() * 1000),
            },
            {
                date: '2008/11/28',
                name: 'Airi Satou',
                office: '<span class="badge badge-success rounded-pill">Uang Masuk</span>',
                salary: 'Rp. 162,700',
                id: Math.floor(Math.random() * 1000),
            },
            {
                date: '2012/12/02',
                name: 'Brielle Williamson',
                office: '<span class="badge badge-fail rounded-pill">Uang Keluar</span>',
                salary: 'Rp. 372,000',
                id: Math.floor(Math.random() * 1000),
            },
            {
                date: '2009/09/15',
                name: 'Herrod Chandler',
                office: '<span class="badge badge-success rounded-pill">Uang Masuk</span>',
                salary: 'Rp. 137,500',
                id: Math.floor(Math.random() * 1000),
            },
            {
                date: '2010/10/14',
                name: 'Rhona Davidson',
                office: '<span class="badge badge-success rounded-pill">Uang Masuk</span>',
                salary: 'Rp. 327,900',
                id: Math.floor(Math.random() * 1000),
            },
            {
                date: '2009/09/15',
                name: 'Colleen Hurst',
                office: '<span class="badge badge-fail rounded-pill">Uang Keluar</span>',
                salary: 'Rp. 205,500',
                id: Math.floor(Math.random() * 1000),
            },
            {
                date: '2008/12/13',
                name: 'Sonya Frost',
                office: '<span class="badge badge-success rounded-pill">Uang Masuk</span>',
                salary: 'Rp. 103,600',
                id: Math.floor(Math.random() * 1000),
            },
            {
                date: '2008/12/19',
                name: 'Jena Gaines',
                office: '<span class="badge badge-success rounded-pill">Uang Masuk</span>',
                salary: 'Rp. 90,560',
                id: Math.floor(Math.random() * 1000),
            },
            {
                date: '2013/03/03',
                name: 'Quinn Flynn',
                office: '<span class="badge badge-success rounded-pill">Uang Masuk</span>',
                salary: 'Rp. 342,000',
                id: Math.floor(Math.random() * 1000),
            },
            {
                date: '2008/10/16',
                name: 'Charde Marshall',
                office: '<span class="badge badge-fail rounded-pill">Uang Keluar</span>',
                salary: 'Rp. 470,600',
                id: Math.floor(Math.random() * 1000),
            },
            {
                date: '2012/12/18',
                name: 'Haley Kennedy',
                office: '<span class="badge badge-fail rounded-pill">Uang Keluar</span>',
                salary: 'Rp. 313,500',
                id: Math.floor(Math.random() * 1000),
            },
            {
                date: '2010/03/17',
                name: 'Tatyana Fitzpatrick',
                office: '<span class="badge badge-fail rounded-pill">Uang Keluar</span>',
                salary: 'Rp. 385,750',
                id: Math.floor(Math.random() * 1000),
            },
            {
                date: '2012/11/27',
                name: 'Michael Silva',
                office: '<span class="badge badge-success rounded-pill">Uang Masuk</span>',
                salary: 'Rp. 198,500',
                id: Math.floor(Math.random() * 1000),
            },
            {
                date: '2010/06/09',
                name: 'Paul Byrd',
                office: '<span class="badge badge-success rounded-pill">Uang Masuk</span>',
                salary: 'Rp. 725,000',
                id: Math.floor(Math.random() * 1000),
            },
            {
                date: '2009/04/10',
                name: 'Gloria Little',
                office: '<span class="badge badge-success rounded-pill">Uang Masuk</span>',
                salary: 'Rp. 237,500',
                id: Math.floor(Math.random() * 1000),
            },
            {
                date: '2012/10/13',
                name: 'Bradley Greer',
                office: '<span class="badge badge-success rounded-pill">Uang Masuk</span>',
                salary: 'Rp. 132,000',
                id: Math.floor(Math.random() * 1000),
            },
            {
                date: '2012/09/26',
                name: 'Dai Rios',
                office: '<span class="badge badge-fail rounded-pill">Uang Keluar</span>',
                salary: 'Rp. 217,500',
                id: Math.floor(Math.random() * 1000),
            },
            {
                date: '2011/09/03',
                name: 'Jenette Caldwell',
                office: '<span class="badge badge-fail rounded-pill">Uang Keluar</span>',
                salary: 'Rp. 345,000',
                id: Math.floor(Math.random() * 1000),
            },
            {
                date: '2009/06/25',
                name: 'Yuri Berry',
                office: '<span class="badge badge-success rounded-pill">Uang Masuk</span>',
                salary: 'Rp. 675,000',
                id: Math.floor(Math.random() * 1000),
            },
            {
                date: '2011/12/12',
                name: 'Caesar Vance',
                office: '<span class="badge badge-fail rounded-pill">Uang Keluar</span>',
                salary: 'Rp. 106,450',
                id: Math.floor(Math.random() * 1000),
            },
            {
                date: '2011/12/12',
                name: 'Doris Wilder',
                office: '<span class="badge badge-fail rounded-pill">Uang Keluar</span>',
                salary: 'Rp. 675,000',
                id: Math.floor(Math.random() * 1000),
            }
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