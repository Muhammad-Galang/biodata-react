import React from 'react';
import '../assets/css/FeaturesStyle.css';

function Features() {
  return (
    <div className="feature-container">
      <div className="features-section">
        <div className="feature">
          <h3>Nama Lengkap</h3>
          <p>Muhammad Galang</p>
        </div>
        <div className="feature">
          <h3>Tanggal Lahir</h3>
          <p>10 Februari 1990</p>
        </div>
        <div className="feature">
          <h3>Pendidikan</h3>
          <p>Sarjana Teknik Informatika</p>
        </div>
        <div className="font-siz">
          <p>
            Hidup sebagai siswa SMK adalah perjalanan penuh warna di dunia pendidikan teknis dan kejuruan. Setiap hari, kami belajar tidak hanya dari buku teks, tetapi juga melalui pengalaman praktis yang membentuk keterampilan dan karakter kami. Di tengah kelas dan workshop, kami menemukan semangat kebersamaan dan kerja tim yang membantu mengatasi setiap tantangan. Meskipun tugas dan ujian kadang-kadang menantang, namun itulah yang membentuk kami menjadi individu yang tangguh dan siap menghadapi dunia kerja. Setiap proyek, setiap presentasi, adalah langkah menuju mimpi-mimpi kami. Hidup ini adalah perjalanan belajar tak terbatas, dan sebagai siswa SMK, kami bangga menjadi bagian dari perjalanan ini.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;