/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSViewPort<T = any> extends cocoa.NSObject {
    description<R = unknown>(): R;
    zoomValue<R = number>(): R;
    setZoomValue<R = void, P0 = number>(_v: P0): R;
    scrollOrigin<R = cocoa.CGPoint>(): R;
    setScrollOrigin<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
  }
  namespace classes {
    export interface MSViewPort<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSViewPort>(): R;
      new: <R = MSViewPort>() => R;
      cappedZoom<R = number, P0 = number>(_cappedZoom: P0): R;
      minimumZoomValue<R = number>(): R;
      maximumZoomValue<R = number>(): R;
      viewPortWithScrollOrigin_zoom<R = unknown, P0 = cocoa.CGPoint, P1 = number>(_viewPortWithScrollOrigin: P0, _zoom: P1): R;
    }
  }
}

declare const MSViewPort: cocoa.classes.MSViewPort;
