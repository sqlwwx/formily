import { Ref } from 'vue-demi'
interface IRecycleTarget {
  onMount: () => void
  onUnmount: () => void
}
export declare const useAttach: <T extends IRecycleTarget>(
  target: T
) => [Ref<T>, (arg: T) => T]
export {}
