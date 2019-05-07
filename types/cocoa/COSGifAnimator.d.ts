/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface COSGifAnimator<T0 = void, T1 = void, T2 = void> extends NSObject {
    fps<R = CGFloat>(): R;
    setFps<R = void, P0 = CGFloat>(_v: P0): R;
    seconds<R = CGFloat>(): R;
    setSeconds<R = void, P0 = CGFloat>(_v: P0): R;
    size<R = NSSize>(): R;
    setSize<R = void, P0 = NSSize>(_v: P0): R;
  }
  namespace COSGifAnimator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = COSGifAnimator>(): R;
      new: <R = COSGifAnimator>() => R;
    }
  }
}

declare const COSGifAnimator: cocoa.COSGifAnimator.CLASS;
