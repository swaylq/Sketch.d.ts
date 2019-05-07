/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSStoryboardPrivateData<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
  }
  namespace _NSStoryboardPrivateData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSStoryboardPrivateData>(): R;
      new: <R = _NSStoryboardPrivateData>() => R;
    }
  }
}
