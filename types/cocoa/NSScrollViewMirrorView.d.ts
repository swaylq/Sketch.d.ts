/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrollViewMirrorView<T0 = void, T1 = void, T2 = void> extends NSView {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    associatedScrollView<R = NSScrollView>(): R;
    setAssociatedScrollView<R = void, P0 = NSScrollView>(_v: P0): R;
  }
  namespace NSScrollViewMirrorView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSScrollViewMirrorView>(): R;
      new: <R = NSScrollViewMirrorView>() => R;
      automaticallyNotifiesObserversOfAssociatedScrollView<R = boolean>(): R;
    }
  }
}

declare const NSScrollViewMirrorView: cocoa.NSScrollViewMirrorView.CLASS;
