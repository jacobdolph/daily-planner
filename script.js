
var rightNow = moment()

function displayTime() {
    $("#currentDay").text(rightNow)

}




function hoursUpdater() {
    var currentHour = moment().hours();



    $(".time-block").each(function () {
        var blockKey = $(this).attr("id")
        console.log(blockKey);
        var blockHour = parseInt($(this).attr("id").split("-")[1])
        var blockDisplay = localStorage.getItem(blockKey)
        $(this).children("textarea").text(blockDisplay)
        console.log(blockHour)
        console.log(currentHour)
        console.log(blockDisplay)



        if (blockHour < currentHour) {
            console.log("block hour is less than current hour")
            $(this).children("textarea").addClass("past")
        } else if (blockHour == currentHour) {
            $(this).children("textarea").addClass("present")
            console.log("block hour is the same as current hour")
        } else if (blockHour > currentHour) {
            $(this).children("textarea").addClass("future")
            console.log("block hour will be grey")
        }



    })
}


$(".saveBtn").on("click", function () {
    localStorage.setItem($(this).parent().attr("id"), $(this).siblings("textarea").val().trim())

})





hoursUpdater()

displayTime()