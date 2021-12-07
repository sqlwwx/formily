import React from 'react'
import { Card, Empty } from 'antd'
import { CardProps } from 'antd/lib/card'
import { IGridOptions } from '@formily/grid'
import { ArrayField } from '@formily/core'
import {
  useField,
  observer,
  useFieldSchema,
  RecursionField,
} from '@formily/react'
import cls from 'classnames'
import { ISchema } from '@formily/json-schema'
import { usePrefixCls } from '../__builtins__'
import { ArrayBase, ArrayBaseMixins } from '../array-base'
import FormGrid from '../form-grid'

const { GridColumn } = FormGrid

interface ArrayCardsProps extends CardProps {
  grid?: IGridOptions
}

type ComposedArrayCards = React.FC<ArrayCardsProps> & ArrayBaseMixins

const isAdditionComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf('Addition') > -1
}

const isIndexComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf('Index') > -1
}

const isRemoveComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf('Remove') > -1
}

const isMoveUpComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf('MoveUp') > -1
}

const isMoveDownComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf('MoveDown') > -1
}

const isCopyComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf('Copy') > -1
}

const isOperationComponent = (schema: ISchema) => {
  return (
    isAdditionComponent(schema) ||
    isRemoveComponent(schema) ||
    isMoveDownComponent(schema) ||
    isMoveUpComponent(schema) ||
    isCopyComponent(schema)
  )
}

export const ArrayCards: ComposedArrayCards = observer((props) => {
  const field = useField<ArrayField>()
  const schema = useFieldSchema()
  const dataSource = Array.isArray(field.value) ? field.value : []
  const prefixCls = usePrefixCls('formily-array-cards', props)

  if (!schema) throw new Error('can not found schema object')

  const renderItems = () => {
    return dataSource?.map((item, index) => {
      const items = Array.isArray(schema.items)
        ? schema.items[index] || schema.items[0]
        : schema.items
      const title = (
        <span>
          <RecursionField
            schema={items}
            name={index}
            filterProperties={(schema) => {
              if (!isIndexComponent(schema)) return false
              return true
            }}
            onlyRenderProperties
          />
          {props.title || field.title}
        </span>
      )
      const extra = (
        <span>
          <RecursionField
            schema={items}
            name={index}
            filterProperties={(schema) => {
              if (!isOperationComponent(schema)) return false
              return true
            }}
            onlyRenderProperties
          />
          {props.extra}
        </span>
      )
      const content = (
        <RecursionField
          schema={items}
          name={index}
          filterProperties={(schema) => {
            if (isIndexComponent(schema)) return false
            if (isOperationComponent(schema)) return false
            return true
          }}
        />
      )
      return (
        <ArrayBase.Item key={index} index={index} record={item}>
          <GridColumn>
            <Card
              {...props}
              onChange={() => {}}
              className={cls(`${prefixCls}-item`, props.className)}
              title={title}
              extra={extra}
            >
              {content}
            </Card>
          </GridColumn>
        </ArrayBase.Item>
      )
    })
  }

  const renderAddition = () => {
    return schema.reduceProperties((addition, schema, key) => {
      if (isAdditionComponent(schema)) {
        return <RecursionField schema={schema} name={key} />
      }
      return addition
    }, null)
  }

  const renderEmpty = () => {
    if (dataSource?.length) return
    return (
      <Card
        {...props}
        onChange={() => {}}
        className={cls(`${prefixCls}-item`, props.className)}
        title={props.title || field.title}
      >
        <Empty />
      </Card>
    )
  }

  return (
    <ArrayBase>
      {renderEmpty()}
      <FormGrid {...(props.grid || { maxColumns: 1 })}>
        {renderItems()}
      </FormGrid>
      {renderAddition()}
    </ArrayBase>
  )
})

ArrayCards.displayName = 'ArrayCards'

ArrayBase.mixin(ArrayCards)

export default ArrayCards
