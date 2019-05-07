/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCHighlightColorButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {}
  namespace BCHighlightColorButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = BCHighlightColorButtonCell>(): R;
      new: <R = BCHighlightColorButtonCell>() => R;
    }
  }
}

declare const BCHighlightColorButtonCell: cocoa.BCHighlightColorButtonCell.CLASS;
