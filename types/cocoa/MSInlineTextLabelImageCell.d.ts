/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInlineTextLabelImageCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
    cxx_destruct<R = void>(): R;
    font<R = unknown>(): R;
    textColor<R = unknown>(): R;
    cellSize<R = CGSize>(): R;
    setImage<R = void, P0 = unknown>(_setImage: P0): R;
    customFittingSize<R = NSValue>(): R;
    setCustomFittingSize<R = void, P0 = NSValue>(_v: P0): R;
  }
  namespace MSInlineTextLabelImageCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
      alloc<R = MSInlineTextLabelImageCell>(): R;
      new: <R = MSInlineTextLabelImageCell>() => R;
      inlineTextLabelFont<R = unknown>(): R;
    }
  }
}

declare const MSInlineTextLabelImageCell: cocoa.MSInlineTextLabelImageCell.CLASS;
