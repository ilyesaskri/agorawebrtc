let form=document.getElementById('lobby__form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    let iniviteCode = e.target.room.value
    if (!iniviteCode) {

        iniviteCode=String(Math.floor(Math.random()*10000))

        window.location=`room.html?room=${iniviteCode}`
        
    }

})