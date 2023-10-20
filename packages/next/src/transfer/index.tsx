import { connect, mapProps } from '@formily-x/react'
import { Transfer as NextTransfer } from '@alifd/next'

export const Transfer = connect(
  NextTransfer,
  mapProps({
    dataSource: true,
  })
)

export default Transfer
