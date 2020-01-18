import _ from 'lodash'

const chunk = () => {
    let arr = ['a', 'b', 'c', 'd']

    let newArrTwo = _.chunk(arr, 2)

    console.log(newArrTwo)
    // => [ [ 'a', 'b' ], [ 'c', 'd' ] ]


    const newArrThree = _.chunk(arr, 3)

    console.log(newArrThree)
    // => [ [ 'a', 'b', 'c' ], [ 'd' ] ]
}

const compact = () => {
    let arr = ['a', 'b', 'c', 'd']

    let newArrTwo = _.chunk(arr, 2)

    console.log(newArrTwo)
    // => [ [ 'a', 'b' ], [ 'c', 'd' ] ]

    let newArrThree = _.chunk(arr, 3)

    console.log(newArrThree)
    // => [ [ 'a', 'b', 'c' ], [ 'd' ] ]
}

const concat = () => {
    let arr = [0, 1, false, 2, '', 3]

    let newArr = _.compact(arr)

    console.log(newArr)
    // => [1, 2, 3]
}
