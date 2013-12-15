(function(){
    soundsList = ["theme", "uhura_song", "suspense01", "suspense02", "suspense03", "suspense04",
                  "epend", "credits", "kirk_captainslog", "kirk_dontlike", "kirkspock_illogical",
                  "kirksulu_intruder", "scotty_ayesir", "scotty_upurshaft", "spock_checkmate",
                  "spock_fascinating", "spock_hands", "spock_illogical", "spock_livelong",
                  "spock_irritating", "sulu_phasersready", "intercom", "c_working", "c_working", "c_working",
                  "c01", "c02", "c03", "c04", "c05", "c06", "photontorpedo", "transporter",
                  "tribble", "trpad", "turboliftdoor"
                 ];

    soundsListLength = soundsList.length;
    console.log(soundsListLength);

    $.ionSound({
        sounds: soundsList,
        path: "sounds/",
        multiPlay: true,
        volume: "0.5"
    });

    function playStarTrekTos(evt) {
        var button = evt.target.id;

        if ($(this).hasClass('recommend')){
            $.ionSound.stop(button);
            $(this).removeClass();
        } else {
            $(this).addClass('recommend');
            $.ionSound.play(button);
        }
    }

    for (var i = 0; i < soundsListLength; i++) {
        $('#' + soundsList[i]).on("click", playStarTrekTos);
    }

})();
