/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDisplayOperationStack<T0 = void, T1 = void, T2 = void> extends NSObject {
    setThreadIsViewDrawOperationThread<R = void, P0 = boolean>(_setThreadIsViewDrawOperationThread: P0): R;
    threadIsViewDrawOperationThread<R = boolean>(): R;
    blockOnDrawOperationsForAncestorsOfView<R = void, P0 = unknown>(_blockOnDrawOperationsForAncestorsOfView: P0): R;
    blockOnAllRemainingDrawOperations<R = void>(): R;
    queueDrawOperationForView_rect_rectSet_windowRegion_options<R = void, P0 = unknown, P1 = CGRect, P2 = unknown, P3 = unknown, P4 = number>(_queueDrawOperationForView: P0, _rect: P1, _rectSet: P2, _windowRegion: P3, _options: P4): R;
    setAttemptingConcurrentViewDrawing<R = void, P0 = boolean>(_setAttemptingConcurrentViewDrawing: P0): R;
    attemptingConcurrentViewDrawing<R = boolean>(): R;
    description<R = unknown>(): R;
    totalWindowRegionBeingDrawnByEnclosingDisplayOperations<R = unknown>(): R;
    count<R = number>(): R;
    rectSetBeingDrawnForView<R = unknown, P0 = unknown>(_rectSetBeingDrawnForView: P0): R;
    setRectSetBeingDrawn_forView<R = void, P0 = unknown, P1 = unknown>(_setRectSetBeingDrawn: P0, _forView: P1): R;
    windowRegionBeingDrawn<R = unknown>(): R;
    windowBeingDrawn<R = unknown>(): R;
    clipRootView<R = unknown>(): R;
    viewWillDrawOperationIsActive<R = boolean>(): R;
    exitViewWillDrawOperationForWindow<R = void, P0 = unknown>(_exitViewWillDrawOperationForWindow: P0): R;
    enterViewWillDrawOperationForWindow_windowRegion_clipRootView<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_enterViewWillDrawOperationForWindow: P0, _windowRegion: P1, _clipRootView: P2): R;
    exitDisplayOperationForWindow<R = void, P0 = unknown>(_exitDisplayOperationForWindow: P0): R;
    enterDisplayOperationForWindow_windowRegion<R = void, P0 = unknown, P1 = unknown>(_enterDisplayOperationForWindow: P0, _windowRegion: P1): R;
    dealloc<R = void>(): R;
  }
  namespace _NSDisplayOperationStack {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSDisplayOperationStack>(): R;
      new: <R = _NSDisplayOperationStack>() => R;
      anyThreadHasActiveDisplayOperationForWindow<R = boolean, P0 = unknown>(_anyThreadHasActiveDisplayOperationForWindow: P0): R;
      currentThreadDisplayOperationStack<R = unknown>(): R;
      initialize<R = void>(): R;
    }
  }
}
