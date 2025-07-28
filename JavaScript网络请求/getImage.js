// https://c-ssl.duitang.com/uploads/blog/202103/11/20210311004422_0e5ac.jpg

import fetch from "node-fetch";

async function getImage() {
  let response = await fetch(
    "https://c-ssl.duitang.com/uploads/blog/202103/11/20210311004422_0e5ac.jpg"
  );
  let blob = await response.blob();
  let img = document.createElement("img");
  img.src = URL.createObjectURL(blob);
  document.body.appendChild(img);
}
