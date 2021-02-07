import { Input, Select } from '@mhshifat/mhs-ui'
import '@mhshifat/mhs-ui/dist/index.css'
import React from 'react'

const App = () => {
  return (
    <div className='playground'>
      <button onClick={() => {}}>Click Me</button>
      <Select
        label='Choose a role'
        options={[{ label: 'Manager', value: 'manager' }]}
        error='This field is required'
      />
      <Input label='Username' required />
    </div>
  )
}

export default App
