/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRulerMarkerView<T0 = void, T1 = void, T2 = void> extends NSView {
    isFlipped<R = boolean>(): R;
    setRulerMarker<R = void, P0 = unknown>(_setRulerMarker: P0): R;
    rulerMarker<R = unknown>(): R;
    updateFrame<R = void>(): R;
  }
  namespace NSRulerMarkerView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSRulerMarkerView>(): R;
      new: <R = NSRulerMarkerView>() => R;
    }
  }
}

declare const NSRulerMarkerView: cocoa.NSRulerMarkerView.CLASS;
