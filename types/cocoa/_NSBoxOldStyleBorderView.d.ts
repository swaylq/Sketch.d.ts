/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBoxOldStyleBorderView<T0 = void, T1 = void, T2 = void> extends NSView {
    _isOneSidedGrooveBorder<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    shouldDrawFill<R = boolean>(): R;
    setShouldDrawFill<R = void, P0 = boolean>(_v: P0): R;
    titleCutoutRect<R = CGRect>(): R;
    setTitleCutoutRect<R = void, P0 = CGRect>(_v: P0): R;
    borderType<R = number>(): R;
    setBorderType<R = void, P0 = number>(_v: P0): R;
  }
  namespace _NSBoxOldStyleBorderView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSBoxOldStyleBorderView>(): R;
      new: <R = _NSBoxOldStyleBorderView>() => R;
    }
  }
}
