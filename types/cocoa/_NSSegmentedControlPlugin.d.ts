/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSegmentedControlPlugin<T0 = void, T1 = void, T2 = void> extends _NSSelectionBinderPlugin {}
  namespace _NSSegmentedControlPlugin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSSelectionBinderPlugin {
      alloc<R = _NSSegmentedControlPlugin>(): R;
      new: <R = _NSSegmentedControlPlugin>() => R;
    }
  }
}
