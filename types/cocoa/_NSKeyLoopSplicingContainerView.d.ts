/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSKeyLoopSplicingContainerView<T0 = void, T1 = void, T2 = void> extends NSView {
    lastKeyView<R = NSView>(): R;
    setLastKeyView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace _NSKeyLoopSplicingContainerView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSKeyLoopSplicingContainerView>(): R;
      new: <R = _NSKeyLoopSplicingContainerView>() => R;
    }
  }
}
