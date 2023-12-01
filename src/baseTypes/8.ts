/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

type Gender = {
 sex: 'male' | 'female' 
}

const myGender:Gender = {
  sex: 'male'
};

export {};