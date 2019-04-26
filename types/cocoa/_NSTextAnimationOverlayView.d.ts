/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTextAnimationOverlayView<T0 = void, T1 = void, T2 = void> extends NSView {
    isFlipped<R = boolean>(): R;
    glyphRange<R = _NSRange>(): R;
    setGlyphRange<R = void, P0 = _NSRange>(_v: P0): R;
    renderer<R = CDUnknownBlockType>(): R;
    setRenderer<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
  }
  namespace _NSTextAnimationOverlayView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSTextAnimationOverlayView>(): R;
      new: <R = _NSTextAnimationOverlayView>() => R;
    }
  }
}
