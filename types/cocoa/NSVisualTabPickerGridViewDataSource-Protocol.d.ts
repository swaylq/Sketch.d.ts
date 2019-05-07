/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerGridViewDataSourceProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    tilesHeightToWidthRatioInVisualTabPickerGridView<R = number, P0 = NSVisualTabPickerGridView>(_tilesHeightToWidthRatioInVisualTabPickerGridView: P0): R;
    visualTabPickerGridView_thumbnailViewForTabItem<R = NSView, P0 = NSVisualTabPickerGridView, P1 = NSTabBarItem>(_visualTabPickerGridView: P0, _thumbnailViewForTabItem: P1): R;
    selectedTabItemInVisualTabPickerGridView<R = NSTabBarItem, P0 = NSVisualTabPickerGridView>(_selectedTabItemInVisualTabPickerGridView: P0): R;
    orderedTabItemsInVisualTabPickerGridView<R = NSArray, P0 = NSVisualTabPickerGridView>(_orderedTabItemsInVisualTabPickerGridView: P0): R;
  }
  namespace NSVisualTabPickerGridViewDataSourceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
