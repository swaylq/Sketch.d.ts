/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerGridViewDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    visualTabPickerGridViewCloseTabViewItem<R = void, P0 = NSTabBarItem>(_visualTabPickerGridViewCloseTabViewItem: P0): R;
    visualTabPickerGridView_selectTab<R = void, P0 = NSVisualTabPickerGridView, P1 = NSTabBarItem>(_visualTabPickerGridView: P0, _selectTab: P1): R;
    createNewTabForVisualTabPickerGridView<R = void, P0 = NSVisualTabPickerGridView>(_createNewTabForVisualTabPickerGridView: P0): R;
    canCloseTabsInVisualTabPickerGridView<R = boolean, P0 = NSVisualTabPickerGridView>(_canCloseTabsInVisualTabPickerGridView: P0): R;
  }
  namespace NSVisualTabPickerGridViewDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
