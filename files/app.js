$(() => {
    // Turn on popup for game details
    $(".more-btn, .quick-reward > div").on("click", e => {
        // Show Popup
        $("#popup").removeClass("inactive");
        $("body").addClass("s");
        setTimeout(() => {
            $("#popup").removeClass("trans");
        })

        // Replace contents according to the selected one
        const $gameIcon = $(e.currentTarget).parent().parent().find("img").attr("src").slice(12, 16);
        const $gameIconAlt = $(e.currentTarget).parent().parent().find("img").attr("alt");
        const $gameName = $(e.currentTarget).parent().parent().find("h3").text();
        const $gameDescription = $(e.currentTarget).parent().parent().find(".description").text();
        const $gameTotalReward = $(e.currentTarget).parent().parent().find(".quick-reward").eq(0).find(".total").text();
        const $gameTasks = $(e.currentTarget).parent().parent().find(".quick-reward").eq(0).find(".task-list").html();
        const $gameLink = $(e.currentTarget).parent().parent().find(".play-btn").eq(0).attr("href");

        $("#popup").find("#app-icon").attr("src", `./files/APP_${$gameIcon}.jpg`);
        $("#popup").find("#app-icon").attr("alt", $gameIconAlt);
        $("#popup").find("#game-name").text($gameName);
        $("#popup").find("#total-cash").text($gameTotalReward);
        $("#popup").find("#description").text($gameDescription);
        $("#popup").find("#rewards").html($gameTasks);
        $("#popup").find(".play-btn").attr("href", $gameLink);
    })

    // Toggle Reward Condition text
    $("#popup .condition").on("click", e => {
        $(e.currentTarget).find(".dropdown").toggleClass("active");
        $("#reward-condition").slideToggle();
    })

    // Close popup when click background
    $("#popup .popup-bg").on("click", () => {
        $("#popup").addClass("trans");
        $("body").removeClass("s");
        setTimeout(() => {
            $("#popup").addClass("inactive");
        }, 200)
    })
})
