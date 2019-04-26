/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOrderOutAnimationProxyWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    _orderOutAnimationType<R = number>(): R;
    constrainFrameRect_toScreen<R = CGRect, P0 = CGRect, P1 = unknown>(_constrainFrameRect: P0, _toScreen: P1): R;
    _ignoreForFullScreenTransitionSnapshot<R = boolean>(): R;
    _ignoreForFullScreenTransition<R = boolean>(): R;
    accessibilityIsIgnored<R = boolean>(): R;
    initWithSnapshotOfWindow<R = unknown, P0 = unknown>(_initWithSnapshotOfWindow: P0): R;
  }
  namespace _NSOrderOutAnimationProxyWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = _NSOrderOutAnimationProxyWindow>(): R;
      new: <R = _NSOrderOutAnimationProxyWindow>() => R;
    }
  }
}
