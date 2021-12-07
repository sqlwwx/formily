import { Form as FormType, IFormFeedback } from '@formily/core'
import { FormLayoutProps } from '../form-layout'
import { Component, VNode } from 'vue'
export interface FormProps extends FormLayoutProps {
  form?: FormType
  component?: Component
  previewTextPlaceholder: string | (() => VNode)
  onAutoSubmit?: (values: any) => any
  onAutoSubmitFailed?: (feedbacks: IFormFeedback[]) => void
}
export declare const Form: import('vue').ComponentOptions<
  import('vue').default,
  import('@vue/composition-api').ShallowUnwrapRef<
    import('@vue/composition-api').Data
  > &
    import('@vue/composition-api').Data,
  {},
  {},
  import('@vue/composition-api').ComponentPropsOptions<
    import('@vue/composition-api').Data
  >,
  | ({
      [x: number]: string
    } & {
      filter?: {
        <S extends string>(
          predicate: (
            value: string,
            index: number,
            array: string[]
          ) => value is S,
          thisArg?: any
        ): S[]
        (
          predicate: (value: string, index: number, array: string[]) => unknown,
          thisArg?: any
        ): string[]
      }
      [Symbol.iterator]?: IterableIterator<string>
      [Symbol.unscopables]?: {
        copyWithin: boolean
        entries: boolean
        fill: boolean
        find: boolean
        findIndex: boolean
        keys: boolean
        values: boolean
      }
      toString?: string
      concat?: string[]
      indexOf?: (searchElement: string, fromIndex?: number) => number
      lastIndexOf?: (searchElement: string, fromIndex?: number) => number
      slice?: string[]
      length?: number
      includes?: (searchElement: string, fromIndex?: number) => boolean
      toLocaleString?: string
      pop?: string
      push?: number
      join?: string
      reverse?: string[]
      shift?: string
      sort?: string[]
      splice?: {
        (start: number, deleteCount?: number): string[]
        (start: number, deleteCount: number, ...items: string[]): string[]
      }
      unshift?: number
      every?: {
        <S_1 extends string>(
          predicate: (
            value: string,
            index: number,
            array: string[]
          ) => value is S_1,
          thisArg?: any
        ): this is S_1[]
        (
          predicate: (value: string, index: number, array: string[]) => unknown,
          thisArg?: any
        ): boolean
      }
      some?: (
        predicate: (value: string, index: number, array: string[]) => unknown,
        thisArg?: any
      ) => boolean
      forEach?: (
        callbackfn: (value: string, index: number, array: string[]) => void,
        thisArg?: any
      ) => void
      map?: <U>(
        callbackfn: (value: string, index: number, array: string[]) => U,
        thisArg?: any
      ) => U[]
      reduce?: {
        (
          callbackfn: (
            previousValue: string,
            currentValue: string,
            currentIndex: number,
            array: string[]
          ) => string
        ): string
        (
          callbackfn: (
            previousValue: string,
            currentValue: string,
            currentIndex: number,
            array: string[]
          ) => string,
          initialValue: string
        ): string
        <U_1>(
          callbackfn: (
            previousValue: U_1,
            currentValue: string,
            currentIndex: number,
            array: string[]
          ) => U_1,
          initialValue: U_1
        ): U_1
      }
      reduceRight?: {
        (
          callbackfn: (
            previousValue: string,
            currentValue: string,
            currentIndex: number,
            array: string[]
          ) => string
        ): string
        (
          callbackfn: (
            previousValue: string,
            currentValue: string,
            currentIndex: number,
            array: string[]
          ) => string,
          initialValue: string
        ): string
        <U_2>(
          callbackfn: (
            previousValue: U_2,
            currentValue: string,
            currentIndex: number,
            array: string[]
          ) => U_2,
          initialValue: U_2
        ): U_2
      }
      find?: {
        <S_2 extends string>(
          predicate: (
            this: void,
            value: string,
            index: number,
            obj: string[]
          ) => value is S_2,
          thisArg?: any
        ): S_2
        (
          predicate: (value: string, index: number, obj: string[]) => unknown,
          thisArg?: any
        ): string
      }
      findIndex?: (
        predicate: (value: string, index: number, obj: string[]) => unknown,
        thisArg?: any
      ) => number
      fill?: (value: string, start?: number, end?: number) => string[]
      copyWithin?: (target: number, start: number, end?: number) => string[]
      entries?: IterableIterator<[number, string]>
      keys?: IterableIterator<number>
      values?: IterableIterator<string>
      flatMap?: <U_3, This = undefined>(
        callback: (
          this: This,
          value: string,
          index: number,
          array: string[]
        ) => U_3 | readonly U_3[],
        thisArg?: This
      ) => U_3[]
      flat?: unknown[]
    })
  | ({} & {
      [x: string]: unknown
      [x: number]: unknown
    })
