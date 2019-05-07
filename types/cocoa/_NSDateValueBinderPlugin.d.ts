/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDateValueBinderPlugin<T0 = void, T1 = void, T2 = void> extends _NSValueBinderPlugin {
    editingColorAdjustableObject<R = unknown, P0 = unknown>(_editingColorAdjustableObject: P0): R;
  }
  namespace _NSDateValueBinderPlugin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSValueBinderPlugin {
      alloc<R = _NSDateValueBinderPlugin>(): R;
      new: <R = _NSDateValueBinderPlugin>() => R;
    }
  }
}
