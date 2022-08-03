const { Model } = require('sequelize')

class MyModel extends Model {
  static getJson(...args) {
    return this.findAll(...args).then(found => found.map(i => i.getJson()))
  }
  static getJsonByPk(...args) {
    return this.findByPk(...args).then(found => found.getJson())
  }

  getJson() {
    return this.get({ plain: true })
  }
}

module.exports = MyModel