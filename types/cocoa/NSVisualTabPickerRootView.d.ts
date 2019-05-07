/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerRootView<T0 = void, T1 = void, T2 = void> extends NSView {
    visualTabPickerViewController<R = NSVisualTabPickerRootViewController>(): R;
    setVisualTabPickerViewController<R = void, P0 = NSVisualTabPickerRootViewController>(_v: P0): R;
  }
  namespace NSVisualTabPickerRootView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSVisualTabPickerRootView>(): R;
      new: <R = NSVisualTabPickerRootView>() => R;
    }
  }
}

declare const NSVisualTabPickerRootView: cocoa.NSVisualTabPickerRootView.CLASS;
