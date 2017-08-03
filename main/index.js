const electron = require('electron')
const fs = require('fs')
const path = require('path')
const url = require('url')
const copyShortcuts = require('./copyShortcuts')

const { app, globalShortcut, clipboard } = electron
const BrowserWindow = electron.BrowserWindow

let mainWindow
let webContent

function createWindow() {
  mainWindow = new BrowserWindow({
    autoHideMenuBar: true
  })

  webContent = mainWindow.webContents

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/../render/', 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  // mainWindow.webContents.openDevTools()

  copyShortcuts.bindCopyShortcuts()
}



app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})

