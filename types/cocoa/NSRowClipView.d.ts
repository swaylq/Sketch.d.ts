/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRowClipView<T0 = void, T1 = void, T2 = void> extends NSClipView, CAAnimationDelegateProtocol {
    _updateBoundsForSize<R = void, P0 = CGSize>(__updateBoundsForSize: P0): R;
    _useZinLayerBacking<R = boolean>(): R;
    shouldAdjustBounds<R = boolean>(): R;
    setShouldAdjustBounds<R = void, P0 = boolean>(_v: P0): R;
    fromYPosition<R = number>(): R;
    setFromYPosition<R = void, P0 = number>(_v: P0): R;
    animationFinishedHandler<R = CDUnknownBlockType>(): R;
    setAnimationFinishedHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    targetFrame<R = CGRect>(): R;
    setTargetFrame<R = void, P0 = CGRect>(_v: P0): R;
    forDeletion<R = boolean>(): R;
    setForDeletion<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSRowClipView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSClipView, CAAnimationDelegateProtocol {
      alloc<R = NSRowClipView>(): R;
      new: <R = NSRowClipView>() => R;
    }
  }
}

declare const NSRowClipView: cocoa.NSRowClipView.CLASS;
