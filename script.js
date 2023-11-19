// splash
// let intro = document.querySelector('#intro');
// let logo = document.querySelector('#logo-header');
// let logoSpan = document.querySelector('#logo');

// window.addEventListener("DOMContentLoaded", () => {

//   setTimeout(()=>{
//     intro.fadeOut("slow");
//   },2300)

// })

// Keranjang

const keranjang = document.querySelector('#keranjang');
const navMenu = document.querySelector('#nav-menu');

keranjang.addEventListener('click', function () {
  navMenu.classList.toggle('hidden');
});


// CRUD

const dataList = [];

function addList() {
  let type = document.getElementById("jenisKain").value;
  let weight = document.getElementById("beratLaundry").value;

  dataList.push(setData(type, weight));

  showup();
}

function doEdit(id) {
  var newBerat = prompt("Masukkan Berat yang Benar", dataList[id].berat);

  dataList[id] = setData(dataList[id].type, newBerat || dataList[id].berat);

  showup();
}

function doDelete(id) {
  dataList.splice(id, 1);
  showup();
}

function showup() {
  const list = document.getElementById("list");
  const totalFinal = document.getElementById("total_final");

  list.innerHTML = "";

  dataList.map((record, i) => {
    let actEdit = `<a class="font-semibold" href="#" onclick="doEdit(${i})">Edit</a>`;
    let actDelete = `<a class="font-semibold" href="#" onclick="doDelete(${i})">Delete</a>`;

    list.innerHTML += `<li class="h-6 m-2 pl-2 rounded-xl border-solid border-red-600 border-2">[ ${actEdit} | ${actDelete} ] ${record.type} ( ${record.weight}<sub>kg</sub> ) Rp.${record.total} </li>`;
  });

  totalFinal.innerHTML = dataList.reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);
}

function setData(type, weight) {
  let total = 0;

  if (type == "Pakaian") {
    total = weight * 20000;
  }

  if (type == "Selimut") {
    total = weight * 40000;
  }

  if (type == "Karpet") {
    total = weight * 50000;
  }

  return {
    type: type,
    weight: weight,
    total: total,
  };
}

function cart() {

  let keranjangEx = document.getElementById("keranjangEx");

  if (dataList.length > 0) {
    keranjangEx.src = "media/keranjangNot.png";
  } else {
    keranjangEx.src = "media/keranjang.png";
  }

}