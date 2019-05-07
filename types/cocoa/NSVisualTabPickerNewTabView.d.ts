/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerNewTabView<T0 = void, T1 = void, T2 = void> extends NSVisualTabPickerShadowTileView {
    delegate<R = NSVisualTabPickerNewTabViewDelegate>(): R;
    setDelegate<R = void, P0 = NSVisualTabPickerNewTabViewDelegate>(_v: P0): R;
  }
  namespace NSVisualTabPickerNewTabView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSVisualTabPickerShadowTileView {
      alloc<R = NSVisualTabPickerNewTabView>(): R;
      new: <R = NSVisualTabPickerNewTabView>() => R;
    }
  }
}

declare const NSVisualTabPickerNewTabView: cocoa.NSVisualTabPickerNewTabView.CLASS;
