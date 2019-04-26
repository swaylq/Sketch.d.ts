/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSContentDrawViewDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    zoomValue<R = number>(): R;
    setZoomValue<R = void, P0 = number>(_v: P0): R;
    scrollOrigin<R = CGPoint>(): R;
    setScrollOrigin<R = void, P0 = CGPoint>(_v: P0): R;
  }
  namespace MSContentDrawViewDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
