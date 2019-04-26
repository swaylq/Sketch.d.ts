/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCPopoverContentView<T0 = void, T1 = void, T2 = void> extends NSView {
    cxx_destruct<R = void>(): R;
    backgroundPath<R = unknown>(): R;
    availableContentRect<R = CGRect>(): R;
    cancelOperation<R = void, P0 = unknown>(_cancelOperation: P0): R;
    arrowPosition<R = number>(): R;
    setArrowPosition<R = void, P0 = number>(_v: P0): R;
    arrowEdge<R = number>(): R;
    setArrowEdge<R = void, P0 = number>(_v: P0): R;
    backgroundColor<R = NSColor>(): R;
    setBackgroundColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace BCPopoverContentView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = BCPopoverContentView>(): R;
      new: <R = BCPopoverContentView>() => R;
    }
  }
}

declare const BCPopoverContentView: cocoa.BCPopoverContentView.CLASS;
