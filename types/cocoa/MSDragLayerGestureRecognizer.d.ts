/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDragLayerGestureRecognizer<T0 = void, T1 = void, T2 = void> extends MSDragToMoveOrCopyGestureRecognizer {
    shouldSnap<R = boolean>(): R;
  }
  namespace MSDragLayerGestureRecognizer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDragToMoveOrCopyGestureRecognizer {
      alloc<R = MSDragLayerGestureRecognizer>(): R;
      new: <R = MSDragLayerGestureRecognizer>() => R;
    }
  }
}

declare const MSDragLayerGestureRecognizer: cocoa.MSDragLayerGestureRecognizer.CLASS;
