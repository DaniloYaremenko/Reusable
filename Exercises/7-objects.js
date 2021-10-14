'use strict';

const fn = () => {
  const obj1 = { name: 'Dan' };
  let obj2 = { name: 'Timur' };
  obj1.name = 'Terentiy';
  obj2.name = 'Terentiy';
  obj2 = { name: 'Masha' };

};

module.exports = { fn };
