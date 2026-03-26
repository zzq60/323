namespace myBlocks {
    /**
     * 闪烁点阵屏（模拟LED效果）
     */
    //% block="闪烁点阵屏"
    //% blockId=blinkMatrix
    //% group="我的积木"
    export function blinkLed() {
        // 显示一个点（点亮）
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            . . . . .
        `)
        basic.pause(500)
        // 清空屏幕（熄灭）
        basic.clearScreen()
        basic.pause(500)
    }

    /**
     * 计算两数之和
     * @param a 数字1
     * @param b 数字2
     */
    //% block="计算 %a + %b"
    //% blockId=addNumbers
    //% group="我的积木"
    export function add(a: number, b: number): number {
        return a + b
    }
    /**
查
     * @param a 数字1
     * @param b 数字2
     */
    //% block="计算 %a - %b"
    //% blockId=delNumbers
    //% group="45积木"
    export function del(a: number, b: number): number {
        return a - b
    }
}