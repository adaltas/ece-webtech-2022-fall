
// Counter element
const counter = document.getElementById("counter")

// Handler function
const handleClick = () => {
  counter.innerHTML = ++counter.innerHTML;
}

// Add event listener
document.getElementById("clickme").addEventListener("click", handleClick);
