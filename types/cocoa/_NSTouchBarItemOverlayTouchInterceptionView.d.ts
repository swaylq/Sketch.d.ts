/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarItemOverlayTouchInterceptionView<T0 = void, T1 = void, T2 = void> extends NSView {
    strictInterception<R = boolean>(): R;
    setStrictInterception<R = void, P0 = boolean>(_v: P0): R;
    touchInterceptor<R = CDUnknownBlockType>(): R;
    setTouchInterceptor<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
  }
  namespace _NSTouchBarItemOverlayTouchInterceptionView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSTouchBarItemOverlayTouchInterceptionView>(): R;
      new: <R = _NSTouchBarItemOverlayTouchInterceptionView>() => R;
    }
  }
}
