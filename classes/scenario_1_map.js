class Scenario_1_map
{
	constructor(map)
	{
		this.map = map;

		this.tree_coordinates = [
			[2, 2], [2, 3],
			[3, 1], [3, 2], [3, 3],
			[10, 11], [11, 11], [12, 11], [13, 11]
		];
	}

	init_scenario()
	{
		for (var i = 0; i < this.tree_coordinates.length; i++)
		{
			this.map.add_tree(this.tree_coordinates[i][0], this.tree_coordinates[i][1]);
		}
	}
}