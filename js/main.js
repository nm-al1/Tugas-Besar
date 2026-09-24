const dataMahasiswa= []

const form = document.getElementById("form-mahasiswa");
const tableBody = document.getElementById("tabel-body");
const badgeTotal = document.getElementById("badge-total");

form.addEventListener("submit", function (e){
    e.preventDefault();



const nama = document.getElementById("nama").value.trim();
  const nim = document.getElementById("nim").value.trim();
  const prodi = document.getElementById("prodi").value;
  const tugas = parseFloat(document.getElementById("nilai-tugas").value);
  const uts = parseFloat(document.getElementById("nilai-uts").value);
  const uas = parseFloat(document.getElementById("nilai-uas").value);

const nilaiAkhir = (tugas * 0.3) + (uts * 0.3) + (uas * 0.4);

let grade ="";

if (nilaiAkhir >= 85 && nilaiAkhir <= 100){
    grade ="A"
} else if(nilaiAkhir >= 75 && nilaiAkhir < 85){
    grade ="B"
} else if(nilaiAkhir >= 65 && nilaiAkhir < 75){
    grade ="C"
} else if (nilaiAkhir >= 50 && nilaiAkhir < 65){
    grade ="D"
} else if(nilaiAkhir >=0 && nilaiAkhir < 50){
    grade ="E"
}

const status = nilaiAkhir >= 65 ? "LULUS" : "TIDAK LULUS";

dataMahasiswa.push({
    nim,
    nama,
    prodi,
    tugas,
    uts,
    uas,
    nilaiAkhir: nilaiAkhir.toFixed(2),
    grade,
    status
});

    renderTabel();
    form.reset();
});

function renderTabel(){
    badgeTotal.textContent = `Total: ${dataMahasiswa.length} Mahasiswa`;

    tableBody.innerHTML= "";

    dataMahasiswa.forEach((mhs) =>{
        const badgeClass = mhs.status === "LULUS" ? "badge-lulus" : "badge-gagal"

       const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${mhs.nim}</strong></td>
      <td>${mhs.nama}</td>
      <td>${mhs.prodi}</td>
      <td>${mhs.tugas}</td>
      <td>${mhs.uts}</td>
      <td>${mhs.uas}</td>
      <td><strong>${mhs.nilaiAkhir}</strong></td>
      <td><strong>${mhs.grade}</strong></td>
      <td><span class="${badgeClass}">${mhs.status}</span></td>
    `;
    tableBody.appendChild(tr);
    });
}



