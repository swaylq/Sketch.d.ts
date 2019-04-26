/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowBinder<T0 = void, T1 = void, T2 = void> extends NSViewStateBinder {
    windowDidResize<R = void, P0 = unknown>(_windowDidResize: P0): R;
    window_didChangeToVisibleState<R = void, P0 = unknown, P1 = boolean>(_window: P0, _didChangeToVisibleState: P1): R;
    _updateWindow_withVisibilityState<R = void, P0 = unknown, P1 = unknown>(__updateWindow: P0, _withVisibilityState: P1): R;
    _updateWindow_withWidth_height<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__updateWindow: P0, _withWidth: P1, _height: P2): R;
  }
  namespace NSWindowBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewStateBinder {
      alloc<R = NSWindowBinder>(): R;
      new: <R = NSWindowBinder>() => R;
      _applicationWillTerminate<R = void, P0 = unknown>(__applicationWillTerminate: P0): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSWindowBinder: cocoa.NSWindowBinder.CLASS;
