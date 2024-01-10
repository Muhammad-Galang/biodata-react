import React from 'react';
import '../assets/css/Body-style.css';

function Body () {
	return (
	<div class="card-content">
		<div class="page-content-01">
			<h2>Informasi Pribadi</h2>
			<table>
				<tr>
					<th>Nama Lengkap 	 </th>
					<td> : Muhammad Galang</td>
				</tr>
				<tr>
					<th>Tempat dan Tanggal Lahir </th>
					<td> : Jember, 17 Agustus 2000</td>
				</tr>
				<tr>
					<th>Alamat</th>
					<td>: Krajan,Manggisan</td>
				</tr>
				<tr>
					<th>No. Telepon </th>
					<td>: +62 897 7248 3712</td>
				</tr>
				<tr>
					<th>Email</th>
					<td>: M_galang@gmail.com</td>
				</tr>
			</table>
		</div>

		<div class="page-content-02">
			<h2>Pendidikan</h2>
			<table>
				<tr>
					<th>Pendidikan Terakhir</th>
					<td>: SMKN 06 TANGGUL JEMBER</td>
				</tr>
				<tr>
					<th>Jurusan</th>
					<td>: Rekayasa Perangkat Lunak</td>
				</tr>
			</table>
		</div>

		<div class="page-content-03">
			<h2>Keterampilan dan Minat</h2>
			<table>
				<tr>
					<th>Keterampilan atau Keahlian</th>
					<td>: Bahasa Inggris, JavaScript, React.js, HTML, CSS, Python</td>
				</tr>
				<tr>
					<th>Hobi atau Minat</th>
					<td>: Membaca buku,mendegarkan musik, olahraga, berenang</td>
				</tr>
			</table>
		</div>
	</div>

	);
}

export default Body;