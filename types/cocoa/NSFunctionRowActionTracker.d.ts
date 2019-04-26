/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFunctionRowActionTracker<T0 = void, T1 = void, T2 = void> extends NSObject {
    _ns_logAction_ns<R = void, P0 = unknown>(__ns_logAction_ns: P0): R;
    _log<R = void>(): R;
    dealloc<R = void>(): R;
    originalAction<R = string>(): R;
    setOriginalAction<R = void, P0 = string>(_v: P0): R;
    originalTarget<R = unknown>(): R;
    setOriginalTarget<R = void, P0 = unknown>(_v: P0): R;
    control<R = NSControl>(): R;
    setControl<R = void, P0 = NSControl>(_v: P0): R;
    recognizer<R = NSGestureRecognizer>(): R;
    setRecognizer<R = void, P0 = NSGestureRecognizer>(_v: P0): R;
    touch<R = NSTouch>(): R;
    setTouch<R = void, P0 = NSTouch>(_v: P0): R;
  }
  namespace NSFunctionRowActionTracker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSFunctionRowActionTracker>(): R;
      new: <R = NSFunctionRowActionTracker>() => R;
      _frameForElement<R = CGRect, P0 = unknown>(__frameForElement: P0): R;
      _titleForElement<R = unknown, P0 = unknown>(__titleForElement: P0): R;
    }
  }
}

declare const NSFunctionRowActionTracker: cocoa.NSFunctionRowActionTracker.CLASS;
