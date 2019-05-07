/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLazyBrowserCell<T0 = void, T1 = void, T2 = void> extends NSBrowserCell {
    setControlView<R = void, P0 = unknown>(_setControlView: P0): R;
    isLoaded<R = boolean>(): R;
    setLoaded<R = void, P0 = boolean>(_setLoaded: P0): R;
  }
  namespace NSLazyBrowserCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBrowserCell {
      alloc<R = NSLazyBrowserCell>(): R;
      new: <R = NSLazyBrowserCell>() => R;
      lazyBrowserCell<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSLazyBrowserCell: cocoa.NSLazyBrowserCell.CLASS;
