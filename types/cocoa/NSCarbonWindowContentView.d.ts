/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCarbonWindowContentView<T0 = void, T1 = void, T2 = void> extends NSView {
    isOpaque<R = boolean>(): R;
  }
  namespace NSCarbonWindowContentView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSCarbonWindowContentView>(): R;
      new: <R = NSCarbonWindowContentView>() => R;
    }
  }
}

declare const NSCarbonWindowContentView: cocoa.NSCarbonWindowContentView.CLASS;
