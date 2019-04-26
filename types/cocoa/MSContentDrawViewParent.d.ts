/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSContentDrawViewParent<T0 = void, T1 = void, T2 = void> extends NSView {
    cxx_destruct<R = void>(): R;
    isOpaque<R = boolean>(): R;
    contentDrawView<R = MSContentDrawView>(): R;
    setContentDrawView<R = void, P0 = MSContentDrawView>(_v: P0): R;
  }
  namespace MSContentDrawViewParent {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSContentDrawViewParent>(): R;
      new: <R = MSContentDrawViewParent>() => R;
    }
  }
}

declare const MSContentDrawViewParent: cocoa.MSContentDrawViewParent.CLASS;
