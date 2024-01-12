import { sum } from "../Components/Sum";
// they take three parameter('summary',callback,setTimout example },2000)
test('testing for sum function',()=>{
expect(sum(10,10)).toBe(20)
})
test('testing for sum function',()=>{
expect(sum(20,40)).toBe(60)
})
 