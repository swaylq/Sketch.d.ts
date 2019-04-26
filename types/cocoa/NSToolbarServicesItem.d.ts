/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarServicesItem<T0 = void, T1 = void, T2 = void> extends NSToolbarItem {
    _computeDefaultMenuFormRepresentation<R = unknown>(): R;
    dealloc<R = void>(): R;
    configureForDisplayMode_andSizeMode<R = void, P0 = number, P1 = number>(_configureForDisplayMode: P0, _andSizeMode: P1): R;
    validate<R = void>(): R;
    initWithItemIdentifier<R = unknown, P0 = unknown>(_initWithItemIdentifier: P0): R;
    representedObject<R = unknown>(): R;
  }
  namespace NSToolbarServicesItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSToolbarItem {
      alloc<R = NSToolbarServicesItem>(): R;
      new: <R = NSToolbarServicesItem>() => R;
    }
  }
}

declare const NSToolbarServicesItem: cocoa.NSToolbarServicesItem.CLASS;
