/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSSeparatorInspectorBarItem<T0 = void, T1 = void, T2 = void> extends NSInspectorBarItem {
    view<R = unknown>(): R;
  }
  namespace __NSSeparatorInspectorBarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSInspectorBarItem {
      alloc<R = __NSSeparatorInspectorBarItem>(): R;
      new: <R = __NSSeparatorInspectorBarItem>() => R;
    }
  }
}
