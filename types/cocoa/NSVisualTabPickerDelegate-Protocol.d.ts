/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    visualTabPickerControllerDidEndHiding<R = void, P0 = NSVisualTabPickerRootViewController>(_visualTabPickerControllerDidEndHiding: P0): R;
    visualTabPickerControllerDidBeginHiding<R = void, P0 = NSVisualTabPickerRootViewController>(_visualTabPickerControllerDidBeginHiding: P0): R;
    visualTabPickerControllerWillClose<R = void, P0 = NSVisualTabPickerRootViewController>(_visualTabPickerControllerWillClose: P0): R;
    visualTabPickerController_closeTabBarItem<R = void, P0 = NSVisualTabPickerRootViewController, P1 = NSTabBarItem>(_visualTabPickerController: P0, _closeTabBarItem: P1): R;
    visualTabPickerController_selectTab<R = void, P0 = NSVisualTabPickerRootViewController, P1 = NSTabBarItem>(_visualTabPickerController: P0, _selectTab: P1): R;
    createNewTabForVisualTabPickerController<R = void, P0 = NSVisualTabPickerRootViewController>(_createNewTabForVisualTabPickerController: P0): R;
    creatingNewTabWillCloseVisualTabPickerController<R = boolean, P0 = NSVisualTabPickerRootViewController>(_creatingNewTabWillCloseVisualTabPickerController: P0): R;
    tabBarItemsForVisualTabPickerController<R = NSArray, P0 = NSVisualTabPickerRootViewController>(_tabBarItemsForVisualTabPickerController: P0): R;
    selectedTabViewItemForVisualTabPickerController<R = NSTabBarItem, P0 = NSVisualTabPickerRootViewController>(_selectedTabViewItemForVisualTabPickerController: P0): R;
    frameForVisualTabPickerController<R = CGRect, P0 = NSVisualTabPickerRootViewController>(_frameForVisualTabPickerController: P0): R;
    visualTabPicker_thumbnailViewForTabItem<R = NSView, P0 = NSVisualTabPickerRootViewController, P1 = NSTabBarItem>(_visualTabPicker: P0, _thumbnailViewForTabItem: P1): R;
  }
  namespace NSVisualTabPickerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
