function loadpage(page) {
	window.location.assign(page);
}

const new_game = () => {
	const modal = document.getElementById('name-modal');
	const input = document.getElementById('username-input');

	// Show modal
	modal.classList.remove('hidden');

	// Focus input after a slight delay to ensure visibility
	setTimeout(() => {
		input.focus();
	}, 100);

	// Add enter key support
	input.onkeydown = (e) => {
		if (e.key === 'Enter') confirm_name();
		if (e.key === 'Escape') close_modal();
	};
}

const close_modal = () => {
	const modal = document.getElementById('name-modal');
	const input = document.getElementById('username-input');

	modal.classList.add('hidden');
	input.value = ''; // Clear input
	input.classList.remove('shake'); // Remove error state
}

const confirm_name = () => {
	const input = document.getElementById('username-input');
	const name = input.value.trim();

	if (!name) {
		// Error visual feedback
		input.classList.add('shake');
		setTimeout(() => input.classList.remove('shake'), 500);
		return;
	}

	sessionStorage.clear();
	sessionStorage.setItem("username", name);
	loadpage("./html/game.html");
}

function load_game() {
	loadpage("./html/load.html");
}


function how_to_play() {
	loadpage("./html/how_to_play.html");
}
