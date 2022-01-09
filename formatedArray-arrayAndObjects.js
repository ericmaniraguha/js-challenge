const arr_NestedObject = (array) => {

    let object = {}

    array.forEach(element => {
        let person = element.split(',')

        object[person[0].split(' ')[0]
            .trim()] = {
            secondName: person[0]
                .split(' ')[1]
                .trim(),
            age: person[1]
                .trim()
        }
    });
    return object
}

console.log(arr_NestedObject([
    "Patrick wyne, 30",
    "lil wyne, 32",
    "Eric mimi, 21",
    "Dodos deck, 21",
    "Alian Dwine, 22",
    "Patrick wyne, 33",
    "Patrick wyne, 100",
    "Patrick wyne, 40"])
);

