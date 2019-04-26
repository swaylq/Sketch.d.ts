/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerThumbnailView<T0 = void, T1 = void, T2 = void> extends NSVisualTabPickerShadowTileView {
    exposeBorderVisible<R = boolean>(): R;
    setExposeBorderVisible<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSVisualTabPickerThumbnailView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSVisualTabPickerShadowTileView {
      alloc<R = NSVisualTabPickerThumbnailView>(): R;
      new: <R = NSVisualTabPickerThumbnailView>() => R;
    }
  }
}

declare const NSVisualTabPickerThumbnailView: cocoa.NSVisualTabPickerThumbnailView.CLASS;
