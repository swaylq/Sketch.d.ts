/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCHighlightImageCell<T0 = void, T1 = void, T2 = void> extends NSImageCell {}
  namespace BCHighlightImageCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageCell {
      alloc<R = BCHighlightImageCell>(): R;
      new: <R = BCHighlightImageCell>() => R;
    }
  }
}

declare const BCHighlightImageCell: cocoa.BCHighlightImageCell.CLASS;
