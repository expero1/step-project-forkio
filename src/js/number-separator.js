let numSepartor = document.querySelectorAll(".num-separator");
numSepartor.forEach((num) => {
  num.innerText = Number(num.innerText).toLocaleString("en");
});

// for (let i = 0, len = x.length; i < len; i++) {
//     let num = Number(x[i].innerHTML)
//             .toLocaleString('en');
//     x[i].innerHTML = num;
//     x[i].classList.add("currSign");
// }
