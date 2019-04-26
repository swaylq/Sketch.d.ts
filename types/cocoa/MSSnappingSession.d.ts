/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSnappingSession<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    initWithType_item<R = unknown, P0 = number, P1 = unknown>(_initWithType: P0, _item: P1): R;
    snappableGuidesMask<R = number>(): R;
    setSnappableGuidesMask<R = void, P0 = number>(_v: P0): R;
    shouldSnapToLayers<R = boolean>(): R;
    setShouldSnapToLayers<R = void, P0 = boolean>(_v: P0): R;
    corner<R = number>(): R;
    setCorner<R = void, P0 = number>(_v: P0): R;
    item<R = MSSnapItem>(): R;
    allowedAxes<R = number>(): R;
    setAllowedAxes<R = void, P0 = number>(_v: P0): R;
    zoomScale<R = number>(): R;
    setZoomScale<R = void, P0 = number>(_v: P0): R;
    snapDistance<R = number>(): R;
    setSnapDistance<R = void, P0 = number>(_v: P0): R;
    sessionType<R = number>(): R;
    snappableAttributes<R = NSIndexSet>(): R;
    snappableEdges<R = number>(): R;
    layer<R = MSLayer>(): R;
    effectiveSnapDistance<R = number>(): R;
    layers<R = NSArray>(): R;
  }
  namespace MSSnappingSession {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSSnappingSession>(): R;
      new: <R = MSSnappingSession>() => R;
      keySnappingSessionWithItem<R = unknown, P0 = unknown>(_keySnappingSessionWithItem: P0): R;
      resizeSnappingSessionWithItem_corner<R = unknown, P0 = unknown, P1 = number>(_resizeSnappingSessionWithItem: P0, _corner: P1): R;
      moveSnappingSessionWithItem<R = unknown, P0 = unknown>(_moveSnappingSessionWithItem: P0): R;
    }
  }
}

declare const MSSnappingSession: cocoa.MSSnappingSession.CLASS;
