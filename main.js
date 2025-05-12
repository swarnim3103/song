const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
            height: 630,
            resizable: false,
            frame: false,
            transparent: true,
            movable: true,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            }
        });

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})