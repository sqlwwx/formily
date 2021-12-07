declare type RenderChildren = {
  [key in string]?: (...args: any[]) => (VNode | string)[]
}
declare type Tag = any
declare type VNodeData = Record<string, any>
declare type VNode = any
declare const compatibleCreateElement: (
  tag: Tag,
  data: VNodeData,
  components: RenderChildren
) => any
export default compatibleCreateElement
export { compatibleCreateElement as h }
