$(() => {
    // Turn on popup for game details
    $(".more-btn").on("click", e => {
        // Show Popup
        $("#popup").removeClass("inactive");
        setTimeout(() => {
            $("#popup").removeClass("trans");
        })

        // Replace contents according to the selected one
        const $gameIcon = $(e.currentTarget).parent().siblings("img").attr("src").slice(12, 16);
        const $gameIconAlt = $(e.currentTarget).parent().siblings("img").attr("alt");
        const $gameName = $(e.currentTarget).siblings("h3").text();
        const $gameDescription = $(e.currentTarget).parent().siblings(".description").text();
        const $gameTotalReward = $(e.currentTarget).parent().siblings(".quick-reward").eq(0).find(".total").text();
        const $gameTasks = $(e.currentTarget).parent().siblings(".quick-reward").eq(0).find(".task-list").html();

        $("#popup").find("#app-icon").attr("src", `./files/APP_${$gameIcon}.JPG`);
        $("#popup").find("#app-icon").attr("alt", $gameIconAlt);
        $("#popup").find("#game-name").text($gameName);
        $("#popup").find("#total-cash").text($gameTotalReward);
        $("#popup").find("#description").text($gameDescription);
        $("#popup").find("#rewards").html($gameTasks);
    })

    // Toggle Reward Condition text
    $("#popup .condition").on("click", e => {
        $(e.currentTarget).find(".dropdown").toggleClass("active");
        $("#reward-condition").slideToggle();
    })

    // Close popup when click background
    $("#popup .popup-bg").on("click", () => {
        $("#popup").addClass("trans");
        setTimeout(() => {
            $("#popup").addClass("inactive");
        }, 200)
    })
})