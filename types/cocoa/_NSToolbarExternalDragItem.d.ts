/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarExternalDragItem<T0 = void, T1 = void, T2 = void> extends NSToolbarItem {
    dealloc<R = void>(): R;
    externalItems<R = NSArray>(): R;
    setExternalItems<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace _NSToolbarExternalDragItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSToolbarItem {
      alloc<R = _NSToolbarExternalDragItem>(): R;
      new: <R = _NSToolbarExternalDragItem>() => R;
    }
  }
}
