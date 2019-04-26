/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomTool<T0 = void, T1 = void, T2 = void> extends NSObject {
    zoomValueAfterZoomOutUnCapped<R = number>(): R;
    zoomValueAfterZoomOut<R = number>(): R;
    zoomValueAfterZoomInUnCapped<R = number>(): R;
    zoomValueAfterZoomIn<R = number>(): R;
    drawWithScrollOrigin<R = void, P0 = CGPoint>(_drawWithScrollOrigin: P0): R;
    shouldZoomIntoRect<R = boolean>(): R;
    mouseUp_inView<R = void, P0 = unknown, P1 = unknown>(_mouseUp: P0, _inView: P1): R;
    zoomRect<R = CGRect>(): R;
    applyZoomCursor<R = void>(): R;
    mouseDragged_inView<R = void, P0 = unknown, P1 = unknown>(_mouseDragged: P0, _inView: P1): R;
    mouseMoved<R = void>(): R;
    mouseDown_inView<R = void, P0 = unknown, P1 = unknown>(_mouseDown: P0, _inView: P1): R;
    flagsChanged<R = void>(): R;
    zoomPointFromEvent_inView<R = CGPoint, P0 = unknown, P1 = unknown>(_zoomPointFromEvent: P0, _inView: P1): R;
    endZoomToolModeInView<R = void, P0 = unknown>(_endZoomToolModeInView: P0): R;
    beginZoomToolModeActivatedByKey<R = void, P0 = boolean>(_beginZoomToolModeActivatedByKey: P0): R;
    activatedByKey<R = boolean>(): R;
    active<R = boolean>(): R;
    zoomValue<R = number>(): R;
    setZoomValue<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSZoomTool {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSZoomTool>(): R;
      new: <R = MSZoomTool>() => R;
    }
  }
}

declare const MSZoomTool: cocoa.MSZoomTool.CLASS;
