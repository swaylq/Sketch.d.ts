/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSplitViewControllerPrivateData<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    splitViewItems<R = NSMutableArray>(): R;
    setSplitViewItems<R = void, P0 = NSMutableArray>(_v: P0): R;
  }
  namespace _NSSplitViewControllerPrivateData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSSplitViewControllerPrivateData>(): R;
      new: <R = _NSSplitViewControllerPrivateData>() => R;
    }
  }
}
