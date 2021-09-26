'use strict'
const findFirstRepeat = require('../firstRepeatedWord');

describe('findFirstRepeat', () => {
    it('repeated first word', () => {
        let str = "Once upon a time, there was a brave princess who...";
        let expected = "a";
        expect(findFirstRepeat(str)).toEqual(expected)
    });
    it('return null if there is not repeated word',()=>{
        let str="It was the best of times";
        expect(findFirstRepeat(str)).toBeNull();
    })
    it('just repeat first repeate word ',()=>{
        let str="first word repeated first word show ";
        expect(findFirstRepeat(str)).toEqual('first')
    })

})