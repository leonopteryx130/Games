import Character from "./characters";

class VirtualMachine {
    constructor() {
        this.characters = []; //角色列表
    }

    // 添加角色
    addCharacter(character) {
        this.characters.push(character);
    }

    // 绘制
    update() {
        
    }
}   


// 游戏主循环
function mainLoop() {
    window.requestAnimationFrame(mainLoop);
}