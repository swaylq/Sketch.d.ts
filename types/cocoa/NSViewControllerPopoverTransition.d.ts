/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewControllerPopoverTransition<T0 = void, T1 = void, T2 = void> extends NSViewControllerPresentationAnimatorObject {
    initWithPositioningRect_ofView_preferredEdge_behavior<R = unknown, P0 = CGRect, P1 = unknown, P2 = number, P3 = number>(_initWithPositioningRect: P0, _ofView: P1, _preferredEdge: P2, _behavior: P3): R;
    _windowDidClose<R = void, P0 = unknown>(__windowDidClose: P0): R;
  }
  namespace NSViewControllerPopoverTransition {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewControllerPresentationAnimatorObject {
      alloc<R = NSViewControllerPopoverTransition>(): R;
      new: <R = NSViewControllerPopoverTransition>() => R;
    }
  }
}

declare const NSViewControllerPopoverTransition: cocoa.NSViewControllerPopoverTransition.CLASS;
