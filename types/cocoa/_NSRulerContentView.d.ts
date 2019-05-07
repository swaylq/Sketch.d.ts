/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSRulerContentView<T0 = void, T1 = void, T2 = void> extends NSView {
    isFlipped<R = boolean>(): R;
    rulerView<R = NSRulerView>(): R;
    setRulerView<R = void, P0 = NSRulerView>(_v: P0): R;
  }
  namespace _NSRulerContentView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSRulerContentView>(): R;
      new: <R = _NSRulerContentView>() => R;
    }
  }
}
