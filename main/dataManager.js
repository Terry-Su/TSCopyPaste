const fs = require('fs')
const path = require('path')
const dataPath = path.resolve(__dirname, '../config.json')
const dataErrorPath = path.resolve(__dirname, '../data/error.log')
let self

const dataManager = {
  get() {
    try {
      return JSON.parse(fs.readFileSync(dataPath, 'utf8'))
    } catch (e) {
      fs.writeFileSync(dataErrorPath, e.toString())
      console.log(e)
    }
  },

  set(json) {
    try {
      fs.writeFileSync(dataPath, JSON.stringify(json, null, 4))
    } catch (e) {
      fs.writeFileSync(dataErrorPath, e.toString())
      console.log(e)
    }
  },

  getCopySetting() {
    return self.get().config.copySetting
  },

  setCopySetting(copySetting) {
    const tmpJson = self.get()
    tmpJson.config.copySetting = copySetting
    self.set(tmpJson)
  }
}


self = dataManager
module.exports = dataManager