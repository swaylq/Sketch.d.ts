/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWindowSpringLoadingController<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace _NSWindowSpringLoadingController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSWindowSpringLoadingController>(): R;
      new: <R = _NSWindowSpringLoadingController>() => R;
      _sharedSpringLoadingController<R = unknown>(): R;
    }
  }
}
