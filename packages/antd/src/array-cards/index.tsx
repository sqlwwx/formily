import React, { Fragment, useState, useEffect } from 'react'
import { Card, Empty, Pagination, Space, Select, Badge } from 'antd'
import { CardProps } from 'antd/lib/card'
import { IGridOptions } from '@formily/grid'
import { ArrayField } from '@formily/core'
import {
  useForm,
  useField,
  observer,
  useFieldSchema,
  RecursionField,
} from '@formily/react'
import { isBool } from '@formily/shared'
import cls from 'classnames'
import { ISchema } from '@formily/json-schema'
import { SelectProps } from 'antd/lib/select'
import { usePrefixCls } from '../__builtins__'
import { ArrayBase, ArrayBaseMixins, IArrayBaseProps } from '../array-base'
import FormGrid from '../form-grid'

const { GridColumn } = FormGrid

interface IStatusSelectProps extends SelectProps<any> {
  pageSize?: number
}

interface ArrayCardsProps extends CardProps {
  grid?: IGridOptions
  pagination?: any
}

type ComposedArrayCards = React.FC<
  React.PropsWithChildren<ArrayCardsProps & IArrayBaseProps>
> &
  ArrayBaseMixins

const isAdditionComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf('Addition') > -1
}

const isIndexComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf?.('Index') > -1
}

const isRemoveComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf?.('Remove') > -1
}

const isCopyComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf?.('Copy') > -1
}

const isMoveUpComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf?.('MoveUp') > -1
}

const isMoveDownComponent = (schema: ISchema) => {
  return schema['x-component']?.indexOf?.('MoveDown') > -1
}

const isOperationComponent = (schema: ISchema) => {
  return (
    isAdditionComponent(schema) ||
    isRemoveComponent(schema) ||
    isCopyComponent(schema) ||
    isMoveDownComponent(schema) ||
    isMoveUpComponent(schema)
  )
}

const StatusSelect: React.FC<IStatusSelectProps> = observer((props) => {
  const form = useForm()
  const field = useField<ArrayField>()
  const prefixCls = usePrefixCls('formily-array-table')
  const errors = form.queryFeedbacks({
    type: 'error',
    address: `${field.address}.*`,
  })
  const parseIndex = (address: string) => {
    return Number(
      address
        .slice(address.indexOf(field.address.toString()) + 1)
        .match(/(\d+)/)?.[1]
    )
  }

  const options = props.options?.map(({ label, value }) => {
    const val = Number(value)
    const hasError = errors.some(({ address }) => {
      const currentIndex = parseIndex(address)
      const startIndex = (val - 1) * props.pageSize
      const endIndex = val * props.pageSize
      return currentIndex >= startIndex && currentIndex <= endIndex
    })
    return {
      label: hasError ? <Badge dot>{label}</Badge> : label,
      value,
    }
  })

  const width = String(options?.length).length * 15

  return (
    <Select
      value={props.value}
      onChange={props.onChange}
      options={options}
      virtual
      style={{
        width: width < 60 ? 60 : width,
      }}
      className={cls(`${prefixCls}-status-select`, {
        'has-error': errors?.length,
      })}
    />
  )
})

const ArrayCardsPagination = (props) => {
  const [current, setCurrent] = useState(1)
  const prefixCls = usePrefixCls('formily-array-cards')
  const pageSize = props.pageSize || 10
  const size = props.size || 'default'
  const dataSource = props.dataSource || []
  const startIndex = (current - 1) * pageSize
  const endIndex = startIndex + pageSize - 1
  const total = dataSource?.length || 0
  const totalPage = Math.ceil(total / pageSize)
  const pages = Array.from(new Array(totalPage)).map((_, index) => {
    const page = index + 1
    return {
      label: page,
      value: page,
    }
  })
  const handleChange = (current: number) => {
    setCurrent(current)
  }

  useEffect(() => {
    if (totalPage > 0 && totalPage < current) {
      handleChange(totalPage)
    }
  }, [totalPage, current])

  const renderPagination = () => {
    if (totalPage <= 1) return
    return (
      <div className={`${prefixCls}-pagination`}>
        <Space>
          <StatusSelect
            value={current}
            pageSize={pageSize}
            onChange={handleChange}
            options={pages}
            notFoundContent={false}
          />
          <Pagination
            {...props}
            pageSize={pageSize}
            current={current}
            total={dataSource.length}
            size={size}
            showSizeChanger={false}
            onChange={handleChange}
          />
        </Space>
      </div>
    )
  }

  return (
    <Fragment>
      {props.children?.(
        dataSource?.slice(startIndex, endIndex + 1),
        renderPagination(),
        startIndex
      )}
    </Fragment>
  )
}

export const ArrayCards: ComposedArrayCards = observer((props) => {
  const field = useField<ArrayField>()
  const schema = useFieldSchema()
  const dataSource = Array.isArray(field.value) ? field.value : []
  const pagination = isBool(props.pagination) ? {} : props.pagination
  const prefixCls = usePrefixCls('formily-array-cards', props)
  const { onAdd, onCopy, onRemove, onMoveDown, onMoveUp } = props

  if (!schema) throw new Error('can not found schema object')

  const renderItems = (dataSource, startIndex) => {
    return dataSource?.map((item, i) => {
      const index = i + startIndex
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
        <ArrayBase.Item
          key={index}
          index={index}
          record={() => field.value?.[index]}
        >
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
    <Fragment>
      {!dataSource?.length && (
        <Card
          {...props}
          onChange={() => {}}
          className={cls(`${prefixCls}-item`, props.className)}
          title={props.title || field.title}
          style={{ width: '100%' }}
        >
          <Empty />
        </Card>
      )}
      <ArrayCardsPagination {...pagination} dataSource={dataSource}>
        {(ds, pager, startIndex) => (
          <ArrayBase
            onAdd={onAdd}
            onCopy={onCopy}
            onRemove={onRemove}
            onMoveUp={onMoveUp}
            onMoveDown={onMoveDown}
          >
            {renderEmpty()}
            <div style={{ marginTop: 5, marginBottom: 5 }}>{pager}</div>
            <FormGrid {...(props.grid || { maxColumns: 1 })}>
              {renderItems(ds, startIndex)}
            </FormGrid>
            <div style={{ marginTop: 5, marginBottom: 5 }}>{pager}</div>
            {renderAddition()}
          </ArrayBase>
        )}
      </ArrayCardsPagination>
    </Fragment>
  )
})

ArrayCards.displayName = 'ArrayCards'

ArrayBase.mixin(ArrayCards)

export default ArrayCards
