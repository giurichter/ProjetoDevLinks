function toogleMode(){
    const html = document.documentElement
    html.classList.toggle('light')


    const img = document.querySelector("#profile img")
    if(html.classList.contains('light')){
        img.setAttribute('src', './Image/avatar-lightmode.png')
    } else{
        img.setAttribute('src', './Image/avatar-darkmode.png')
            }

}



