/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetLibraryPreview<T0 = void, T1 = void, T2 = void> extends NSView {
    cxx_destruct<R = void>(): R;
    centeredThumbFromImage<R = unknown, P0 = unknown>(_centeredThumbFromImage: P0): R;
    preview<R = NSImage>(): R;
    setPreview<R = void, P0 = NSImage>(_v: P0): R;
    libraryPreview<R = NSImage>(): R;
    setLibraryPreview<R = void, P0 = NSImage>(_v: P0): R;
    contentPath<R = NSBezierPath>(): R;
    previewFrame<R = CGRect>(): R;
  }
  namespace MSAssetLibraryPreview {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSAssetLibraryPreview>(): R;
      new: <R = MSAssetLibraryPreview>() => R;
    }
  }
}

declare const MSAssetLibraryPreview: cocoa.MSAssetLibraryPreview.CLASS;
