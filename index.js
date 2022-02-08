let colors = ["green", "red", "blue", "rgba(133,122,208)", "#f15025"]

let toggleBtn = false

let randomNumber = ()=> Math.floor(Math.random()*colors.length)

let randomNumberHex = () => Math.floor(Math.random()*256)

let toggleHex = () => {
    toggleBtn = true
}

let toggleSimp = () => toggleBtn = false

document.getElementById("btn-hex").addEventListener("click", toggleHex)
document.getElementById("btn-simp").addEventListener("click", toggleSimp)

let Change_color = () => {
    if(!toggleBtn){
        let rand = randomNumber()
        document.body.style.backgroundColor = colors[rand]
        document.getElementById("color_tag").innerHTML= `${colors[rand]}`

    }
    else {
        let rand2 = randomNumberHex()
        let rand3 = randomNumberHex()
        let rand4 = randomNumberHex()
        let hexColor = `rgba(${rand2}, ${rand3}, ${rand4})`

        document.body.style.backgroundColor = hexColor
        document.getElementById("color_tag").innerHTML = hexColor

    }

    
}


const btn = document.getElementById("btn").addEventListener("click", Change_color)

// Hex button



