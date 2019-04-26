/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabPickerViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, NSVisualTabPickerDelegateProtocol {
    windowSnapshots<R = NSMapTable>(): R;
  }
  namespace NSTabPickerViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, NSVisualTabPickerDelegateProtocol {
      alloc<R = NSTabPickerViewController>(): R;
      new: <R = NSTabPickerViewController>() => R;
    }
  }
}

declare const NSTabPickerViewController: cocoa.NSTabPickerViewController.CLASS;
