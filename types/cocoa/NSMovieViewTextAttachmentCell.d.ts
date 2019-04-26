/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMovieViewTextAttachmentCell<T0 = void, T1 = void, T2 = void> extends NSViewTextAttachmentCell {
    initWithMovie<R = unknown, P0 = unknown>(_initWithMovie: P0): R;
  }
  namespace NSMovieViewTextAttachmentCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewTextAttachmentCell {
      alloc<R = NSMovieViewTextAttachmentCell>(): R;
      new: <R = NSMovieViewTextAttachmentCell>() => R;
    }
  }
}

declare const NSMovieViewTextAttachmentCell: cocoa.NSMovieViewTextAttachmentCell.CLASS;
