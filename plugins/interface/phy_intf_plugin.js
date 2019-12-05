/*    Copyright 2019 Firewalla Inc
 *
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU Affero General Public License, version 3,
 *    as published by the Free Software Foundation.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU Affero General Public License for more details.
 *
 *    You should have received a copy of the GNU Affero General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

const log = require('../../util/logger.js')(__filename);

const InterfaceBasePlugin = require('./intf_base_plugin.js');
const _ = require('lodash');

const fs = require('fs');
const Promise = require('bluebird');

Promise.promisifyAll(fs);


class PhyInterfacePlugin extends InterfaceBasePlugin {

}

module.exports = PhyInterfacePlugin;