/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface HICocoaWindowContentView<T0 = void, T1 = void, T2 = void> extends NSView {
    _receivedEvent<R = boolean>(): R;
    _resetEventReceivedFlag<R = void>(): R;
    getContentHIView<R = OpaqueControlRef>(): R;
    invalidateHICocoaViewSubViewsOf_withInvalidRect_ofView<R = void, P0 = OpaqueControlRef, P1 = CGRect, P2 = OpaqueControlRef>(_invalidateHICocoaViewSubViewsOf: P0, _withInvalidRect: P1, _ofView: P2): R;
    isOpaque<R = boolean>(): R;
  }
  namespace HICocoaWindowContentView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = HICocoaWindowContentView>(): R;
      new: <R = HICocoaWindowContentView>() => R;
    }
  }
}

declare const HICocoaWindowContentView: cocoa.HICocoaWindowContentView.CLASS;
