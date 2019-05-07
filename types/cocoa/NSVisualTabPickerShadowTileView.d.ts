/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerShadowTileView<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace NSVisualTabPickerShadowTileView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSVisualTabPickerShadowTileView>(): R;
      new: <R = NSVisualTabPickerShadowTileView>() => R;
      headerHeight<R = number>(): R;
    }
  }
}

declare const NSVisualTabPickerShadowTileView: cocoa.NSVisualTabPickerShadowTileView.CLASS;
