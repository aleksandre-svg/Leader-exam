let form = document.getElementById("form1")
let submited = document.getElementById("submited")
let back = document.querySelector(".button")
let nums = ["1", "2", "3", '4', "5", "6", "7", "8", "9", "0"]
form.addEventListener("submit", function(e){
    let valid = []
    let cardNum = document.getElementById("num")
    let cvc = document.getElementById("cvc")
    e.preventDefault()
    for (let i of cardNum.value){
        valid.push(nums.includes(i))
    }
    valid.push(cvc.value.length === 3)
    console.log(valid)
    if (valid.includes(false)){
        alert("You have filled form incorrectly")
    }else {
            form.style.display = 'none'
            submited.style.display = 'flex'
    }
})

back.addEventListener("click", function(e){
    location.replace("index.html")
})