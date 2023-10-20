export class UI {
	constructor(game) {
		this.game = game
		this.fontSize = 30
		this.fontFamily = 'Creepster'
	}
	draw(context) {
		context.save()
		context.shadowOffsetX = 2
		context.shadowOffsetY = 2
		context.shadowColor = 'white'
		context.shadowBlur = 0
		context.font = this.fontSize + 'px ' + this.fontFamily
		context.textAlign = 'left'
		context.fillStyle = this.game.fontColor
		//puntaje
		context.fillText('Puntaje: ' + this.game.score, 20, 50)
		// tiempo
		context.font = this.fontSize * 0.8 + 'px ' + this.fontFamily
		context.fillText('Tiempo: ' + (this.game.time * 0.001).toFixed(1), 20, 80)
		//Game Over
		if (this.game.gameOver) {
			context.textAlign = 'center'
			context.font = this.fontSize * 2 + 'px ' + this.fontFamily
			if (this.game.score > 5) {
				context.fillText('Alucinante!', this.game.width * 0.5, this.game.height * 0.5)
				context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily
				context.fillText('👾Eres el rey de la maquinita👾', this.game.width * 0.5, this.game.height * 0.5 + 20)
			} else {
				context.fillText('❌GAME OVER❌', this.game.width * 0.5, this.game.height * 0.5)
				context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily
				context.fillText('Me das pena...toma una monedita 🪙', this.game.width * 0.5, this.game.height * 0.5 + 20)
			}
		}
		context.restore()
	}
}
