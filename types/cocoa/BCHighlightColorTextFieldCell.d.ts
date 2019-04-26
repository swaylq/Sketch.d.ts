/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCHighlightColorTextFieldCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
    cxx_destruct<R = void>(): R;
    highlightColor<R = NSColor>(): R;
    setHighlightColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace BCHighlightColorTextFieldCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
      alloc<R = BCHighlightColorTextFieldCell>(): R;
      new: <R = BCHighlightColorTextFieldCell>() => R;
    }
  }
}

declare const BCHighlightColorTextFieldCell: cocoa.BCHighlightColorTextFieldCell.CLASS;
