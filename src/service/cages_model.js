import axios from "axios";
import { useState } from "react";


export const Cages_model = () => {

    const [users, setUsers] = useState([]);

    const names = [
        'Kelinci Rex',
        'Angsa Ternak',
        'Kuda Arab',
        'Babi Yorkshire',
        'Entok Bali',
        'Itik Runner',
        'Kalkun Belanda',
        'Ayam Brahma',
        'Sapi Brahman',
        'Kambing Alpine',
        'Bebek Khaki Campbell',
        'Domba Merino',
        'Kuda Lipizzan',
        'Angsa Embden',
        'Kelinci New Zealand',
        'Kambing Boer Cross',
        'Sapi Angus',
        'Ayam Cemani',
        'Babi Duroc',
        'Kalkun Broad Breasted White',
        'Kelinci Anggora',
        'Kuda Clydesdale',
        'Domba Dorper',
        'Bebek Peking Lokal',
        'Ayam Maran',
        'Entok Magelang',
        'Angsa Pilgrim',
        'Sapi Hereford',
        'Babi Hampshire',
        'Kuda Mustang',
        'Kalkun Narragansett',
        'Kelinci Lionhead',
        'Kambing Saanen',
        'Bebek Cherry Valley',
        'Ayam Sussex',
        'Entok Alabio',
        'Angsa Sebastopol',
        'Sapi Simmental',
        'Domba Romney',
        'Kuda Quarter',
        'Kelinci Holland Lop',
        'Bebek Rouen',
        'Ayam Wyandotte',
        'Kalkun Bourbon Red',
        'Kambing LaMancha'
    ];


    const response = {
        data: Array.from({ length: 100 }, () => ({
            id: Math.floor(Math.random() * 1000),
            name: names[Math.floor(Math.random() * names.length)],
            block: 'Block ' + String.fromCharCode(65 + Math.floor(Math.random() * 26)),
            area: Math.floor(Math.random() * 401) + 100,
            volume: Math.floor(Math.random() * 701) + 100
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