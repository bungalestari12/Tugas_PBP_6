
const express = require('express');
const app = express();

const waktuServer = new Date().toLocaleString('id-ID', {
    dateStyle: 'full',
    timeStyle: 'medium'
});

const anggota = [
    {
        nama: "Bunga Lestari",
        kelas: "TI25E",
        nim: "20250040064"
    },
    {
        nama: "Moch. Parhan",
        kelas: "TI25E",
        nim: "202500200119"
    },
    {
        nama: "Ucup",
        kelas: "TI25E",
        nim: "20250020111"
    },
    {
        nama: "Ujang",
        kelas: "TI25E",
        nim: "20250020222"
    }
];

app.get('/', (req, res) => {
    res.send('Selamat datang di Server kelompok Bunga');
});

app.get('/info', (req, res) => {
    res.send(`Server berjalan pada ${waktuServer}`);
});

app.get('/anggota', (req, res) => {
    let hasil = '<h1>Daftar Anggota Kelompok Bunga</h1>';

    anggota.forEach((data) => {
        hasil += `
            <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;">
                <p>Nama: ${data.nama}</p>
                <p>Kelas: ${data.kelas}</p>
                <p>NIM: ${data.nim}</p>
            </div>
        `;
    });

    res.send(hasil);
});

app.listen(8000, () => {
    console.log('Server berjalan di http://localhost:8000');
});
