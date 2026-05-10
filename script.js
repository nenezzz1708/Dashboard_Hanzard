/* ========================= */
/* script.js */
/* ========================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ========================= */
  /* DATA DEPARTMENT */
  /* ========================= */

  const dataDepartment = [

    {
      nama: "Corporate Safety",
      total: 40,
      mengisi: 38
    },

    {
      nama: "Sustainability",
      total: 35,
      mengisi: 30
    },

    {
      nama: "HC Administration",
      total: 32,
      mengisi: 28
    },

    {
      nama: "HC Strategic",
      total: 28,
      mengisi: 22
    },

    {
      nama: "Patria Center",
      total: 25,
      mengisi: 20
    }

  ];

  /* ========================= */
  /* PIE CHART */
  /* ========================= */

  new Chart(document.getElementById("pieChart"), {

    type: "doughnut",

    data: {

      labels: [
        "Sudah Mengisi",
        "Belum Mengisi"
      ],

      datasets: [{

        data: [36, 24],

        backgroundColor: [
          "#6bb6ff",
          "#cfd8e3"
        ],

        borderWidth: 2

      }]

    },

    options: {

      responsive: true,

      cutout: "65%",

      plugins: {

        legend: {
          position: "bottom"
        }

      }

    }

  });

  /* ========================= */
  /* TABLE DEPARTMENT */
  /* ========================= */

  const tableBody =
    document.getElementById("tableBody");

  dataDepartment.forEach((dept, index) => {

    const persen = (
      dept.mengisi / dept.total * 100
    ).toFixed(0);

    tableBody.innerHTML += `

      <tr>

        <td>${index + 1}</td>

        <td>${dept.nama}</td>

        <td>${dept.total}</td>

        <td>${dept.mengisi}</td>

        <td>${persen}%</td>

      </tr>

    `;

  });

  /* ========================= */
  /* BAR CHART */
  /* ========================= */

  new Chart(document.getElementById("barChart"), {

    type: "bar",

    data: {

      labels:
        dataDepartment.map(item => item.nama),

      datasets: [

        {
          label: "Sudah Mengisi",

          data:
            dataDepartment.map(item => item.mengisi),

          backgroundColor: "#6bb6ff",

          borderRadius: 12
        },

        {
          label: "Belum Mengisi",

          data:
            dataDepartment.map(
              item => item.total - item.mengisi
            ),

          backgroundColor: "#cfd8e3",

          borderRadius: 12
        }

      ]

    },

    options: {

      responsive: true,

      plugins: {

        legend: {
          position: "top"
        }

      }

    }

  });

  /* ========================= */
  /* PIE CHART DEPARTMENT */
  /* ========================= */

  new Chart(document.getElementById("departmentPie"), {

    type: "doughnut",

    data: {

      labels: [
        "Sudah Submit",
        "Belum Submit"
      ],

      datasets: [{

        data: [3, 4],

        backgroundColor: [
          "#6bb6ff",
          "#cfd8e3"
        ],

        borderWidth: 2,
        hoverOffset: 10

      }]

    },

    options: {

      responsive: true,

      cutout: "65%",

      plugins: {

        legend: {
          position: "bottom"
        }

      }

    }

  });

  /* ========================= */
  /* TOP SUBMIT PEKERJA */
  /* ========================= */

  const submitData = [

    {
      nama: "Nenes Salma",
      total: 5,
      status: "Aktif",
      tanggal: "07 Mei 2026"
    },

    {
      nama: "Mbak Resa",
      total: 4,
      status: "Aktif",
      tanggal: "06 Mei 2026"
    },

    {
      nama: "Mas Dika",
      total: 3,
      status: "Aktif",
      tanggal: "05 Mei 2026"
    },

    {
      nama: "Mas Ferdi",
      total: 2,
      status: "Kurang",
      tanggal: "04 Mei 2026"
    },

    {
      nama: "Mas Alvin",
      total: 1,
      status: "Kurang",
      tanggal: "-"
    }

  ];

  const submitTable =
    document.getElementById("submitTable");

  submitData.forEach((item, index) => {

    const badge =
      item.status === "Aktif"
        ? "success"
        : "danger";

    submitTable.innerHTML += `

      <tr>

        <td>${index + 1}</td>

        <td>${item.nama}</td>

        <td>${item.total}</td>

        <td>
          <span class="${badge}">
            ${item.status}
          </span>
        </td>

        <td>${item.tanggal}</td>

      </tr>

    `;

  });

  /* ========================= */
  /* SUBMIT CHART */
  /* ========================= */

  new Chart(document.getElementById("submitChart"), {

    type: "bar",

    data: {

      labels:
        submitData.map(item => item.nama),

      datasets: [{

        label: "Jumlah Submit",

        data:
          submitData.map(item => item.total),

        backgroundColor: [
          "#6bb6ff",
          "#7bc6ff",
          "#91d2ff",
          "#abdfff",
          "#c8ebff"
        ],

        borderRadius: 12,
        borderSkipped: false

      }]

    },

    options: {

      responsive: true,

      plugins: {

        legend: {
          display: false
        }

      },

      scales: {

        x: {
          grid: {
            display: false
          }
        },

        y: {
          beginAtZero: true
        }

      }

    }

  });

  new Chart(document.getElementById("yearTrendChart"), {

    type: "line",

    data: {

      labels: [
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus"
      ],

      datasets: [

        {
          label: "Corporate Safety",

          data: [12, 19, 15, 25, 30],

          borderColor: "#6bb6ff",

          backgroundColor: "rgba(107,182,255,0.15)",

          tension: 0.4,

          fill: true
        },

        {
          label: "Sustainability",

          data: [10, 15, 18, 20, 28],

          borderColor: "#8fd0ff",

          backgroundColor: "rgba(143,208,255,0.15)",

          tension: 0.4,

          fill: true
        },

        {
          label: "HC Administration",

          data: [8, 14, 16, 22, 27],

          borderColor: "#a8ddff",

          backgroundColor: "rgba(168,221,255,0.15)",

          tension: 0.4,

          fill: true
        },

        {
          label: "HC Strategic",

          data: [6, 12, 14, 19, 24],

          borderColor: "#bfdfff",

          backgroundColor: "rgba(191,223,255,0.15)",

          tension: 0.4,

          fill: true
        },

        {
          label: "Patria Center",

          data: [5, 10, 12, 18, 22],

          borderColor: "#cfd8e3",

          backgroundColor: "rgba(207,216,227,0.15)",

          tension: 0.4,

          fill: true
        }
      ]

    },

    options: {

      responsive: true,

      plugins: {

        legend: {
          position: "top"
        }

      },

      scales: {

        y: {
          beginAtZero: true
        }

      }

    }

  });

  /* ========================= */
  /* DATA PEKERJA */
  /* ========================= */

  const workerNames = [

    "Maman Supriyatna",
    "Aris Setiawan",
    "Krisnatianto Tanjung",
    "Joko Mardiono",
    "Mukhlisin",
    "Mudzakir",
    "Nugroho Dwi Cahyo",
    "Sentot",
    "Janu Wiyono",
    "Febi Giantika Ramdani",
    "Prasetiyo",
    "Yoga Fajar Asidiq",
    "Abdul Aziz",
    "Agung Dhesca Permana Putra",
    "Didih Munaeji",
    "Agus Widodo",
    "Febri Fani Rizawanto",
    "Ngadino",
    "Herwanto",
    "Bangun Soleh Saputra",
    "Nur Holik",
    "Yuniar Dwi Utomo",
    "Asnawi",
    "Imam Setyono",
    "Muhammad Sarifudin",
    "Yudha Yuniar Dinanta",
    "Nanang Sunaryo",
    "Khumaedi",
    "Santo",
    "Haryanto",
    "Mariyoto",
    "Andrian Kurniawan",
    "Aditya Lesmana",
    "Ahmad Mukhalit",
    "Hendri",
    "Arif Miftakhul Huda",
    "Iqbal Ikhfani Azis",
    "Mulyadi",
    "Oki Sutiawan",
    "Ramdhan Eko Prasetyo",
    "Dedi Gunawan",
    "Sunarjo",
    "Sukarna",
    "Wartoyo",
    "Budiman",
    "Aan Nurdianto",
    "Nurokhman",
    "Heru",
    "Bahtiar Anwar",
    "Edy Winarto",
    "Sriroji Khozani",
    "Ramadhani Luthfi Muktafi",
    "Deni Prasetyo",
    "Triswiyanto",
    "Agus Pebrianto",
    "Dwi Purwanto",
    "Agung Kristiawan Riyo Pambudi",
    "Tobroni",
    "Asep Purwanto",
    "Wahyono",
    "Dedi Antoni",
    "Hartono",
    "Arifin Yulianto",
    "Rasito",
    "Sunari",
    "Widiantoro",
    "Afit Wahyudi",
    "Mahfudh Qosim",
    "Suparto",
    "Tato Niti Erlianto",
    "Achmad Kamal Fikri",
    "Sugiyanto",
    "Sukma Gugun Gunawan",
    "Arif Rahman",
    "Atang Wildan",
    "Dika Juli Andri",
    "Mochamad Andrianto",
    "Amal Mustakim",
    "Dwi Afianto",
    "Agung Wieratno",
    "Hodi Irwan Handiki",
    "Didi Suwardi",
    "Saprudin",
    "Zaenal Arifin",
    "Irvan Septin Legista",
    "M Sholihqin",
    "Ali Masrur",
    "Roki Permana",
    "Dwi Supriyadi",
    "Roby Norman",
    "Irwan Feriyanto",
    "Wahyudi",
    "Leo Sugiarto",
    "Fajar Wahyu Djuliardi",
    "Mufid Syafii",
    "Najih Imtihani",
    "Sigit Wiharso",
    "Sarengat",
    "Trimo",
    "Darmawan",
    "Dendi Rusmiadi",
    "Beli Apri Yanto",
    "Jarot Widarso",
    "Nanda Meidona",
    "Aditya Pratama",
    "Kasmanto",
    "Muslim",
    "Arif Maulana",
    "Agus Setyo",
    "Hermanto",
    "Irfanudin",
    "Purwanto",
    "Umar Widodo",
    "Ade Dermawan",
    "Agus Adi Subarudin",
    "Defri Satria",
    "Idris Pratama",
    "Abdul Imam Latif",
    "Tursinah",
    "Yusuf Ismail",
    "Nur Hidayat",
    "Karno Tri Widodo",
    "Supriyadi",
    "Abdul Mahmud",
    "Bangkit Saputra",
    "Rudi Hartono",
    "Berlian Syah Putra",
    "Mochammad Muhfidin",
    "M Candra Zuliyanto",
    "Tri Sutrisna",
    "Rizki Pratama",
    "Yasodik",
    "Nanang Sukana",
    "Suratmo",
    "Pratono",
    "Didin Jamjudin",
    "Rochmadi",
    "Warokhim",
    "Noval Andika Bayo",
    "Andri Darmanto",
    "Andi Romiadi",
    "Juwarso",
    "Hendriansyah",
    "Slamet Haryono",
    "Dedik Irawan",
    "Oky Megakusuma",
    "Sarwoko",
    "Nurwakhidin",
    "Daryono",
    "Rohmad Tulloh Isa",
    "Fatkhul Arif",
    "Indra Surya Fatah",
    "Andrian Tri Anggoro",
    "Mustangin",
    "Satri Yuli Prayogo",
    "Angga Bima Saputra",
    "Andi Romiadi",
    "Priyo Sutanto",
    "Sukaryono",
    "Sriyanto",
    "Catur Supriyanto",
    "Rizki Ramadhan",
    "Iman",
    "Agung Maulana",
    "Arif Setia Nugraha",
    "Ade Priyanto",
    "Rosyid Sidiq",
    "Sugiarto",
    "Haris Fadillah",
    "Dedi Hari Nugroho",
    "Pudiantoro",
    "Ardima",
    "Yogie Pamungkas Djati",
    "Rendi Ekayadi",
    "Sulaeman",
    "Joko Purwanto",
    "Anggi Saputra Jaya",
    "Ruslan Maulana",
    "Iyan Firmansyah",
    "Ade Purnomo",
    "Ari Rudi",
    "Sriyanto",
    "Dedi Wawan Rianto",
    "Harianto",
    "Martono",
    "Mulyono",
    "Danu Tri Yudanto",
    "Dedi Kurniawan",
    "Febri Setiawan",
    "Ito Adiyanto",
    "Ahmad Farizal",
    "Kusno Guswanto",
    "Setyana Ian Pradibta",
    "Aby Maulana",
    "Moch. Kharis",
    "Yanuar Rendy Firdaus",
    "Mardian Hendrawan",
    "Ahmad Taufik Hidayat",
    "Didik Priyo Utomo",
    "Arif Purnomo",
    "Tri Harso",
    "Indra Gunawan",
    "Maldani",
    "Widhayat",
    "Seno Setiawan",
    "Nikola Arya Wiratama",
    "Mohammad Ridwan",
    "Nurul Ma’rufi"

  ];

  const workerTable =
    document.getElementById("workerTable");

  workerNames.forEach((nama, index) => {

    const randomSubmit =
      Math.floor(Math.random() * 10) + 1;

    workerTable.innerHTML += `

    <tr>

      <td>${index + 1}</td>

      <td>${nama}</td>

      <td>${randomSubmit}</td>

    </tr>

  `;

  });

  /* ========================= */
  /* SEARCH PEKERJA */
  /* ========================= */

  const searchWorker =
    document.getElementById("searchWorker");

  searchWorker.addEventListener("keyup", function () {

    const keyword =
      searchWorker.value.toLowerCase();

    const rows =
      document.querySelectorAll("#workerTable tr");

    rows.forEach(row => {

      const nama =
        row.children[1]
          .textContent
          .toLowerCase();

      if (nama.includes(keyword)) {

        row.style.display = "";

      } else {

        row.style.display = "none";

      }

    });

  });

});