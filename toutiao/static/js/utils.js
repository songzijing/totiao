export default {
    setRem() {

        // 设计稿宽度和设备宽度
        let uiW = 375;
        let winW = document.documentElement.clientWidth || document.body.clientWidth;
        // 定义比例
        document.documentElement.style.fontSize = (winW / uiW) * 100 + "px";

    },

}