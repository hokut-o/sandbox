import $ from "jquery";

const array = [
  { id: 1, name: "太郎", age: 22 },
  { id: 2, name: "二郎", age: 22 },
  { id: 3, name: "三郎", age: 22 },
  { id: 4, name: "四郎", age: 22 },
  { id: 5, name: "五郎", age: 22 },
  { id: 6, name: "六郎", age: 22 }
];

//map（非破壊的）
//-------------------------------------------------
const changedArray = array.map(({ id, name }) => ({
  id: id, //idに省略可
  name: name, //nameに省略可
  age: 23
}));

console.log(changedArray);
console.log(array);

const animals = [
  { id: 1, category: "animal", kind: "dog" },
  { id: 2, category: "animal", kind: "cat" },
  { id: 3, category: "animal", kind: "bird" }
];

const kinds = animals.map(animal => animal.kind);

console.log(kinds);
console.log(animals);


//foreach（破壊的）
//-------------------------------------------------
// array.forEach((val,index) => {
// 	return val.age = 23;
// });
//
// console.log(array);
