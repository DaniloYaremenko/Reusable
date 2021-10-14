'use strict';

const phonebook = {
  Dan: '+380509982336',
  Timur: '+380664752612',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
