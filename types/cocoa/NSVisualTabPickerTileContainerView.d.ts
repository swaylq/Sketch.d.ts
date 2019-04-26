/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerTileContainerView<T0 = void, T1 = void, T2 = void> extends NSView, NSVisualTabPickerNewTabViewDelegateProtocol, NSVisualTabPickerThumbnailDataSourceProtocol, NSVisualTabPickerThumbnailDelegateProtocol {}
  namespace NSVisualTabPickerTileContainerView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, NSVisualTabPickerNewTabViewDelegateProtocol, NSVisualTabPickerThumbnailDataSourceProtocol, NSVisualTabPickerThumbnailDelegateProtocol {
      alloc<R = NSVisualTabPickerTileContainerView>(): R;
      new: <R = NSVisualTabPickerTileContainerView>() => R;
      offsetBetweenStackedThumbnails<R = CGPoint>(): R;
    }
  }
}

declare const NSVisualTabPickerTileContainerView: cocoa.NSVisualTabPickerTileContainerView.CLASS;
