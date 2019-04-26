/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSColorPanelToolbarItem<T0 = void, T1 = void, T2 = void> extends NSToolbarItem {
    dealloc<R = void>(): R;
    representedObject<R = unknown>(): R;
    setRepresentedObject<R = void, P0 = unknown>(_setRepresentedObject: P0): R;
  }
  namespace _NSColorPanelToolbarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSToolbarItem {
      alloc<R = _NSColorPanelToolbarItem>(): R;
      new: <R = _NSColorPanelToolbarItem>() => R;
    }
  }
}
