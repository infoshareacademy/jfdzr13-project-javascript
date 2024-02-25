const toggler = document.querySelector("#btn");
const toast_container = document.querySelector("#toast_container");

function remove(toast) {
    return () => toast_container.removeChild(toast);
}

function addToast() {
    const toast = document.createElement("div");
    toast.classList.add("toast");

    toast.textContent = "infoShare Academy!";

    toast_container.appendChild(toast);

    setTimeout(remove(toast), 3000)
}


toggler.addEventListener("click", addToast);