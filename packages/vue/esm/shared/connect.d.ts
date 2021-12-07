import type {
  VueComponent,
  IComponentMapper,
  IStateMapper,
  VueComponentProps,
  DefineComponent,
} from '../types'
export declare function mapProps<T extends VueComponent = VueComponent>(
  ...args: IStateMapper<VueComponentProps<T>>[]
): (target: T) => DefineComponent<VueComponentProps<T>>
export declare function mapReadPretty<
  T extends VueComponent,
  C extends VueComponent
>(
  component: C,
  readPrettyProps?: Record<string, any>
): (target: T) => DefineComponent<VueComponentProps<T>>
export declare function connect<T extends VueComponent>(
  target: T,
  ...args: IComponentMapper[]
):
  | {
      functional: boolean
      render(h: any, context: any): any
    }
  | (import('vue').ComponentOptions<
      import('vue').default,
      import('@vue/composition-api').ShallowUnwrapRef<() => any> &
        import('@vue/composition-api').Data,
      {},
      {},
      {},
      {} & {}
    > &
      Omit<import('vue').VueConstructor<import('vue').default>, never> &
      (new (
        ...args: any[]
      ) => import('@vue/composition-api').ComponentRenderProxy<
        {} & {},
        import('@vue/composition-api').ShallowUnwrapRef<() => any>,
        import('@vue/composition-api').Data,
        {},
        {},
        {},
        {},
        {},
        {} & {},
        {},
        true
      >))
