/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLabelView<T0 = void, T1 = void, T2 = void> extends NSControl {
    _setFocusedPart<R = void, P0 = number>(__setFocusedPart: P0): R;
    _setNeedsDisplayForPart<R = void, P0 = number>(__setNeedsDisplayForPart: P0): R;
    allowsMultipleSelection<R = boolean>(): R;
    setAllowsMultipleSelection<R = void, P0 = boolean>(_v: P0): R;
    imagePosition<R = number>(): R;
    setImagePosition<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSLabelView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSControl {
      alloc<R = NSLabelView>(): R;
      new: <R = NSLabelView>() => R;
    }
  }
}

declare const NSLabelView: cocoa.NSLabelView.CLASS;
