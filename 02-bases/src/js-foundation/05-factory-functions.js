
const obj = { name: 'Juan', birthday: '1000-01-10' }

const buildPerson = ({name, birthday}) => {

  return {
    id: new Date().getTime(),
    name,
    birthday,
    age: new Date().getFullYear() - new Date(birthday).getFullYear(),
  }
};

const Juan = buildPerson(obj);
console.log(Juan)



