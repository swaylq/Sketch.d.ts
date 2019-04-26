/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageKitViewTextAttachmentCell<T0 = void, T1 = void, T2 = void> extends NSViewTextAttachmentCell {
    _imageKitViewClass<R = unknown>(): R;
    _loadImageKit<R = void>(): R;
  }
  namespace NSImageKitViewTextAttachmentCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewTextAttachmentCell {
      alloc<R = NSImageKitViewTextAttachmentCell>(): R;
      new: <R = NSImageKitViewTextAttachmentCell>() => R;
    }
  }
}

declare const NSImageKitViewTextAttachmentCell: cocoa.NSImageKitViewTextAttachmentCell.CLASS;
