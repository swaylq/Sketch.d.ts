/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerGridView<T0 = void, T1 = void, T2 = void> extends NSView, NSVisualTabPickerTileContainerDataSourceProtocol, NSVisualTabPickerTileContainerDelegateProtocol {
    shouldShowCloseButtons<R = boolean>(): R;
    setShouldShowCloseButtons<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSVisualTabPickerGridView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, NSVisualTabPickerTileContainerDataSourceProtocol, NSVisualTabPickerTileContainerDelegateProtocol {
      alloc<R = NSVisualTabPickerGridView>(): R;
      new: <R = NSVisualTabPickerGridView>() => R;
    }
  }
}

declare const NSVisualTabPickerGridView: cocoa.NSVisualTabPickerGridView.CLASS;
