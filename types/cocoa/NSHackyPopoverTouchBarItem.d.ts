/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHackyPopoverTouchBarItem<T0 = void, T1 = void, T2 = void> extends NSPopoverTouchBarItem {
    visible<R = boolean>(): R;
    setVisible<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSHackyPopoverTouchBarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopoverTouchBarItem {
      alloc<R = NSHackyPopoverTouchBarItem>(): R;
      new: <R = NSHackyPopoverTouchBarItem>() => R;
    }
  }
}

declare const NSHackyPopoverTouchBarItem: cocoa.NSHackyPopoverTouchBarItem.CLASS;
