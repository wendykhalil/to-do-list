let input = document.getElementById("input");
let list = document.getElementById("list");

function save() {
  localStorage.setItem("data", list.innerHTML);
}

function show() {
  list.innerHTML = localStorage.getItem("data");
}

function add() {
  if (input.value == "") {
    alert("verifier");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  save();
}

// ✅ نحط Event Listener مرة برك
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    save();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    save();
  }
});

show();



















































// let input = document.getElementById("input")


// let list = document.getElementById("list")


// function add() {
//     if (input.value == "") {
//         alert("verifier")
//     }
//     else {
//         let l = document.createElement("li")
//         l.innerHTML = input.value
//         list.appendChild(l)
//         let span = document.createElement("span")
//         span.innerHTML = "\u00d7"
//         l.appendChild(span)

//         input.value = ""

//     }
//     save()


// }
// list.addEventListener("click", (e) => {
//     if (e.target.tagName == "LI") {
//         e.target.classList.toggle("checked")
//     } else if (e.target.tagName == "SPAN") {
//         e.target.parentElement.remove();
//     }
//     save()
// })


// function save() {
//     localStorage.setItem("save", list.innerHTML)
// }
// function show() {
//     list.innerHTML=localStorage.getItem("save")
// }
// show()
