import $ from "jquery"

const array = [
	{id: 1, name: "太郎", age: 22},
	{id: 2, name: "二郎", age: 22},
	{id: 3, name: "三郎", age: 22},
	{id: 4, name: "四郎", age: 22},
	{id: 5, name: "五郎", age: 22},
	{id: 6, name: "六郎", age: 22}
];

const changedArray = array.map(({id, name}) => ({
	id, name, age: 23
}));

console.log(changedArray);