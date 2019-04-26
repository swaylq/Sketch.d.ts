/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabWell<T0 = void, T1 = void, T2 = void> extends NSView {
    isEnabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_setEnabled: P0): R;
    isOpaque<R = boolean>(): R;
    prototype<R = unknown>(): R;
    setPrototype<R = void, P0 = unknown>(_setPrototype: P0): R;
    initWithFrame_prototypeRulerMarker<R = unknown, P0 = CGRect, P1 = unknown>(_initWithFrame: P0, _prototypeRulerMarker: P1): R;
    accessibilityIsMarkerTypeDescriptionAttributeSettable<R = boolean>(): R;
    accessibilityMarkerTypeDescriptionAttribute<R = unknown>(): R;
    accessibilityIsMarkerTypeAttributeSettable<R = boolean>(): R;
    accessibilityMarkerTypeAttribute<R = unknown>(): R;
  }
  namespace NSTabWell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSTabWell>(): R;
      new: <R = NSTabWell>() => R;
    }
  }
}

declare const NSTabWell: cocoa.NSTabWell.CLASS;
