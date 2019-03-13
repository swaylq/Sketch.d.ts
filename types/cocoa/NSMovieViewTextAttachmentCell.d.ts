/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMovieViewTextAttachmentCell<T = any> extends NSViewTextAttachmentCell {
    initWithMovie<R = unknown, P0 = unknown>(_initWithMovie: P0): R;
  }
  namespace classes {
    export interface NSMovieViewTextAttachmentCell<T = any> extends NSViewTextAttachmentCell {
      alloc<R = NSMovieViewTextAttachmentCell>(): R;
      new: <R = NSMovieViewTextAttachmentCell>() => R;
    }
  }
}

declare const NSMovieViewTextAttachmentCell: cocoa.classes.NSMovieViewTextAttachmentCell;