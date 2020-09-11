import { lowestNum, doubleArray, evensOnlyArray, arraySum, evensOnlyAndDoubleArray, findItem, sortArray, } from "../src/app";


lowestNum([]);

describe('test lowestNum', function(){
    test('takes numbers and should return -1', function () {
        expect(lowestNum([1, 2, 3, 4, -1])).toEqual(-1);

    });
});

doubleArray([]);

describe('test doubleArray',function() {
    test("double valuse in an array of numbers", function () {
        expect(doubleArray([1, 2, 3, 4])).toEqual[2, 4, 6, 8];
    });
});

evensOnlyArray([])

describe('test evensOnlyArray', function () {
    test('should only return values of numbers divisable by 2', function(){
        expect(evensOnlyArray([1, 12, 13, 14, 15, 16])).toEqual([12, 14, 16]);
    });
});

describe('test arraySum', function(){
    test('takes all numbers and should add them together and return the total', function () {
        expect(arraySum([1, 2, 3, 4,])).toEqual(10);

    });
});

describe('allNumbersGreaterThanZero', function(){
    test('will determine if every number in an array is greater than zero', function(){
        expect(allNumbersGreaterThanZero([3, 6, 9, 12])).toEqual(true)
    });
});


describe('someNumbersAreOdd', function(){
    test("will check if one or more numbers leaves a remainder when divided by 2", function(){
        expect(someNumbersAreOdd([2, 3, 7, 10])).toEqual(true)
    });
});

describe('evensOnlyArrayAndDoublesArray', function(){
    test('an array of numbers should be evaluated and return even numbers and then double them', function(){
        expect(evensOnlyAndDoubleArray([2, 4, 5, 6, 8,])).toEqual([4, 8, 12, 16])
    });
});

describe('findItem', function (){
    test('Will locate if an item existist in an array', function(){
        expect(findItem([1, 4, 6, 8])).toEqual(located)
    });
});

describe('sortArray', function (){
    test("will take an array and sort it in DESC order", function(){
        expect(sortArray([4, 6, 8, 10])).toEqual([10, 8, 6, 4])
    });
});