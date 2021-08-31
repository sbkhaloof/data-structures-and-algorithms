'use strict'
const validateBrackets=require('../bracket');

describe('validateBrackets test',()=>{
    it('should test balance ',()=>{
let string1="{}()[]"
expect(validateBrackets(string1)).toEqual(true)
    })
    it('should test not balance ',()=>{
        let string1="{](){"
        expect(validateBrackets(string1)).toEqual(false)
            })
})