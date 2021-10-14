'use strict';

const phonebook = [
  { name: 'Dan', phone: '+380509982336' },
  { name: 'Timur', phone: '+380664752612' },
  { name: 'Ilya', phone: '+380994576297' },
];

const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) return name;
  }
};

module.exports = { phonebook, findPhoneByName };
