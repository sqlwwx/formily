# @formily-x/reactive-react

## QuikStart

```tsx
import React from 'react'
import { observable } from '@formily-x/reactive'
import { observer } from '@formily-x/reactive-react'

const obs = observable({
  count: 0,
})

export default observer(() => {
  return (
    <div>
      {obs.count}
      <button
        onClick={() => {
          obs.count++
        }}
      >
        Click
      </button>
    </div>
  )
})
```
