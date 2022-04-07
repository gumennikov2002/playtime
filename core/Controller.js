class Controller {
	constructor() {
		this.baseUrl = 'file:///Applications/MAMP/htdocs/playtime'
		this.app = document.querySelector('#app')
		this.init()
	}

	init() {
		this.drawGames()
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

			this.app.querySelector('.row').innerHTML += `
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
				this.openGame(element.getAttribute('data-game'), element.querySelector('span').innerHTML)
			})
		})
	}

	openGame(name, title) {
		this.app.innerHTML = `
			<div class="d-flex justify-content-between mb-2">
				<i class="pt-2 fa fa-backward text-dark back-from-game"></i>
				<h2 class="pt-2 text-center">${title}</h2>
				<div></div>
			</div>
			<div class="row">
				<div class="col-md-12 game-frame" id="gameFrame">
				</div>
			</div>
		`
		console.log(this.app.querySelector('.back-from-game'))
		this.app.querySelector('.back-from-game').addEventListener('click', () => {
			this.app.innerHTML = `<div class="row d-flex justify-content-around pt-5"></div>`
			this.drawGames()
		})
		// axios.get(this.baseUrl + '/games/snake.html')
		// .then((result) => {
		// 	console.log(result)
		// })
	}
}

new Controller()