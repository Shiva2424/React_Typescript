//let getfunc = require('./sum.ts')
import {add,forEachFunc} from './sum'

describe('testing summ function',() => {

    test('add 1+2 equal to 3',() => {
        expect(add(1,2)).toBe(3)
    })
    test('passing one param',() => {
        expect(add(1)).toBe(1)
    })
})

// test('forEachFunc test', ()=> {
//     const mockCallback = jest.fn(x => 42 + x);
//     forEachFunc([0, 1], mockCallback);
//     expect(mockCallback.mock.calls[0][0]).toBe(0);
//     expect(mockCallback.mock.calls[1][0]).toBe(1);
//     expect(mockCallback.mock.results[0].value).toBe(42);
// })