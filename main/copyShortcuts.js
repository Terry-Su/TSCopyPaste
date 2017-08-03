/**
 * copyShortcuts module
 */

const electron = require('electron')
const dataManager = require('./dataManager')
const { globalShortcut, clipboard } = electron


const copyShortcuts = {
  bindCopyShortcuts() {
    const settings = dataManager.getCopySetting()
    settings.map(function (setting, id) {
      registerSaveClipboardToLocal({
        setting,
        id,
        dataManager,
        globalShortcut,
        clipboard
      })
      registerLoadLocalToClicpboard({
        setting,
        id,
        dataManager,
        globalShortcut,
        clipboard
      })
    })
  },
  saveContentToLocal
}

module.exports = copyShortcuts



function registerSaveClipboardToLocal({
  setting,
  id,
  dataManager,
  globalShortcut,
  clipboard,
  }) {
  const { key } = setting
  const { save } = key

  // shortcuts command, for example: "CommandOrControl+F1"
  const command = concatCommand(save)

  globalShortcut.register(command, () => {
    saveClipboardContentToLocal({
      id,
      dataManager,
      clipboard
    })
  })
}

function registerLoadLocalToClicpboard({
  setting,
  id,
  dataManager,
  globalShortcut,
  clipboard
  }) {
  const { key } = setting
  const { load } = key

  // shortcuts command, for example: "CommandOrControl+F1"
  const command = concatCommand(load)

  globalShortcut.register(command, () => {
    writeLocalContentToClipboard({
      id,
      dataManager,
      clipboard
    })
  })
}

function saveClipboardContentToLocal({
  id,
  dataManager,
  clipboard
}) {
  var clipboardContent = clipboard.readText()
  saveContentToLocal({
    content: clipboardContent,
    id,
    dataManager
  })
}

function saveContentToLocal({
  content,
  id,
  dataManager
}) {
  const tmpSettings = dataManager.getCopySetting()
  tmpSettings[id].content = content
  dataManager.setCopySetting(tmpSettings)
}

function writeLocalContentToClipboard({
  id,
  dataManager,
  clipboard
}) {
  var localContent = dataManager.getCopySetting()[id].content
  clipboard.writeText(localContent)
}

function concatCommand(arr) {
  return arr.reduce(function (accumulator, current) { return accumulator + '+' + current })
}