> &
  Omit<import('vue').VueConstructor<import('vue').default>, never> &
  (new (...args: any[]) => import('@vue/composition-api').ComponentRenderProxy<
    (
      | ({
          [x: number]: string
        } & {
          filter?: {
            <S extends string>(
              predicate: (
                value: string,
                index: number,
                array: string[]
              ) => value is S,
              thisArg?: any
            ): S[]
            (
              predicate: (
                value: string,
                index: number,
                array: string[]
              ) => unknown,
              thisArg?: any
            ): string[]
          }
          [Symbol.iterator]?: IterableIterator<string>
          [Symbol.unscopables]?: {
            copyWithin: boolean
            entries: boolean
            fill: boolean
            find: boolean
            findIndex: boolean
            keys: boolean
            values: boolean
          }
          toString?: string
          concat?: string[]
          indexOf?: (searchElement: string, fromIndex?: number) => number
          lastIndexOf?: (searchElement: string, fromIndex?: number) => number
          slice?: string[]
          length?: number
          includes?: (searchElement: string, fromIndex?: number) => boolean
          toLocaleString?: string
          pop?: string
          push?: number
          join?: string
          reverse?: string[]
          shift?: string
          sort?: string[]
          splice?: {
            (start: number, deleteCount?: number): string[]
            (start: number, deleteCount: number, ...items: string[]): string[]
          }
          unshift?: number
          every?: {
            <S_1 extends string>(
              predicate: (
                value: string,
                index: number,
                array: string[]
              ) => value is S_1,
              thisArg?: any
            ): this is S_1[]
            (
              predicate: (
                value: string,
                index: number,
                array: string[]
              ) => unknown,
              thisArg?: any
            ): boolean
          }
          some?: (
            predicate: (
              value: string,
              index: number,
              array: string[]
            ) => unknown,
            thisArg?: any
          ) => boolean
          forEach?: (
            callbackfn: (value: string, index: number, array: string[]) => void,
            thisArg?: any
          ) => void
          map?: <U>(
            callbackfn: (value: string, index: number, array: string[]) => U,
            thisArg?: any
          ) => U[]
          reduce?: {
            (
              callbackfn: (
                previousValue: string,
                currentValue: string,
                currentIndex: number,
                array: string[]
              ) => string
            ): string
            (
              callbackfn: (
                previousValue: string,
                currentValue: string,
                currentIndex: number,
                array: string[]
              ) => string,
              initialValue: string
            ): string
            <U_1>(
              callbackfn: (
                previousValue: U_1,
                currentValue: string,
                currentIndex: number,
                array: string[]
              ) => U_1,
              initialValue: U_1
            ): U_1
          }
          reduceRight?: {
            (
              callbackfn: (
                previousValue: string,
                currentValue: string,
                currentIndex: number,
                array: string[]
              ) => string
            ): string
            (
              callbackfn: (
                previousValue: string,
                currentValue: string,
                currentIndex: number,
                array: string[]
              ) => string,
              initialValue: string
            ): string
            <U_2>(
              callbackfn: (
                previousValue: U_2,
                currentValue: string,
                currentIndex: number,
                array: string[]
              ) => U_2,
              initialValue: U_2
            ): U_2
          }
          find?: {
            <S_2 extends string>(
              predicate: (
                this: void,
                value: string,
                index: number,
                obj: string[]
              ) => value is S_2,
              thisArg?: any
            ): S_2
            (
              predicate: (
                value: string,
                index: number,
                obj: string[]
              ) => unknown,
              thisArg?: any
            ): string
          }
          findIndex?: (
            predicate: (value: string, index: number, obj: string[]) => unknown,
            thisArg?: any
          ) => number
          fill?: (value: string, start?: number, end?: number) => string[]
          copyWithin?: (target: number, start: number, end?: number) => string[]
          entries?: IterableIterator<[number, string]>
          keys?: IterableIterator<number>
          values?: IterableIterator<string>
          flatMap?: <U_3, This = undefined>(
            callback: (
              this: This,
              value: string,
              index: number,
              array: string[]
            ) => U_3 | readonly U_3[],
            thisArg?: This
          ) => U_3[]
          flat?: unknown[]
        })
      | ({} & {
          [x: string]: unknown
          [x: number]: unknown
        })
    ) & {},
    import('@vue/composition-api').ShallowUnwrapRef<
      import('@vue/composition-api').Data
    >,
    import('@vue/composition-api').Data,
    {},
    {},
    {},
    {},
    {},
    (
      | ({
          [x: number]: string
        } & {
          filter?: {
            <S extends string>(
              predicate: (
                value: string,
                index: number,
                array: string[]
              ) => value is S,
              thisArg?: any
            ): S[]
            (
              predicate: (
                value: string,
                index: number,
                array: string[]
              ) => unknown,
              thisArg?: any
            ): string[]
          }
          [Symbol.iterator]?: IterableIterator<string>
          [Symbol.unscopables]?: {
            copyWithin: boolean
            entries: boolean
            fill: boolean
            find: boolean
            findIndex: boolean
            keys: boolean
            values: boolean
          }
          toString?: string
          concat?: string[]
          indexOf?: (searchElement: string, fromIndex?: number) => number
          lastIndexOf?: (searchElement: string, fromIndex?: number) => number
          slice?: string[]
          length?: number
          includes?: (searchElement: string, fromIndex?: number) => boolean
          toLocaleString?: string
          pop?: string
          push?: number
          join?: string
          reverse?: string[]
          shift?: string
          sort?: string[]
          splice?: {
            (start: number, deleteCount?: number): string[]
            (start: number, deleteCount: number, ...items: string[]): string[]
          }
          unshift?: number
          every?: {
            <S_1 extends string>(
              predicate: (
                value: string,
                index: number,
                array: string[]
              ) => value is S_1,
              thisArg?: any
            ): this is S_1[]
            (
              predicate: (
                value: string,
                index: number,
                array: string[]
              ) => unknown,
              thisArg?: any
            ): boolean
          }
          some?: (
            predicate: (
              value: string,
              index: number,
              array: string[]
            ) => unknown,
            thisArg?: any
          ) => boolean
          forEach?: (
            callbackfn: (value: string, index: number, array: string[]) => void,
            thisArg?: any
          ) => void
          map?: <U>(
            callbackfn: (value: string, index: number, array: string[]) => U,
            thisArg?: any
          ) => U[]
          reduce?: {
            (
              callbackfn: (
                previousValue: string,
                currentValue: string,
                currentIndex: number,
                array: string[]
              ) => string
            ): string
            (
              callbackfn: (
                previousValue: string,
                currentValue: string,
                currentIndex: number,
                array: string[]
              ) => string,
              initialValue: string
            ): string
            <U_1>(
              callbackfn: (
                previousValue: U_1,
                currentValue: string,
                currentIndex: number,
                array: string[]
              ) => U_1,
              initialValue: U_1
            ): U_1
          }
          reduceRight?: {
            (
              callbackfn: (
                previousValue: string,
                currentValue: string,
                currentIndex: number,
                array: string[]
              ) => string
            ): string
            (
              callbackfn: (
                previousValue: string,
                currentValue: string,
                currentIndex: number,
                array: string[]
              ) => string,
              initialValue: string
            ): string
            <U_2>(
              callbackfn: (
                previousValue: U_2,
                currentValue: string,
                currentIndex: number,
                array: string[]
              ) => U_2,
              initialValue: U_2
            ): U_2
          }
          find?: {
            <S_2 extends string>(
              predicate: (
                this: void,
                value: string,
                index: number,
                obj: string[]
              ) => value is S_2,
              thisArg?: any
            ): S_2
            (
              predicate: (
                value: string,
                index: number,
                obj: string[]
              ) => unknown,
              thisArg?: any
            ): string
          }
          findIndex?: (
            predicate: (value: string, index: number, obj: string[]) => unknown,
            thisArg?: any
          ) => number
          fill?: (value: string, start?: number, end?: number) => string[]
          copyWithin?: (target: number, start: number, end?: number) => string[]
          entries?: IterableIterator<[number, string]>
          keys?: IterableIterator<number>
          values?: IterableIterator<string>
          flatMap?: <U_3, This = undefined>(
            callback: (
              this: This,
              value: string,
              index: number,
              array: string[]
            ) => U_3 | readonly U_3[],
            thisArg?: This
          ) => U_3[]
          flat?: unknown[]
        })
      | ({} & {
          [x: string]: unknown
          [x: number]: unknown
        })
    ) & {},
    | {
        [x: number]: string
      }
    | {},
    true
  >)
export default Form
