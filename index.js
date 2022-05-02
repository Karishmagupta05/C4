// write js code here corresponding to index.html
// You should add submit event on the form


document.querySelector("#masaiForm").addEventListener("submit",schedulefun)

function schedulefun(){

    event.preventDefault()

    var scheduleArr=JSON.parse(localStorage.getItem("schedule"))  ||  []

    var scheduleObj={

        matchNum:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value
    }

    scheduleArr.push(scheduleObj)

    localStorage.setItem("schedule",JSON.stringify(scheduleArr))

}