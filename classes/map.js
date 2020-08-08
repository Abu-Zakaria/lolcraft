class Map
{
	constructor()
	{
		this.x_grid_count = 16;
		this.y_grid_count = 12;
	}

	init()
	{
		for (var i = 0; i < this.y_grid_count; i++)
		{
			var grid_row = document.createElement('DIV');
			grid_row.setAttribute('class', 'map-grid-row-wrapper map-grid-row-wrapper-' + i);
			this.get_container().appendChild(grid_row);

			for (var j = 0; j < this.x_grid_count; j++)
			{
				this.create_grid(i, j);
			}
		}
	}

	create_grid(row, col)
	{
		var grid = document.createElement("DIV");

		grid.setAttribute("class", "map-grid map-grid-row-"+ row +" map-grid-col-" + col);
		grid.setAttribute("id", "_grid_" + row + "_" + col);
		grid.setAttribute("data-grid_col_number", col);
		grid.setAttribute("data-grid_row_number", row);
		if(col == 6 && row == 4)
		{
			grid.setAttribute("class", grid.getAttribute('class') + " have-player");
		}


		document.querySelector('.map-grid-row-wrapper-' + row).appendChild(grid);
	}

	add_tree(x, y)
	{
		var grid = document.querySelector("#_grid_" + y + "_" + x);

		var tree_img = document.createElement('IMG');
		tree_img.setAttribute('src', 'images/tree.png');
		tree_img.style.width = "30px";
		tree_img.style.float = 'left';
		tree_img.style.marginLeft = '10px';
		tree_img.style.zIndex = '2';

		grid.appendChild(tree_img);

		grid.setAttribute('data-has_tree', 1);
	}

	get_container()
	{
		return document.querySelector('#container');
	}
}