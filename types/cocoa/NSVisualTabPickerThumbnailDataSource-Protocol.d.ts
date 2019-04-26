/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerThumbnailDataSourceProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    viewForVisualTabPickerTileThumbnailView<R = NSView, P0 = NSVisualTabPickerThumbnailView>(_viewForVisualTabPickerTileThumbnailView: P0): R;
    titleForNSVisualTabPickerThumbnailView<R = NSString, P0 = NSVisualTabPickerThumbnailView>(_titleForNSVisualTabPickerThumbnailView: P0): R;
  }
  namespace NSVisualTabPickerThumbnailDataSourceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
