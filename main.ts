let Turn = 0
let Random = 0
let Value_1 = 0
for (let index = 0; index < 100; index++) {
    for (let index = 0; index < 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Quarter))
        basic.pause(250)
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(330, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Quarter))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
    }
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
}
loops.everyInterval(10000, function () {
	
})
basic.forever(function () {
    music.setVolume(255)
    Value_1 = 25
    Random = randint(1, 2)
    if (TPBot.sonarJudge(TPBot.Sonarjudge.Greater, Value_1)) {
        TPBot.headlightColor(0x00ffff)
        while (TPBot.sonarJudge(TPBot.Sonarjudge.Greater, Value_1)) {
            TPBot.setWheels(89, 100)
        }
        if (Random == 1) {
            for (let index = 0; index < 100; index++) {
                if (TPBot.sonarJudge(TPBot.Sonarjudge.Greater, Value_1)) {
                    TPBot.headlightColor(0x00ffff)
                    TPBot.setWheels(100, 20)
                } else {
                    if (TPBot.sonarJudge(TPBot.Sonarjudge.Less, 10)) {
                        TPBot.headlightColor(0xff0000)
                        while (TPBot.sonarJudge(TPBot.Sonarjudge.Greater, Value_1)) {
                            TPBot.setWheels(-100, -100)
                        }
                    } else {
                        TPBot.headlightColor(0xff0000)
                        TPBot.setWheels(50, -50)
                    }
                }
            }
        } else {
            for (let index = 0; index < 100; index++) {
                if (TPBot.sonarJudge(TPBot.Sonarjudge.Greater, Value_1)) {
                    TPBot.headlightColor(0x00ffff)
                    TPBot.setWheels(20, 100)
                } else {
                    if (TPBot.sonarJudge(TPBot.Sonarjudge.Greater, Value_1)) {
                        TPBot.setWheels(100, 20)
                        TPBot.headlightColor(0x00ffff)
                    } else {
                        TPBot.headlightColor(0xff0000)
                        TPBot.setWheels(-50, 50)
                    }
                }
            }
        }
    } else {
        if (TPBot.sonarJudge(TPBot.Sonarjudge.Less, 10)) {
            TPBot.headlightColor(0xff0000)
            while (TPBot.sonarJudge(TPBot.Sonarjudge.Greater, Value_1)) {
                TPBot.setWheels(-100, -100)
            }
        } else {
            TPBot.headlightColor(0xff0000)
            Turn = randint(1, 2)
            if (Turn == 1) {
                while (TPBot.sonarJudge(TPBot.Sonarjudge.Greater, Value_1)) {
                    TPBot.setWheels(50, -50)
                }
            } else {
                while (TPBot.sonarJudge(TPBot.Sonarjudge.Greater, Value_1)) {
                    TPBot.setWheels(-50, 50)
                }
            }
        }
    }
})
