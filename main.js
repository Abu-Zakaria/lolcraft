var map = new Map();

map.init();

var scenario_1 = new Scenario_1_map(map);

scenario_1.init_scenario();

var player = new Player();

player.init_player_position(map.x_grid_count, map.y_grid_count);

