import axios from "axios";
import { useState } from "react";


export const Cost_model = () => {

    const [users, setUsers] = useState([]);

    const names = [
        'Makanan Ternak',
        'Obat - obatan',
        'Pemeliharaan Kandang',
        'Bibit Ternak',
        'Peralatan Peternakan',
        'Biaya Transportasi',
        'Konsultasi Veteriner',
        'Pembelian Pakan',
        'Pembayaran Listrik',
        'Biaya Air',
        'Biaya Tenaga Kerja',
        'Pemeliharaan Sarana',
        'Perawatan Hewan',
        'Biaya Pemotongan',
        'Pembelian Perlengkapan Kandang',
        'Asuransi Hewan',
        'Pembiayaan Kesehatan',
        'Biaya Vaksinasi',
        'Perawatan Kesehatan',
        'Pembelian Bahan Bangunan',
        'Pembelian Pupuk',
        'Biaya Pengiriman',
        'Pengeluaran Administrasi',
        'Biaya Perbaikan',
        'Pembayaran Sewa Lahan',
        'Biaya Penggajian',
        'Pemeliharaan Lingkungan',
        'Pembelian Bahan Bakar',
        'Biaya Pengangkutan',
        'Pemeliharaan Mesin',
        'Pembelian Bibit',
        'Biaya Pendistribusian',
        'Biaya Logistik',
        'Pemeliharaan Jaringan',
        'Pembelian Alat Pertanian',
        'Biaya Penyuluhan',
        'Pemeliharaan Perangkat',
        'Pembelian Peralatan',
        'Biaya Pengolahan',
        'Pemeliharaan Fasilitas',
        'Pembelian Benih',
        'Biaya Penyimpanan',
        'Pemeliharaan Sistem',
        'Pembelian Inseminasi Buatan',
        'Biaya Perbaikan Lahan',
        'Pembayaran Kontrak',
        'Biaya Pemantauan',
        'Pemeliharaan Infrastruktur',
        'Pembelian Produk Kesehatan',
        'Biaya Pelatihan'
    ];


    const response = {
        data: Array.from({ length: 100 }, () => ({
            id: Math.floor(Math.random() * 1000),
            fee: names[Math.floor(Math.random() * names.length)],
            status: Math.random() > 0.5 ? '<span class="badge badge-success rounded-pill">Active</span>' : '<span class="badge badge-fail rounded-pill">Not Active</span>',
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