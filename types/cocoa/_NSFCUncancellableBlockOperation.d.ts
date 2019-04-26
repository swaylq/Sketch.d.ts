/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFCUncancellableBlockOperation<T0 = void, T1 = void, T2 = void> extends NSBlockOperation {}
  namespace _NSFCUncancellableBlockOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBlockOperation {
      alloc<R = _NSFCUncancellableBlockOperation>(): R;
      new: <R = _NSFCUncancellableBlockOperation>() => R;
    }
  }
}
