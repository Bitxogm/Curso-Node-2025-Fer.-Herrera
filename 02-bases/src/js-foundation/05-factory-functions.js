
// ! Estas dos lineas hacen lo mismo
// import {getAge, getUUID} from '../plugins/index.js';
// const { getAge, getUUID } = require('../plugins')


const buildMakePerson = ( {getAge, getUUID}) =>  {

  return ({ name, birthday }) => {
    return {
      id: getUUID(),
      name: name,
      birthday: birthday,
      age: getAge(birthday),
    }
  };
}

// const Juan = buildPerson(obj);
// console.log(Juan);

module.exports = {
  buildMakePerson,
}
  




