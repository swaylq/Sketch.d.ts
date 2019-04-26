/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRulerMarkerPanel<T0 = void, T1 = void, T2 = void> extends NSPanel {
    canBecomeVisibleWithoutLogin<R = boolean>(): R;
    hasShadow<R = boolean>(): R;
  }
  namespace NSRulerMarkerPanel {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPanel {
      alloc<R = NSRulerMarkerPanel>(): R;
      new: <R = NSRulerMarkerPanel>() => R;
    }
  }
}

declare const NSRulerMarkerPanel: cocoa.NSRulerMarkerPanel.CLASS;
