/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerRootViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, NSVisualTabPickerSearchFieldDelegateProtocol, NSVisualTabPickerGridViewDataSourceProtocol, NSVisualTabPickerGridViewDelegateProtocol {}
  namespace NSVisualTabPickerRootViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, NSVisualTabPickerSearchFieldDelegateProtocol, NSVisualTabPickerGridViewDataSourceProtocol, NSVisualTabPickerGridViewDelegateProtocol {
      alloc<R = NSVisualTabPickerRootViewController>(): R;
      new: <R = NSVisualTabPickerRootViewController>() => R;
      springAnimationForVisualTabPicker<R = unknown>(): R;
    }
  }
}

declare const NSVisualTabPickerRootViewController: cocoa.NSVisualTabPickerRootViewController.CLASS;
