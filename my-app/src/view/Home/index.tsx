import React, { FC } from 'react'
import { Button } from 'antd'
import useArray from '../../hooks/UseArray';

type person = Record<string, any>;

const Home: FC = () => {
  const persons: person[] = [{
    name: 'ss', age: 123
  }, {
    name: 'jack',
    age: 444,
  }]
  const { value, add, clear, remove } = useArray(persons);


  return (
    <div>
      <Button onClick={() => add({ name: Math.random(), age: Math.random() })}>Add</Button>
      <Button type="dashed" onClick={() => remove(0)}>remove</Button>
      <Button onClick={() => clear()} type="text">clear</Button>
      <ul>
        {
          value.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))
        }
      </ul>

    </div>
  )
}

export default Home