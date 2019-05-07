/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOrderOutAnimationProxyWindowContentView<T0 = void, T1 = void, T2 = void> extends NSView {
    setSnapshot<R = void, P0 = unknown>(_setSnapshot: P0): R;
  }
  namespace _NSOrderOutAnimationProxyWindowContentView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSOrderOutAnimationProxyWindowContentView>(): R;
      new: <R = _NSOrderOutAnimationProxyWindowContentView>() => R;
    }
  }
}
