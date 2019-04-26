/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomBlurEventHandler<T0 = void, T1 = void, T2 = void> extends MSPointsEventHandler {
    blurStyle<R = MSStyleBlur>(): R;
    setBlurStyle<R = void, P0 = MSStyleBlur>(_v: P0): R;
  }
  namespace MSZoomBlurEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSPointsEventHandler {
      alloc<R = MSZoomBlurEventHandler>(): R;
      new: <R = MSZoomBlurEventHandler>() => R;
    }
  }
}

declare const MSZoomBlurEventHandler: cocoa.MSZoomBlurEventHandler.CLASS;
