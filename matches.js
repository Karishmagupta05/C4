// write js code here corresponding to matches.html

var scheduleArr = JSON.parse(localStorage.getItem("schedule"))

displayData(scheduleArr)

var favArr=JSON.parse(localStorage.getItem("favourites")) || []

// document.querySelector("#filterVenue").addEventListener("change",nameSort)

// function nameSort(){
//     var selected =document.querySelector("#filterVenue").value

//     if(selected=="asc")
//     {
//         scheduleArr.sort(function(a,b){

//             if(a.venue==Mumbai)
//         })
//     }
// }





function displayData(data)
{
    data.forEach(function(elem){

        var tr =document.createElement("tr")

        var td1=document.createElement("td")
        td1.innerText=elem.matchNum

        var td2=document.createElement("td")
        td2.innerText=elem.teamA

        var td3=document.createElement("td")
        td3.innerText=elem.teamB

        var td4=document.createElement("td")
        td4.innerText=elem.date

        var td5=document.createElement("td")
        td5.innerText=elem.venue

        var td6=document.createElement("td")
        td6.innerText="Add as Favourites"
        td6.style.color="green"
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(){

            favfun(elem)
        })

tr.append(td1,td2,td3,td4,td5,td6)
document.querySelector("tbody").append(tr)

    })
}
    function favfun(elem)
    {
     favArr.push(elem)
     localStorage.setItem("favourites",JSON.stringify(favArr))
    }
