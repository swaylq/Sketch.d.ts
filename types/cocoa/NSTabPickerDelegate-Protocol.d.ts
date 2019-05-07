/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabPickerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    tabPickerDidClose<R = void, P0 = NSTabPickerViewController>(_tabPickerDidClose: P0): R;
    tabPickerWillClose<R = void, P0 = NSTabPickerViewController>(_tabPickerWillClose: P0): R;
    tabPickerDidOpen<R = void, P0 = NSTabPickerViewController>(_tabPickerDidOpen: P0): R;
    tabPickerWillOpen<R = void, P0 = NSTabPickerViewController>(_tabPickerWillOpen: P0): R;
    tabPicker_thumbnailViewForTabItem<R = NSView, P0 = NSTabPickerViewController, P1 = NSTabBarItem>(_tabPicker: P0, _thumbnailViewForTabItem: P1): R;
    tabBarSnapshotForTabPicker<R = NSImage, P0 = NSTabPickerViewController>(_tabBarSnapshotForTabPicker: P0): R;
    tabPickerItemsForTabPicker<R = NSArray, P0 = NSTabPickerViewController>(_tabPickerItemsForTabPicker: P0): R;
    tabPickerCurrentlySelectedTabItem<R = NSTabBarItem, P0 = NSTabPickerViewController>(_tabPickerCurrentlySelectedTabItem: P0): R;
    tabPickerCreatingNewTabItem<R = NSTabBarItem, P0 = NSTabPickerViewController>(_tabPickerCreatingNewTabItem: P0): R;
    tabPicker_nextTabPickerItemAfterClosingItem<R = NSTabBarItem, P0 = NSTabPickerViewController, P1 = NSTabBarItem>(_tabPicker: P0, _nextTabPickerItemAfterClosingItem: P1): R;
    tabPicker_closeTabBarItem<R = void, P0 = NSTabPickerViewController, P1 = NSTabBarItem>(_tabPicker: P0, _closeTabBarItem: P1): R;
    tabPicker_didSelectTabItemWhenClosing<R = void, P0 = NSTabPickerViewController, P1 = NSTabBarItem>(_tabPicker: P0, _didSelectTabItemWhenClosing: P1): R;
  }
  namespace NSTabPickerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
