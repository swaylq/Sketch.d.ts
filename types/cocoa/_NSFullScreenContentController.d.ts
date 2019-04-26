/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenContentController<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace _NSFullScreenContentController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSFullScreenContentController>(): R;
      new: <R = _NSFullScreenContentController>() => R;
      _defaultPresentationOptions<R = number>(): R;
    }
  }
}
