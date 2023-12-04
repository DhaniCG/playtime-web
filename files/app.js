$(() => {
    // Turn on popup for game details
    $(".more-btn, .quick-reward > div").on("click", e => {
        // Show Popup
        $("#game-info-popup").removeClass("inactive");
        $("body").addClass("s");
        setTimeout(() => {
            $("#game-info-popup").removeClass("trans");
        }, 1)

        // Replace contents according to the selected one
        const $gameIcon = $(e.currentTarget).parent().parent().find("img").attr("src").slice(12, 16);
        const $gameIconAlt = $(e.currentTarget).parent().parent().find("img").attr("alt");
        const $gameName = $(e.currentTarget).parent().parent().find("h3").text();
        const $gameDescription = $(e.currentTarget).parent().parent().find(".description").text();
        const $gameRewardCon = $(e.currentTarget).parent().parent().find(".reward-condition").html();
        const $gameTotalReward = $(e.currentTarget).parent().parent().find(".quick-reward").eq(0).find(".total").text();
        const $gameTasks = $(e.currentTarget).parent().parent().find(".quick-reward").eq(0).find(".task-list").html();
        const $gameLink = $(e.currentTarget).parent().parent().find(".play-btn").eq(0).attr("href");
        const $gameLinkText = $(e.currentTarget).parent().parent().find(".play-btn").eq(0).text();

        $("#game-info-popup").find("#app-icon").attr("src", `./files/APP_${$gameIcon}.jpg`);
        $("#game-info-popup").find("#app-icon").attr("alt", $gameIconAlt);
        $("#game-info-popup").find("#game-name").text($gameName);
        $("#game-info-popup").find("#total-cash").text($gameTotalReward);
        $("#game-info-popup").find("#description").text($gameDescription);
        $("#game-info-popup").find("#reward-condition").html($gameRewardCon);
        $("#game-info-popup").find("#rewards").html($gameTasks);
        $("#game-info-popup").find(".play-btn").attr("href", $gameLink);
        $("#game-info-popup").find(".play-btn").text($gameLinkText);
    })

    // Toggle Reward Condition text
    $("#game-info-popup .condition").on("click", e => {
        $(e.currentTarget).find(".dropdown").toggleClass("active");
        $("#reward-condition").slideToggle();
    })

    // Close popup when click background
    $("#game-info-popup .popup-bg").on("click", () => {
        $("#game-info-popup").addClass("trans");
        $("body").removeClass("s");
        setTimeout(() => {
            $("#game-info-popup").addClass("inactive");
        }, 200)
    })

    // Open Cashout popup
    $(".cash-btn").on("click", () => {
        $("#cashout-form-popup").removeClass("inactive");
        $("body").addClass("s");
        setTimeout(() => {
            $("#cashout-form-popup").removeClass("trans");
        }, 1)
    })

    // Failed/Success Cashout popup
    $("#cashout-form-popup .play-btn").on("click", () => {
        if (parseFloat($(".balance span").text().slice(1)) < 20) {
            $("#cashout-failed-popup").removeClass("inactive");
            setTimeout(() => {
                $("#cashout-failed-popup").removeClass("trans");
            }, 1)
        } else {
            // Success Code Here
        }
    })

    // Failed Cashout button
    $("#cashout-failed-popup .play-btn").on("click", () => {
        $("#cashout-failed-popup").addClass("trans");
        $("body").removeClass("s");
        setTimeout(() => {
            $("#cashout-failed-popup").addClass("inactive");
            $("#cashout-form-popup").addClass("trans");
        }, 200)
        setTimeout(() => {
            $("#cashout-form-popup").addClass("inactive");
        }, 400)
    })

    // Close Cashout Popup
    $("#cashout-form-popup .popup-bg").on("click", () => {
        $("#cashout-form-popup").addClass("trans");
        $("body").removeClass("s");
        setTimeout(() => {
            $("#cashout-form-popup").addClass("inactive");
        }, 200)
    })

    // Open How it Works popup
    $(".how-it-works-btn").on("click", () => {
        // Closes the nav first if it's opened
        $(".hamburger").removeClass("active");
        $(".nav-btns").addClass("trans");
        setTimeout(() => {
            $(".nav-btns").addClass("inactive");

            // Show How it Works Popup
            $("#how-it-works-popup").removeClass("inactive");
            $("body").addClass("s");
            setTimeout(() => {
                $("#how-it-works-popup").removeClass("trans");
            }, 1)
        }, 200)
    })

    // Close How it Works Popup
    $("#how-it-works-popup .popup-bg").on("click", () => {
        $("#how-it-works-popup").addClass("trans");
        $("body").removeClass("s");
        setTimeout(() => {
            $("#how-it-works-popup").addClass("inactive");
        }, 200)
    })

    // Open/Close Navbar
    $(".hamburger").on("click", () => {
        if (!$(".hamburger").eq(0).hasClass("active")) {
            // Opening
            $(".hamburger").addClass("active");
            $(".nav-btns").removeClass("inactive");
            $("body").addClass("s");
            setTimeout(() => {
                $(".nav-btns").removeClass("trans");
            }, 1)
        } else {
            // Closing
            $(".hamburger").removeClass("active");
            $(".nav-btns").addClass("trans");
            $("body").removeClass("s");
            setTimeout(() => {
                $(".nav-btns").addClass("inactive");
            }, 200)
        }
    })
})