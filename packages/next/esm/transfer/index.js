import { connect, mapProps } from '@formily/react'
import { Transfer as NextTransfer } from '@alifd/next'
export var Transfer = connect(
  NextTransfer,
  mapProps({
    dataSource: true,
  })
)
export default Transfer
//# sourceMappingURL=index.js.map
