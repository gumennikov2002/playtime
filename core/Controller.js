class Controller {
	constructor() {
		this.baseUrl = 'file:///Applications/MAMP/htdocs/playtime'
		this.app = document.querySelector('#app')
		this.init()
	}

	init() {
		this.drawGames()
		console.log(window.location)
	}

	drawGames() {
		const games = {
			'ticTacToe': {
				'img': 'assets/img/tic_tac_toe.jpg',
				'title': 'Крестики-нолики',
				'name': 'ticTacToe',
				'run': false
			},
			'findACouple': {
				'img': 'assets/img/find_a_couple.jpg',
				'title': 'Найди пару',
				'name': 'findACouple',
				'run': false
			},
			'snake': {
				'img': 'assets/img/snake.jpg',
				'title': 'Змейка',
				'name': 'snake',
				'run': false
			}
		}

		Object.keys(games).forEach((item) => {
			let game = games[item]

			app.querySelector('.row').innerHTML += `
				<div class="game-box" data-game=${game.name}>
					<div class="game-img">
						<img src="${game.img}" ondragstart="return false">
					</div>
					<span class="mt-1 text-center">${game.title}</span>
				</div>
			`
		})

		let gameBoxes = document.querySelectorAll('.game-box')

		gameBoxes.forEach((element) => {
			element.addEventListener('click', () => {
				this.openGame(element.getAttribute('data-game'))
			})
		})
	}

	openGame(name) {
		// this.app.innerHTML = ''
		axios.get(this.baseUrl + '/games/snake.html')
		.then((result) => {
			console.log(result)
		})
	}
}

new Controller()