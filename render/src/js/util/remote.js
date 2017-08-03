/**
 * remote module(connect to main process)
 */

const remote = global.require('electron').remote
const electron = global.require('electron').remote.require('electron')
const { clipboard } = electron

export const dataManager = remote.require('./dataManager')

export const copyShortcuts = remote.require('./copyShortcuts')

export function saveContentToLocal(content, id) {
    copyShortcuts.saveContentToLocal({
      content,
      id,
      dataManager
    }) 
}

export default remote