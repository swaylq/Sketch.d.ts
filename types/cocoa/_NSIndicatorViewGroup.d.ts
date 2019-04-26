/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSIndicatorViewGroup<T0 = void, T1 = void, T2 = void> extends NSView {
    isFlipped<R = boolean>(): R;
  }
  namespace _NSIndicatorViewGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSIndicatorViewGroup>(): R;
      new: <R = _NSIndicatorViewGroup>() => R;
    }
  }
}
