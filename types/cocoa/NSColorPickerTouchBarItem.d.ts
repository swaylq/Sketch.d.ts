/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerTouchBarItem<T0 = void, T1 = void, T2 = void> extends NSTouchBarItem, NSTouchBarItemTypePopoverProtocol, NSGestureRecognizerDelegateProtocol, NSTouchBarColorPickerViewControllerDelegateProtocol {}
  namespace NSColorPickerTouchBarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarItem, NSTouchBarItemTypePopoverProtocol, NSGestureRecognizerDelegateProtocol, NSTouchBarColorPickerViewControllerDelegateProtocol {
      alloc<R = NSColorPickerTouchBarItem>(): R;
      new: <R = NSColorPickerTouchBarItem>() => R;
      automaticallyNotifiesObserversOfColor<R = boolean>(): R;
    }
  }
}

declare const NSColorPickerTouchBarItem: cocoa.NSColorPickerTouchBarItem.CLASS;
