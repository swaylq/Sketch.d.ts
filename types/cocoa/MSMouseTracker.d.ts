/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMouseTracker<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    sendAction<R = void>(): R;
    removeTrackingState<R = void, P0 = number>(_removeTrackingState: P0): R;
    addTrackingState<R = void, P0 = number>(_addTrackingState: P0): R;
    flagsChanged<R = void, P0 = unknown>(_flagsChanged: P0): R;
    mouseUp<R = void, P0 = unknown>(_mouseUp: P0): R;
    mouseDragged<R = void, P0 = unknown>(_mouseDragged: P0): R;
    mouseDown<R = void, P0 = unknown>(_mouseDown: P0): R;
    mouseExited<R = void, P0 = unknown>(_mouseExited: P0): R;
    mouseMoved<R = void, P0 = unknown>(_mouseMoved: P0): R;
    mouseEntered<R = void, P0 = unknown>(_mouseEntered: P0): R;
    setLocationWithEvent<R = void, P0 = unknown>(_setLocationWithEvent: P0): R;
    locationInView<R = CGPoint, P0 = unknown>(_locationInView: P0): R;
    initWithTarget_action<R = unknown, P0 = unknown, P1 = string>(_initWithTarget: P0, _action: P1): R;
    modifierFlags<R = number>(): R;
    view<R = NSView>(): R;
    setView<R = void, P0 = NSView>(_v: P0): R;
    trackingState<R = number>(): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    canUpdateCursor<R = boolean>(): R;
  }
  namespace MSMouseTracker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSMouseTracker>(): R;
      new: <R = MSMouseTracker>() => R;
    }
  }
}

declare const MSMouseTracker: cocoa.MSMouseTracker.CLASS;
