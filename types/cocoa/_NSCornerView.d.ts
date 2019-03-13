/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCornerView<T = any> extends NSView {
    cxx_destruct<R = void>(): R;
    isOpaque<R = boolean>(): R;
    _drawingEndSeparator<R = boolean>(): R;
    allowsVibrancy<R = boolean>(): R;
    _vibrantBlendingStyleForSubtree<R = number>(): R;
    fillRect<R = CGRect>(): R;
    enclosingScrollView<R = unknown>(): R;
    _addOrRemoveBlurViewIfNecessary<R = void>(): R;
    _invalidateHeaderDependentDrawing<R = void>(): R;
    setHidden<R = void, P0 = boolean>(_setHidden: P0): R;
    setFrame<R = void, P0 = CGRect>(_setFrame: P0): R;
  }
  namespace classes {
    export interface _NSCornerView<T = any> extends NSView {
      alloc<R = _NSCornerView>(): R;
      new: <R = _NSCornerView>() => R;
    }
  }
}
