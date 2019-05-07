/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarSharingServicePickerViewController<T0 = void, T1 = void, T2 = void> extends NSViewController {
    delegate<R = NSSharingServicePickerTouchBarItemDelegate>(): R;
    setDelegate<R = void, P0 = NSSharingServicePickerTouchBarItemDelegate>(_v: P0): R;
  }
  namespace NSTouchBarSharingServicePickerViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = NSTouchBarSharingServicePickerViewController>(): R;
      new: <R = NSTouchBarSharingServicePickerViewController>() => R;
    }
  }
}

declare const NSTouchBarSharingServicePickerViewController: cocoa.NSTouchBarSharingServicePickerViewController.CLASS;
