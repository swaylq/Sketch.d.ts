/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabViewButtons<T0 = void, T1 = void, T2 = void> extends NSView {
    allowsVibrancy<R = boolean>(): R;
    isFlipped<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    tabView<R = NSTabView>(): R;
    setTabView<R = void, P0 = NSTabView>(_v: P0): R;
  }
  namespace NSTabViewButtons {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSTabViewButtons>(): R;
      new: <R = NSTabViewButtons>() => R;
    }
  }
}

declare const NSTabViewButtons: cocoa.NSTabViewButtons.CLASS;
