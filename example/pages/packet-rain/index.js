Page({
    data: {
        visible: false
    },
    onLoad: function(options) {
        // 演示模式一
        this.initModeOne()
        // 注释模式一 打开模式二
        // this.initModeTwo()
    },
    // 上限模式
    initModeOne() {
        this.setData({
            visible: true,
            time: 15, // 游戏时间
            readyTime: 3, // 准备时间
            mode: 1,
            total: 200, // 总金额200
            number: 50, // 50个
            min: 0, // 金额最小是0
            max: 10 // 金额最大是10
        })
    },
    initModeTwo() {
        this.setData({
            visible: true,
            time: 15, // 游戏时间
            readyTime: 3, // 准备时间
            mode: 2, // 模式二，要设置createSpeed参数
            createSpeed: 300,
            min: 0.01, // 金额最小是0.01
            max: 10, // 金额最大是10
            decimal: 2
        })
    },
    // 结束
    success() {
        console.log('bind:finish')
        this.setData({
            visible: false //  隐藏界面
        })
    },
    onShareAppMessage: function(ops) {
        return {
            title: 'sol-下雨动画',
            path: '/pages/packet-rain/index'
        }
    }
})
