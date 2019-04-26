/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSplitViewItemPrivateData<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
  }
  namespace _NSSplitViewItemPrivateData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSSplitViewItemPrivateData>(): R;
      new: <R = _NSSplitViewItemPrivateData>() => R;
    }
  }
}
