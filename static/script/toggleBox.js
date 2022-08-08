const inner = document.getElementById("inner")
const outer = document.getElementById("outer")
const checkbox = document.getElementById("checkbox")

// just for displaying output
const output = document.getElementById("output")

outer.addEventListener("click", () => {
inner.classList.toggle("inner-enabled")
outer.classList.toggle("outer-enabled")
checkbox.checked = !checkbox.checked


// just for displaying output
output.innerHTML = `checkbox is enabled: ${checkbox.checked}`
})