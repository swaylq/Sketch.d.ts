/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubber<T0 = void, T1 = void, T2 = void> extends NSView, NSScrollViewDelegateProtocol, NSGestureRecognizerDelegateProtocol {}
  namespace NSScrubber {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, NSScrollViewDelegateProtocol, NSGestureRecognizerDelegateProtocol {
      alloc<R = NSScrubber>(): R;
      new: <R = NSScrubber>() => R;
      texturedBackgroundColor<R = unknown>(): R;
    }
  }
}

declare const NSScrubber: cocoa.NSScrubber.CLASS;
