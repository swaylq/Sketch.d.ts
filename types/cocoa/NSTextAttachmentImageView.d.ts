/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextAttachmentImageView<T0 = void, T1 = void, T2 = void> extends NSImageView {}
  namespace NSTextAttachmentImageView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageView {
      alloc<R = NSTextAttachmentImageView>(): R;
      new: <R = NSTextAttachmentImageView>() => R;
    }
  }
}

declare const NSTextAttachmentImageView: cocoa.NSTextAttachmentImageView.CLASS;
