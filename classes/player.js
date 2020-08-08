class Player
{
	constructor()
	{
		this.x_grid_count = 0;
		this.y_grid_count = 0;

		console.log("player is initiated");

		var vm = this;
		document.addEventListener('keydown', function(event)
		{
			if(event.keyCode == 39)
			{
				vm.move_player('right');
			}
			else if(event.keyCode == 37)
			{
				vm.move_player('left');
			}
			else if(event.keyCode == 38)
			{
				vm.move_player('up');
			}
			else if(event.keyCode == 40)
			{
				vm.move_player('down');
			}
		});
	}

	init_player_position(x_grid_count = 0, y_grid_count = 0)
	{
		this.x_grid_count = (x_grid_count == 0 ) ? this.x_grid_count : x_grid_count;
		this.y_grid_count = (y_grid_count == 0 ) ? this.y_grid_count : y_grid_count;

		console.log('initiating player position');

		var player_body = document.querySelector('#player_body');

		if(player_body)
		{
			player_body.parentNode.removeChild(player_body);
		}
		var grid_container = document.querySelector('.have-player');
		player_body = document.createElement("DIV");

		player_body.setAttribute("id", "player_body");

		grid_container.appendChild(player_body);
	}

	move_player(direction)
	{
		console.log('moving player...');
		var body = this.get_player_body();

		var grid_col_no = body.parentNode.getAttribute('data-grid_col_number');
		var grid_row_no = body.parentNode.getAttribute('data-grid_row_number');

		document.querySelector("#_grid_" + grid_row_no + "_" + grid_col_no).classList.remove('have-player');
		console.log(this.x_grid_count);
		console.log(this.y_grid_count);

		if(direction == 'right' || direction == 'left')
		{
			console.log("pushing " + direction, grid_row_no, grid_col_no);
			if(direction == 'right' && Number(grid_col_no) + 1 >= this.x_grid_count)
			{
				console.log('reached limit to go to right!');
				return false;
			}
			else if(direction == 'left' && Number(grid_col_no) - 1 < 0)
			{
				console.log('reached limit to go to left!');
				return false;
			}
			
			var new_grid_no = (direction == 'right') ? (Number(grid_col_no) + 1) : (Number(grid_col_no) - 1);
			var new_position = document.querySelector('#_grid_' + grid_row_no + "_" + new_grid_no);
			if(new_position.getAttribute('data-has_tree') == 1) { console.log('cannot enter in tree area!'); return false; }
			new_position.setAttribute('class', new_position.getAttribute('class') + ' have-player');

			this.init_player_position();
		}
		else if(direction == 'up' || direction == 'down')
		{
			console.log("pushing " + direction, grid_row_no, grid_col_no);
			if(direction == 'down' && Number(grid_row_no) + 1 >= this.y_grid_count)
			{
				console.log('reached limit to go to down!');
				return false;
			}
			else if(direction == 'up' && Number(grid_row_no) - 1 < 0)
			{
				console.log('reached limit to go to up!');
				return false;
			}

			var new_grid_no = (direction == 'down') ? (Number(grid_row_no) + 1) : (Number(grid_row_no) - 1);
			var new_position = document.querySelector('#_grid_' + new_grid_no + "_" + grid_col_no);
			if(new_position.getAttribute('data-has_tree') == 1) { console.log('cannot enter in tree area!'); return false; }
			new_position.setAttribute('class', new_position.getAttribute('class') + ' have-player');

			this.init_player_position();
		}
	}

	get_player_body()
	{
		return document.querySelector('#player_body');
	}
}