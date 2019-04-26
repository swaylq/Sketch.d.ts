/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSClipViewOverhangView<T0 = void, T1 = void, T2 = void> extends NSView {
    isFlipped<R = boolean>(): R;
  }
  namespace _NSClipViewOverhangView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSClipViewOverhangView>(): R;
      new: <R = _NSClipViewOverhangView>() => R;
    }
  }
}
