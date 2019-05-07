/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarCustomizationPreviewDebugCursorView<T0 = void, T1 = void, T2 = void> extends NSView {
    isFlipped<R = boolean>(): R;
    cursorPoint<R = CGPoint>(): R;
    setCursorPoint<R = void, P0 = CGPoint>(_v: P0): R;
  }
  namespace _NSTouchBarCustomizationPreviewDebugCursorView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSTouchBarCustomizationPreviewDebugCursorView>(): R;
      new: <R = _NSTouchBarCustomizationPreviewDebugCursorView>() => R;
    }
  }
}
