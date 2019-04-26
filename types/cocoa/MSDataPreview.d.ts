/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataPreview<T0 = void, T1 = void, T2 = void> extends NSView {
    cxx_destruct<R = void>(): R;
    firstFourDataImages<R = unknown>(): R;
    firstThreeDataTextItems<R = unknown>(): R;
    centeredThumbFromImage<R = unknown, P0 = unknown>(_centeredThumbFromImage: P0): R;
    generateLocalTextDataPreview<R = unknown>(): R;
    generatePluginDataPreview<R = unknown>(): R;
    generateLocalImageDataPreview<R = unknown>(): R;
    generateLocalDataPreview<R = unknown>(): R;
    generateBuiltinDataPreview<R = unknown>(): R;
    generatePreview<R = void>(): R;
    placeHolderImage<R = unknown>(): R;
    preview<R = NSImage>(): R;
    setPreview<R = void, P0 = NSImage>(_v: P0): R;
    dataItem<R = MSDataPreferenceItem>(): R;
    setDataItem<R = void, P0 = MSDataPreferenceItem>(_v: P0): R;
    imageSize<R = CGSize>(): R;
    contentPath<R = NSBezierPath>(): R;
    previewFrame<R = CGRect>(): R;
  }
  namespace MSDataPreview {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSDataPreview>(): R;
      new: <R = MSDataPreview>() => R;
    }
  }
}

declare const MSDataPreview: cocoa.MSDataPreview.CLASS;
