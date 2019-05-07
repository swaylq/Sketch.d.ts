/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBaselineView<T0 = void, T1 = void, T2 = void> extends NSView {
    realBaselineView<R = NSView>(): R;
    setRealBaselineView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace NSBaselineView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSBaselineView>(): R;
      new: <R = NSBaselineView>() => R;
    }
  }
}

declare const NSBaselineView: cocoa.NSBaselineView.CLASS;
