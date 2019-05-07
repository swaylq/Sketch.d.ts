/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarItemPlaceholder<T0 = void, T1 = void, T2 = void> extends NSObject {
    _hasCustomVisibilityPriority<R = boolean>(): R;
    visibilityPriority<R = number>(): R;
    setVisibilityPriority<R = void, P0 = number>(_setVisibilityPriority: P0): R;
    toolbar<R = unknown>(): R;
    _toolbar<R = unknown>(): R;
    _setToolbar<R = void, P0 = unknown>(__setToolbar: P0): R;
    itemIdentifier<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithItemIdentifier<R = unknown, P0 = unknown>(_initWithItemIdentifier: P0): R;
    propertyListRepresentation<R = unknown>(): R;
    setPropertyListRepresentation<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace _NSToolbarItemPlaceholder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSToolbarItemPlaceholder>(): R;
      new: <R = _NSToolbarItemPlaceholder>() => R;
    }
  }
}
