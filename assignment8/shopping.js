window.onload = pageLoad;



function pageLoad() {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "cloth.json", true);

    xhr.onload = function () {

        if (xhr.status === 200) {

            let data = JSON.parse(xhr.responseText);

            showData(data);

        } else {

            console.error("Error loading json file");

        }

    };

    xhr.send();

}



function showData(data) {

    let layer = document.getElementById("layer");

    layer.innerHTML = "";



    for (let key in data) {

        let item = data[key];



        let box = document.createElement("div");



        let img = document.createElement("img");

        img.src = item.img;

        img.style.width = "100%";

        img.style.height = "250px";



        let brand = document.createElement("h3");

        brand.textContent = item.brand;



        let price = document.createElement("p");

        price.textContent = "ราคา: " + item.price + " บาท";



        box.appendChild(img);

        box.appendChild(brand);

        box.appendChild(price);

        layer.appendChild(box);

    }

}