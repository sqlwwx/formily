import { IFormGraph } from '../types'
import { Form } from './Form'
export declare class Graph {
  form: Form
  constructor(form: Form)
  getGraph: () => IFormGraph
  setGraph: (graph: IFormGraph) => void
}
