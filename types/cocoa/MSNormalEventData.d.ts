/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNormalEventData<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    reset<R = void>(): R;
    snapperData<R = MSSnapperData>(): R;
    setSnapperData<R = void, P0 = MSSnapperData>(_v: P0): R;
    resizingHandle<R = number>(): R;
    setResizingHandle<R = void, P0 = number>(_v: P0): R;
    dragMode<R = number>(): R;
    setDragMode<R = void, P0 = number>(_v: P0): R;
    originalScrollOrigin<R = CGPoint>(): R;
    setOriginalScrollOrigin<R = void, P0 = CGPoint>(_v: P0): R;
    midPoint<R = CGPoint>(): R;
    setMidPoint<R = void, P0 = CGPoint>(_v: P0): R;
    mouseDown<R = CGPoint>(): R;
    setMouseDown<R = void, P0 = CGPoint>(_v: P0): R;
    didMouseDown<R = boolean>(): R;
    setDidMouseDown<R = void, P0 = boolean>(_v: P0): R;
    hasMultipleTouches<R = boolean>(): R;
    setHasMultipleTouches<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSNormalEventData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSNormalEventData>(): R;
      new: <R = MSNormalEventData>() => R;
    }
  }
}

declare const MSNormalEventData: cocoa.MSNormalEventData.CLASS;
