

// Урок 1

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

// Урок 2


// const arr = new Array();
// map // itMap
// 1. Возвращает новый массив
// 2. Не меняет кол-во элементов
// 3. Мар принимает коллбэк(функцию) в качетве параметра
// 4. Коллбэк выполняет обработку и/ или  преобразование каджого элемента исходного массива
// 5. Новый массив состоит из return нашего коллбэка
// 6. Осходный массив не изменяется (не мутирует)
//const getName = s => s.name
function getName(s) {
    return s.name
}


const names = students.map(s => s.name)
console.log(names)
console.log(students)
console.log(names === names)  // true

const itMap = (array, callback) => {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        const result = callback(array[i])
        newArr[i] = result
    }

    return newArr
}

console.log(itMap(students, getName))

// Метод Filter
// filter/ itFilter
// 1. Возвращает новый массив
// 2. Возможно, меняет кол-во элементов
// 3. Filter принимает коллбэк(функцию) в качетве параметра
// 4. Коллбэк выполняет обработку каджого элемента исходного массива
// 5. Коллбэк возвращает true/false
// 5. Новый массив состоит из элементов исходного массива
// 6. Осходный массив не изменяется (не мутирует)


const itFilter = (array, callback) => {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true)   // if(callback(array[i]))
            newArr.push(array[i])
    }
    return newArr
}
const filteredArr = students.filter(s => s.age >= 20)
console.log(filteredArr)
// console.log(students.filter())


// Метод Find
// find/ itFind
// 1. Возвращает элемент исходного массива
// 2. Возвращает один элемент или не одного
// 3. Find принимает коллбэк(функцию) в качетве параметра
// 4. Коллбэк выполняет обработку каджого элемента исходного массива
// 5. Коллбэк возвращает true/false
// 5. Возвращает первый элемент, на котором коллбэк вернет true или undefined
// 6. Исходный массив не изменяется (не мутирует)

const itFind = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true)   // if(callback(array[i]))
            return array[i]
    }
}

//Урок 3








