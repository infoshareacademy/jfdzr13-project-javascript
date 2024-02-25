const square = document.querySelector("#square");
const detector = document.querySelector("#detector")

const reactOnMouseOver = () => {
    detector.textContent = "mouseover"
}

square.addEventListener("mouseover", reactOnMouseOver)

square.addEventListener("mouseleave", () => {
    detector.textContent = "detector"
})
square.addEventListener("mouseup", () => {
    detector.textContent = "detector"
})
square.addEventListener("mousedown", () => {
    detector.textContent = "mousedown"
})
square.addEventListener("drag", () => {
    detector.textContent = "drag"
})