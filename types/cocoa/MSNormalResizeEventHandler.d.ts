/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNormalResizeEventHandler<T0 = void, T1 = void, T2 = void> extends MSNormalBaseEventHandler {
    oppositeCorner<R = number>(): R;
    updateResize<R = void, P0 = unknown>(_updateResize: P0): R;
    resizeLayer<R = void, P0 = unknown>(_resizeLayer: P0): R;
    finishResizing<R = void>(): R;
    prepareForResize<R = void>(): R;
    resizeGestureRecognizer<R = MSDragGestureRecognizer>(): R;
    resizeSession<R = _TtC17SketchControllers15MSResizeSession>(): R;
    eventData<R = MSNormalEventData>(): R;
    setEventData<R = void, P0 = MSNormalEventData>(_v: P0): R;
    snappingSession<R = MSSnappingSession>(): R;
    setSnappingSession<R = void, P0 = MSSnappingSession>(_v: P0): R;
  }
  namespace MSNormalResizeEventHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSNormalBaseEventHandler {
      alloc<R = MSNormalResizeEventHandler>(): R;
      new: <R = MSNormalResizeEventHandler>() => R;
    }
  }
}

declare const MSNormalResizeEventHandler: cocoa.MSNormalResizeEventHandler.CLASS;
