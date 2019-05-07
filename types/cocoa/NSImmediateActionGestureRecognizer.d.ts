/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImmediateActionGestureRecognizer<T0 = void, T1 = void, T2 = void> extends NSGestureRecognizer {
    _startEvent<R = unknown>(): R;
    _forceClickMonitor<R = unknown>(): R;
    animationProgress<R = number>(): R;
    setAnimationController<R = void, P0 = unknown>(_setAnimationController: P0): R;
    animationController<R = unknown>(): R;
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
    _delegate<R = unknown>(): R;
    delegate<R = unknown>(): R;
    setStyle<R = void, P0 = number>(_setStyle: P0): R;
    style<R = number>(): R;
  }
  namespace NSImmediateActionGestureRecognizer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSGestureRecognizer {
      alloc<R = NSImmediateActionGestureRecognizer>(): R;
      new: <R = NSImmediateActionGestureRecognizer>() => R;
    }
  }
}

declare const NSImmediateActionGestureRecognizer: cocoa.NSImmediateActionGestureRecognizer.CLASS;
