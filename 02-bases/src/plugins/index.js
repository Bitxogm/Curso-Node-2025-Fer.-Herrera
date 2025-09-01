const {  getUUID } = require('../plugins/getUUid.plugin');
const { getAge } = require('../plugins/get-age.plugin');
const {http} = require('../plugins/http-client.plugin');
const buildlogger = require('../plugins/logger.plugin')

module.exports = {
  getAge,
  getUUID,
  http,
  buildlogger
}
