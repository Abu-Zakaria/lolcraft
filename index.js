const { app, BrowserWindow } = require('electron');

function createWindow()
{
	const win = new BrowserWindow({
		fullscreen: true,
		webPreferences: {
			nodeIntegration: true
		}
	});

	win.loadFile('index.html');
}

app.whenReady().then(createWindow);
