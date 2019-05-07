/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginsPreferenceIconView<T0 = void, T1 = void, T2 = void> extends NSView {
    cxx_destruct<R = void>(): R;
    previewFrame<R = CGRect>(): R;
    contentPath<R = unknown>(): R;
    centeredThumbFromImage<R = unknown, P0 = unknown>(_centeredThumbFromImage: P0): R;
    generatePreview<R = void>(): R;
    preview<R = NSImage>(): R;
    setPreview<R = void, P0 = NSImage>(_v: P0): R;
    icon<R = NSImage>(): R;
    setIcon<R = void, P0 = NSImage>(_v: P0): R;
    placeHolderImage<R = NSImage>(): R;
  }
  namespace MSPluginsPreferenceIconView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSPluginsPreferenceIconView>(): R;
      new: <R = MSPluginsPreferenceIconView>() => R;
    }
  }
}

declare const MSPluginsPreferenceIconView: cocoa.MSPluginsPreferenceIconView.CLASS;
