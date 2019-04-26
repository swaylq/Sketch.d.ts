/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDisplayOperation<T0 = void, T1 = void, T2 = void> extends NSObject {
    drawOperationForView<R = unknown, P0 = unknown>(_drawOperationForView: P0): R;
    dequeueViewDrawOperation<R = void, P0 = unknown>(_dequeueViewDrawOperation: P0): R;
    queueViewDrawOperation<R = void, P0 = unknown>(_queueViewDrawOperation: P0): R;
    viewDrawOperationQueue<R = unknown>(): R;
    blockOnDrawOperationsForAncestorsOfView<R = void, P0 = unknown>(_blockOnDrawOperationsForAncestorsOfView: P0): R;
    blockOnAllRemainingDrawOperations<R = void>(): R;
    queueDrawOperationForView_rect_rectSet_windowRegion_options<R = void, P0 = unknown, P1 = CGRect, P2 = unknown, P3 = unknown, P4 = number>(_queueDrawOperationForView: P0, _rect: P1, _rectSet: P2, _windowRegion: P3, _options: P4): R;
    setAttemptingConcurrentViewDrawing<R = void, P0 = boolean>(_setAttemptingConcurrentViewDrawing: P0): R;
    attemptingConcurrentViewDrawing<R = boolean>(): R;
    setClipRootView<R = void, P0 = unknown>(_setClipRootView: P0): R;
    clipRootView<R = unknown>(): R;
    setViewWillDrawOperation<R = void, P0 = boolean>(_setViewWillDrawOperation: P0): R;
    isViewWillDrawOperation<R = boolean>(): R;
    rectSetBeingDrawnForView<R = unknown, P0 = unknown>(_rectSetBeingDrawnForView: P0): R;
    setRectSetBeingDrawn_forView<R = void, P0 = unknown, P1 = unknown>(_setRectSetBeingDrawn: P0, _forView: P1): R;
    windowRegion<R = unknown>(): R;
    window<R = unknown>(): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithWindow_windowRegion<R = unknown, P0 = unknown, P1 = unknown>(_initWithWindow: P0, _windowRegion: P1): R;
  }
  namespace _NSDisplayOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSDisplayOperation>(): R;
      new: <R = _NSDisplayOperation>() => R;
    }
  }
}
