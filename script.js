let url = document.querySelector("input")
let button = document.querySelector("button")

button.addEventListener("click" , function (e) {
    e.preventDefault()
    button.innerText = "downloading file"
    fetchLink(url.value)
})

function fetchLink(url) {
    fetch(url) 
        .then(res => res.blob())
        .then(blob => {
            let tempUrl = URL.createObjectURL(blob)
            let aTag = document.createElement("a")
            aTag.href = tempUrl
            aTag.download = blob.type
            document.body.append(aTag)
            aTag.click()
            aTag.remove()
            URL.revokeObjectURL(url)
            button.innerText = "download file"

        })
        .catch(()=> {
            alert("download failed try again !")
        })
}