import type { Component } from 'vue'
import { InjectionKey, Ref } from '@vue/composition-api'
export declare type CreateContext<T> = {
  Provider: Component
  Consumer: Component
  injectKey: InjectionKey<Ref<T>>
}
export declare const createContext: <T>(defaultValue?: T) => CreateContext<T>
export declare const useContext: <T>(context: CreateContext<T>) => any
