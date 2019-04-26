/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCPopoverWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    arrowView<R = unknown>(): R;
    collectionBehavior<R = number>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
    sendEvent<R = void, P0 = unknown>(_sendEvent: P0): R;
    setFrame_display_animate<R = void, P0 = CGRect, P1 = boolean, P2 = boolean>(_setFrame: P0, _display: P1, _animate: P2): R;
    resignMainWindow<R = void>(): R;
    initWithContentRect<R = unknown, P0 = CGRect>(_initWithContentRect: P0): R;
    arrowPosition<R = number>(): R;
    setArrowPosition<R = void, P0 = number>(_v: P0): R;
    arrowEdge<R = number>(): R;
    setArrowEdge<R = void, P0 = number>(_v: P0): R;
  }
  namespace BCPopoverWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = BCPopoverWindow>(): R;
      new: <R = BCPopoverWindow>() => R;
      attachedWindowWithView<R = unknown, P0 = unknown>(_attachedWindowWithView: P0): R;
    }
  }
}

declare const BCPopoverWindow: cocoa.BCPopoverWindow.CLASS;
