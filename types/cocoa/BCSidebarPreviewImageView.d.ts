/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCSidebarPreviewImageView<T0 = void, T1 = void, T2 = void> extends NSView {
    cxx_destruct<R = void>(): R;
    wantsLayer<R = boolean>(): R;
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace BCSidebarPreviewImageView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = BCSidebarPreviewImageView>(): R;
      new: <R = BCSidebarPreviewImageView>() => R;
    }
  }
}

declare const BCSidebarPreviewImageView: cocoa.BCSidebarPreviewImageView.CLASS;
