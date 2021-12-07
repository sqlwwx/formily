declare type ChildNode = {
  element?: HTMLElement
  observer?: MutationObserver
  dispose?: () => void
}
export declare class ChildListMutationObserver {
  observer: MutationObserver
  callback: MutationCallback
  childList: ChildNode[]
  init: MutationObserverInit
  constructor(callback: MutationCallback)
  observeChildList(element: HTMLElement): void
  addObserver(element: HTMLElement): void
  removeObserver(element: HTMLElement): void
  handler: (mutations: MutationRecord[]) => void
  observe: (element: HTMLElement, init?: MutationObserverInit) => void
  disconnect: () => void
}
export {}
