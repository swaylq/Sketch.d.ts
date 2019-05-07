/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTextFieldPlugin<T0 = void, T1 = void, T2 = void> extends _NSValueBinderPlugin {
    editingColorAdjustableObject<R = unknown, P0 = unknown>(_editingColorAdjustableObject: P0): R;
    acceptsStyleChanges<R = boolean>(): R;
  }
  namespace _NSTextFieldPlugin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSValueBinderPlugin {
      alloc<R = _NSTextFieldPlugin>(): R;
      new: <R = _NSTextFieldPlugin>() => R;
    }
  }
}
