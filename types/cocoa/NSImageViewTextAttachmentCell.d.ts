/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageViewTextAttachmentCell<T0 = void, T1 = void, T2 = void> extends NSViewTextAttachmentCell {}
  namespace NSImageViewTextAttachmentCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewTextAttachmentCell {
      alloc<R = NSImageViewTextAttachmentCell>(): R;
      new: <R = NSImageViewTextAttachmentCell>() => R;
    }
  }
}

declare const NSImageViewTextAttachmentCell: cocoa.NSImageViewTextAttachmentCell.CLASS;
