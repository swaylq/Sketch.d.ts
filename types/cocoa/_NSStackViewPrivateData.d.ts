/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSStackViewPrivateData<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace _NSStackViewPrivateData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSStackViewPrivateData>(): R;
      new: <R = _NSStackViewPrivateData>() => R;
    }
  }
}
