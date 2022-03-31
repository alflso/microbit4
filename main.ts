function 잔여량상태이미지출력 () {
    잔여량비율 = 잔여량 / 공급량 * 100
    if (잔여량비율 == 0) {
        없음()
    } else if (잔여량비율 <= 30) {
        부족()
    } else if (잔여량비율 <= 60) {
        보통()
    } else if (잔여량비율 > 60) {
        충분()
    }
}
function 잔여량숫자출력 () {
    잔여량 = 잔여량 - 1
    if (잔여량 < 0) {
        잔여량 = 0
    }
    basic.showNumber(잔여량)
}
function 충분 () {
    basic.showIcon(IconNames.Heart)
}
function 부족 () {
    basic.showIcon(IconNames.Sad)
}
function 없음 () {
    basic.showIcon(IconNames.No)
}
function 보통 () {
    basic.showIcon(IconNames.Happy)
}
function 초기화 () {
    잔여량 = 공급량
    basic.showNumber(잔여량)
    충분()
}
let 잔여량비율 = 0
let 잔여량 = 0
let 공급량 = 0
공급량 = 10
잔여량 = 공급량
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        초기화()
    } else if (input.buttonIsPressed(Button.A)) {
        잔여량숫자출력()
    } else if (input.buttonIsPressed(Button.B)) {
        잔여량상태이미지출력()
    }
})
