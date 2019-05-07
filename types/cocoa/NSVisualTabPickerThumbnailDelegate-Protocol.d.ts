/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerThumbnailDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    didCloseVisualTabPickerThumbnailView<R = void, P0 = NSVisualTabPickerThumbnailView>(_didCloseVisualTabPickerThumbnailView: P0): R;
    didSelectVisualTabPickerThumbnailView<R = void, P0 = NSVisualTabPickerThumbnailView>(_didSelectVisualTabPickerThumbnailView: P0): R;
    canCloseTabInNSVisualTabPickerThumbnailView<R = boolean, P0 = NSVisualTabPickerThumbnailView>(_canCloseTabInNSVisualTabPickerThumbnailView: P0): R;
  }
  namespace NSVisualTabPickerThumbnailDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
