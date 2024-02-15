/**
 * 角色类
 */

class Character {
    constructor(position, size, color) {
        this.x = position[0];
        this.y = position[1];
        this.width = size[0];
        this.height = size[1];
        this.color = color;
    }

    // 绘制角色
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

export default Character;