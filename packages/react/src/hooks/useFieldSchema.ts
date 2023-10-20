import { useContext } from 'react'
import { SchemaContext } from '../shared'
import { Schema } from '@formily-x/json-schema'

export const useFieldSchema = (): Schema => {
  return useContext(SchemaContext)
}
