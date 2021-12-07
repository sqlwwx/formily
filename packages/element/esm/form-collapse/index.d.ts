import { CollapseItem } from 'element-ui'
import type { Collapse as CollapseProps } from 'element-ui'
import { PropType } from 'vue-demi'
declare type ActiveKeys = string | number | Array<string | number>
declare type ActiveKey = string | number
export interface IFormCollapse {
  activeKeys: ActiveKeys
  hasActiveKey(key: ActiveKey): boolean
  setActiveKeys(key: ActiveKeys): void
  addActiveKey(key: ActiveKey): void
  removeActiveKey(key: ActiveKey): void
  toggleActiveKey(key: ActiveKey): void
}
export interface IFormCollapseProps extends CollapseProps {
  formCollapse?: IFormCollapse
  activeKey?: ActiveKey
}
export declare const FormCollapseItem: import('vue').ComponentOptions<
  import('vue').default,
  import('@vue/composition-api').ShallowUnwrapRef<CollapseItem> &
    import('@vue/composition-api').Data,
  {},
  {},
  {},
  {} & {}
> &
  Omit<import('vue').VueConstructor<import('vue').default>, never> &
  (new (...args: any[]) => import('@vue/composition-api').ComponentRenderProxy<
    {} & {},
    import('@vue/composition-api').ShallowUnwrapRef<CollapseItem>,
    import('@vue/composition-api').Data,
    {},
    {},
    {},
    {},
    {},
    {} & {},
    {},
    true
  >)
declare const composeFormCollapse: import('vue').ComponentOptions<
  import('vue').default,
  import('@vue/composition-api').ShallowUnwrapRef<() => any> &
    import('@vue/composition-api').Data,
  {},
  {},
  {
    formCollapse: {
      type: PropType<IFormCollapse>
    }
    activeKey: {
      type: (StringConstructor | NumberConstructor)[]
    }
  },
  {} & {
    formCollapse?: IFormCollapse
    activeKey?: string | number
  }
> &
  Omit<import('vue').VueConstructor<import('vue').default>, never> &
  (new (...args: any[]) => import('@vue/composition-api').ComponentRenderProxy<
    {} & {
      formCollapse?: IFormCollapse
      activeKey?: string | number
    },
    import('@vue/composition-api').ShallowUnwrapRef<() => any>,
    import('@vue/composition-api').Data,
    {},
    {},
    {},
    {},
    {},
    {} & {
      formCollapse?: IFormCollapse
      activeKey?: string | number
    },
    {},
    true
  >) & {
    Item: import('vue').ComponentOptions<
      import('vue').default,
      import('@vue/composition-api').ShallowUnwrapRef<CollapseItem> &
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
        import('@vue/composition-api').ShallowUnwrapRef<CollapseItem>,
        import('@vue/composition-api').Data,
        {},
        {},
        {},
        {},
        {},
        {} & {},
        {},
        true
      >)
    createFormCollapse: (defaultActiveKeys?: ActiveKeys) => {
      activeKeys: ActiveKeys
      setActiveKeys(keys: ActiveKeys): void
      hasActiveKey(key: ActiveKey): boolean
      addActiveKey(key: ActiveKey): void
      removeActiveKey(key: ActiveKey): void
      toggleActiveKey(key: ActiveKey): void
    }
  }
export { composeFormCollapse as FormCollapse }
export default composeFormCollapse
