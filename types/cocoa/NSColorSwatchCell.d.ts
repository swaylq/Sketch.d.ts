/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorSwatchCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
    _swatchRectForCellFrame<R = CGRect, P0 = CGRect>(__swatchRectForCellFrame: P0): R;
    swatchColor<R = NSColor>(): R;
    setSwatchColor<R = void, P0 = NSColor>(_v: P0): R;
    swatchSize<R = CGSize>(): R;
    setSwatchSize<R = void, P0 = CGSize>(_v: P0): R;
  }
  namespace NSColorSwatchCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
      alloc<R = NSColorSwatchCell>(): R;
      new: <R = NSColorSwatchCell>() => R;
    }
  }
}

declare const NSColorSwatchCell: cocoa.NSColorSwatchCell.CLASS;
