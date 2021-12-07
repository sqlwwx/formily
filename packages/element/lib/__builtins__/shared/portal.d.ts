export interface IPortalProps {
  id?: string | symbol
}
export declare const createPortalProvider: (
  id: string | symbol
) => import('vue').ComponentOptions<
  import('vue').default,
  void & import('@vue/composition-api').Data,
  {},
  {},
  {
    id: {
      type: (SymbolConstructor | StringConstructor)[]
      default: string | symbol
    }
  },
  {
    id: string | symbol
  } & {}
> &
  Omit<import('vue').VueConstructor<import('vue').default>, never> &
  (new (...args: any[]) => import('@vue/composition-api').ComponentRenderProxy<
    {
      id: string | symbol
    } & {},
    void,
    import('@vue/composition-api').Data,
    {},
    {},
    {},
    {},
    {},
    {
      id: string | symbol
    } & {},
    {
      id: string | symbol
    },
    true
  >)
export declare function getProtalContext(id: string | symbol): any
