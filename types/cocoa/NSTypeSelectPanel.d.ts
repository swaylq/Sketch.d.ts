/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTypeSelectPanel<T0 = void, T1 = void, T2 = void> extends NSPanel {
    setCurrentSearchScreenRect<R = void, P0 = CGRect>(_setCurrentSearchScreenRect: P0): R;
    _ensureCurrentSearchTextField<R = void>(): R;
    currentSearch<R = NSString>(): R;
    setCurrentSearch<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSTypeSelectPanel {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPanel {
      alloc<R = NSTypeSelectPanel>(): R;
      new: <R = NSTypeSelectPanel>() => R;
    }
  }
}

declare const NSTypeSelectPanel: cocoa.NSTypeSelectPanel.CLASS;
