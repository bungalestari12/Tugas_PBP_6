
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
        nama: "Hary Akbar",
        kelas: "TI25E",
        nim: "20250040093"
    },
    {
        nama: "Indri Dwi Aprilia",
        kelas: "TI25E",
        nim: "20250040202"
    },
    {
        nama: "Muhamad Zidan Ramadhan",
        kelas: "TI25E",
        nim: "20250040144"
    }
    
];

app.get('/', (req, res) => {
    res.send('Selamat datang di Server kelompok 4 TI25E');
});

app.get('/info', (req, res) => {
    res.send(`Server berjalan pada ${waktuServer}`);
});

app.get('/anggota', (req, res) => {
    let hasil = '<h1>Daftar Anggota Kelompok Kelompok 4</h1>';

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
