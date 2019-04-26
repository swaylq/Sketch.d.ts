/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSEventHandlerManager<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    recordEvent<R = void, P0 = unknown>(_recordEvent: P0): R;
    sendMouseMovedEvent<R = void, P0 = unknown>(_sendMouseMovedEvent: P0): R;
    sendMouseUpEvent<R = void, P0 = unknown>(_sendMouseUpEvent: P0): R;
    sendMouseDraggedEvent<R = void, P0 = unknown>(_sendMouseDraggedEvent: P0): R;
    sendMouseDownEvent<R = void, P0 = unknown>(_sendMouseDownEvent: P0): R;
    drawInRect_context<R = void, P0 = CGRect, P1 = unknown>(_drawInRect: P0, _context: P1): R;
    setCurrentHandler_force<R = void, P0 = unknown, P1 = boolean>(_setCurrentHandler: P0, _force: P1): R;
    switchToEventHandlerClass<R = unknown, P0 = unknown>(_switchToEventHandlerClass: P0): R;
    toggleHandlerClass<R = unknown, P0 = unknown>(_toggleHandlerClass: P0): R;
    handlerForClass<R = unknown, P0 = unknown>(_handlerForClass: P0): R;
    initWithDelegate<R = unknown, P0 = unknown>(_initWithDelegate: P0): R;
    lastEventType<R = number>(): R;
    setLastEventType<R = void, P0 = number>(_v: P0): R;
    lastMouseDownClickCount<R = number>(): R;
    setLastMouseDownClickCount<R = void, P0 = number>(_v: P0): R;
    normalHandler<R = MSNormalEventHandler>(): R;
    setNormalHandler<R = void, P0 = MSNormalEventHandler>(_v: P0): R;
    currentHandler<R = MSEventHandler>(): R;
    setCurrentHandler<R = void, P0 = MSEventHandler>(_v: P0): R;
    delegate<R = MSEventHandlerManagerDelegate>(): R;
    setDelegate<R = void, P0 = MSEventHandlerManagerDelegate>(_v: P0): R;
    document<R = MSDocument>(): R;
    setDocument<R = void, P0 = MSDocument>(_v: P0): R;
  }
  namespace MSEventHandlerManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSEventHandlerManager>(): R;
      new: <R = MSEventHandlerManager>() => R;
    }
  }
}

declare const MSEventHandlerManager: cocoa.MSEventHandlerManager.CLASS;
