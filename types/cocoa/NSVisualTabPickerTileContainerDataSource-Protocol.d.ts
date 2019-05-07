/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerTileContainerDataSourceProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    visualTabPickerTileContainerView_viewForTileAtIndex<R = NSView, P0 = NSVisualTabPickerTileContainerView, P1 = number>(_visualTabPickerTileContainerView: P0, _viewForTileAtIndex: P1): R;
    visualTabPickerTileContainerView_titleForTileAtIndex<R = NSString, P0 = NSVisualTabPickerTileContainerView, P1 = number>(_visualTabPickerTileContainerView: P0, _titleForTileAtIndex: P1): R;
    titleForNSVisualTabPickerTileContainerView<R = NSString, P0 = NSVisualTabPickerTileContainerView>(_titleForNSVisualTabPickerTileContainerView: P0): R;
    numberOfTilesInNSVisualTabPickerTileContainerView<R = number, P0 = NSVisualTabPickerTileContainerView>(_numberOfTilesInNSVisualTabPickerTileContainerView: P0): R;
  }
  namespace NSVisualTabPickerTileContainerDataSourceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
