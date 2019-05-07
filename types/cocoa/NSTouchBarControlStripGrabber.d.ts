/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarControlStripGrabber<T0 = void, T1 = void, T2 = void> extends NSView, NSCollectionViewElementProtocol, NSGestureRecognizerDelegateProtocol {}
  namespace NSTouchBarControlStripGrabber {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, NSCollectionViewElementProtocol, NSGestureRecognizerDelegateProtocol {
      alloc<R = NSTouchBarControlStripGrabber>(): R;
      new: <R = NSTouchBarControlStripGrabber>() => R;
    }
  }
}

declare const NSTouchBarControlStripGrabber: cocoa.NSTouchBarControlStripGrabber.CLASS;
