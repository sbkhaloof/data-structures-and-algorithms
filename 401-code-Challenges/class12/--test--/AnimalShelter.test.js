'use strict';
const{ Animal, AnimalShelter}=require('../AnimalShelter');
describe('AnimalShelter test',()=>{
    it('enqueue dog',()=>{
        let shelter=new AnimalShelter();
        let dog=new Animal('dog');
        shelter.enqueue(dog);
        expect(shelter.dog.front.value.type).toBe('dog')
    })
    it('dequeue dog',()=>{
        let shelter = new AnimalShelter();
    let dog = new Animal("dog");
    let dog2 = new Animal("dog");
    shelter.enqueue(dog);
    shelter.enqueue(dog2);
    
  shelter.dequeue(dog2);
    // console.log(shelter.dog.front.next,'>>>>>>>>>>>>>>>>>>>>>>>>>.');
    expect(shelter.dog.front.next).toBeNull()
    })
    it('enqueue cat',()=>{
        let shelter=new AnimalShelter();
        let cat=new Animal('cat');
        shelter.enqueue(cat);
        expect(shelter.cat.front.value.type).toBe('cat')
    })
    it('dequeue cat',()=>{
        let shelter = new AnimalShelter();
    let cat = new Animal("cat");
    let cat2 = new Animal("cat");
    shelter.enqueue(cat);
    shelter.enqueue(cat2);
    
  shelter.dequeue(cat2);
    // console.log(shelter.dog.front.next,'>>>>>>>>>>>>>>>>>>>>>>>>>.');
    expect(shelter.cat.front.next).toBeNull()
    })
    it('test not cat or dog ',()=>{
        let shelter=new AnimalShelter();
        let cow=new Animal('cow');
        shelter.enqueue(cow);
        expect(shelter.enqueue(cow)).toEqual("Sorry this must be cat an dog ")
    })
})