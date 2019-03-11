/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCHighlightImageCell<T = any> extends cocoa.NSImageCell {}
  namespace classes {
    export interface BCHighlightImageCell<T = any> extends cocoa.classes.NSImageCell {
      alloc<R = BCHighlightImageCell>(): R;
      new: <R = BCHighlightImageCell>() => R;
    }
  }
}

declare const BCHighlightImageCell: cocoa.classes.BCHighlightImageCell;
