/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSegmentItemLabelView<T0 = void, T1 = void, T2 = void> extends NSTextField {
    _defaultVibrancyBlendMode<R = number>(): R;
  }
  namespace NSSegmentItemLabelView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextField {
      alloc<R = NSSegmentItemLabelView>(): R;
      new: <R = NSSegmentItemLabelView>() => R;
    }
  }
}

declare const NSSegmentItemLabelView: cocoa.NSSegmentItemLabelView.CLASS;
