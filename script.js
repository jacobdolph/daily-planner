
$("#currentDay").text(moment());
setInterval(function () {
    $("#currentDay").text(moment());
}, 1000);


function hoursUpdater() {
    var currentHour = moment().hours();



    $(".time-block").each(function () {
        var blockKey = $(this).attr("id")

        var blockHour = parseInt($(this).attr("id").split("-")[1])
        var blockDisplay = localStorage.getItem(blockKey)
        $(this).children("textarea").text(blockDisplay)



        if (blockHour < currentHour) {

            $(this).children("textarea").addClass("past")
        } else if (blockHour == currentHour) {
            $(this).children("textarea").addClass("present")

        } else if (blockHour > currentHour) {
            $(this).children("textarea").addClass("future")

        }



    })
}


$(".saveBtn").on("click", function () {
    localStorage.setItem($(this).parent().attr("id"), $(this).siblings("textarea").val().trim())

})





hoursUpdater()

