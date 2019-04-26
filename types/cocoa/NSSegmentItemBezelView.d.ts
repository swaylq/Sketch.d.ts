/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSegmentItemBezelView<T0 = void, T1 = void, T2 = void> extends NSWidgetView {
    _defaultVibrancyBlendMode<R = number>(): R;
  }
  namespace NSSegmentItemBezelView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWidgetView {
      alloc<R = NSSegmentItemBezelView>(): R;
      new: <R = NSSegmentItemBezelView>() => R;
    }
  }
}

declare const NSSegmentItemBezelView: cocoa.NSSegmentItemBezelView.CLASS;
