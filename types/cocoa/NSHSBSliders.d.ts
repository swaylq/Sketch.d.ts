/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHSBSliders<T0 = void, T1 = void, T2 = void> extends NSColorSpaceSliders {
    worksWhenModal<R = boolean>(): R;
    viewSizeChanged<R = void, P0 = unknown>(_viewSizeChanged: P0): R;
    hsbView<R = NSView>(): R;
    setHsbView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace NSHSBSliders {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSColorSpaceSliders {
      alloc<R = NSHSBSliders>(): R;
      new: <R = NSHSBSliders>() => R;
    }
  }
}

declare const NSHSBSliders: cocoa.NSHSBSliders.CLASS;
