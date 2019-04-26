/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, NSTouchBarColorPickerSwitcherDelegateProtocol {}
  namespace NSTouchBarColorPickerViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, NSTouchBarColorPickerSwitcherDelegateProtocol {
      alloc<R = NSTouchBarColorPickerViewController>(): R;
      new: <R = NSTouchBarColorPickerViewController>() => R;
      keyPathsForValuesAffecting_currentPreferredPickerView<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarColorPickerViewController: cocoa.NSTouchBarColorPickerViewController.CLASS;
