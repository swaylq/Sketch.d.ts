/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSViewPort<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    zoomValue<R = number>(): R;
    setZoomValue<R = void, P0 = number>(_v: P0): R;
    scrollOrigin<R = CGPoint>(): R;
    setScrollOrigin<R = void, P0 = CGPoint>(_v: P0): R;
  }
  namespace MSViewPort {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSViewPort>(): R;
      new: <R = MSViewPort>() => R;
      cappedZoom<R = number, P0 = number>(_cappedZoom: P0): R;
      minimumZoomValue<R = number>(): R;
      maximumZoomValue<R = number>(): R;
      viewPortWithScrollOrigin_zoom<R = unknown, P0 = CGPoint, P1 = number>(_viewPortWithScrollOrigin: P0, _zoom: P1): R;
    }
  }
}

declare const MSViewPort: cocoa.MSViewPort.CLASS;
