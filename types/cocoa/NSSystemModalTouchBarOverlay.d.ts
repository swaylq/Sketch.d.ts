/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSystemModalTouchBarOverlay<T0 = void, T1 = void, T2 = void> extends NSObject {
    minimize<R = void>(): R;
    dismiss<R = void>(): R;
    showTouchBar_placement_systemTrayIdentifier<R = void, P0 = unknown, P1 = number, P2 = unknown>(_showTouchBar: P0, _placement: P1, _systemTrayIdentifier: P2): R;
    dealloc<R = void>(): R;
  }
  namespace NSSystemModalTouchBarOverlay {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSSystemModalTouchBarOverlay>(): R;
      new: <R = NSSystemModalTouchBarOverlay>() => R;
    }
  }
}

declare const NSSystemModalTouchBarOverlay: cocoa.NSSystemModalTouchBarOverlay.CLASS;
