/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDragToSelectGestureRecognizer<T0 = void, T1 = void, T2 = void> extends MSDragGestureRecognizer {
    selectionRect<R = CGRect>(): R;
    initialSelection<R = NSArray>(): R;
    setInitialSelection<R = void, P0 = NSArray>(_v: P0): R;
    selectionExtensionMask<R = number>(): R;
    setSelectionExtensionMask<R = void, P0 = number>(_v: P0): R;
    extendSelection<R = boolean>(): R;
  }
  namespace MSDragToSelectGestureRecognizer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDragGestureRecognizer {
      alloc<R = MSDragToSelectGestureRecognizer>(): R;
      new: <R = MSDragToSelectGestureRecognizer>() => R;
    }
  }
}

declare const MSDragToSelectGestureRecognizer: cocoa.MSDragToSelectGestureRecognizer.CLASS;
