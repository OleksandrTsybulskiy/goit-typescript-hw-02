/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<T, U> {
  key:T;
  value:U;
}

const obj:KeyValuePair<string, number> = {
  key: 'AZOV',
  value: 24.08,
}

const obj1:KeyValuePair<boolean, string[]> = {
  key: true,
  value: ["a", "z", "o", "v"],
}

export {};