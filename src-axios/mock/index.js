import Mock from 'mockjs'
import { a } from './data'
console.log(a)

export default Mock.mock('/api/users', 'get', {
  status: 0,
  list: [
    {
      name: 'kobe',
      age: 40
    },
    {
      name: 'rose',
      age: 30
    },
    {
      name: 'bob',
      age: 33
    }
  ]
})
