/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSafariCAAnimationDelegate<T0 = void, T1 = void, T2 = void> extends NSObject, CAAnimationDelegateProtocol {
    animationDidStopBlock<R = CDUnknownBlockType>(): R;
    setAnimationDidStopBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
  }
  namespace _NSSafariCAAnimationDelegate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, CAAnimationDelegateProtocol {
      alloc<R = _NSSafariCAAnimationDelegate>(): R;
      new: <R = _NSSafariCAAnimationDelegate>() => R;
    }
  }
}
