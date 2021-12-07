import * as annotations from './annotations'
export declare function observable<T extends object>(target: T): T
export declare namespace observable {
  var box: annotations.IBox
  var ref: annotations.IRef
  var deep: annotations.IObservable
  var shallow: annotations.IObservable
  var computed: annotations.IComputed
}
