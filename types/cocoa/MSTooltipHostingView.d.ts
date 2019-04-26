/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTooltipHostingView<T0 = void, T1 = void, T2 = void> extends NSView {
    cxx_destruct<R = void>(): R;
    refreshToolTip<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    setupTooltipHostingView<R = void>(): R;
    awakeFromNib<R = void>(): R;
    toolTipProvider<R = NSView>(): R;
    setToolTipProvider<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace MSTooltipHostingView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSTooltipHostingView>(): R;
      new: <R = MSTooltipHostingView>() => R;
    }
  }
}

declare const MSTooltipHostingView: cocoa.MSTooltipHostingView.CLASS;
