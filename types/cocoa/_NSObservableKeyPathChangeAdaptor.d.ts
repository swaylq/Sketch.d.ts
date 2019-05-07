/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSObservableKeyPathChangeAdaptor<T0 = void, T1 = void, T2 = void> extends NSObservableKeyPath {}
  namespace _NSObservableKeyPathChangeAdaptor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObservableKeyPath {
      alloc<R = _NSObservableKeyPathChangeAdaptor>(): R;
      new: <R = _NSObservableKeyPathChangeAdaptor>() => R;
    }
  }
}
