async function getData(place){
    const url =`https://timezone.abstractapi.com/v1/current_time/?api_key=7b9681a5df974e3cade98f4c5c3f8551&location=${place}`
    const res=await fetch(url)
    data=await res.json()
    time=data.datetime

    document.getElementById("time").innerText=`${place}'s time = ${time} ${data.timezone_abbreviation}`
}

document.querySelectorAll(".allPaths").forEach(e=>{
    e.addEventListener("mouseover", function(){
        window.onmousemove=function(j){
            x=j.clientX
            y=j.clientY
            document.getElementById("name").style.top=y-20+"px"
            document.getElementById("name").style.left=x+10+"px"
        }
        e.style.fill="#0a0a0a"
        document.getElementById("name").style.opacity=2
        document.getElementById("name").innerText=e.id
        getData(e.id)
    })
    e.addEventListener("mouseleave", function(){
        e.style.fill="#ececec"
        document.getElementById("name").style.opacity=1
    })

    // e.addEventListener("click", function(){
    //     getData(e.id)
    // })
})