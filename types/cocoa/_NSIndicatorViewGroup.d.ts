/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSIndicatorViewGroup<T = any> extends NSView {
    isFlipped<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSIndicatorViewGroup<T = any> extends NSView {
      alloc<R = _NSIndicatorViewGroup>(): R;
      new: <R = _NSIndicatorViewGroup>() => R;
    }
  }
}