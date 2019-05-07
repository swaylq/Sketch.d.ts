/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSharingServicePickerTouchBarItem<T0 = void, T1 = void, T2 = void> extends NSTouchBarItem, NSTouchBarItemTypePopoverProtocol {
    delegate<R = NSSharingServicePickerTouchBarItemDelegate>(): R;
    setDelegate<R = void, P0 = NSSharingServicePickerTouchBarItemDelegate>(_v: P0): R;
  }
  namespace NSSharingServicePickerTouchBarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarItem, NSTouchBarItemTypePopoverProtocol {
      alloc<R = NSSharingServicePickerTouchBarItem>(): R;
      new: <R = NSSharingServicePickerTouchBarItem>() => R;
    }
  }
}

declare const NSSharingServicePickerTouchBarItem: cocoa.NSSharingServicePickerTouchBarItem.CLASS;
