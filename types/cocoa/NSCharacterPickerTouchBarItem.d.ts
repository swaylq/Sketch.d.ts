/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCharacterPickerTouchBarItem<T0 = void, T1 = void, T2 = void> extends NSPopoverTouchBarItem {
    popoverViewController<R = NSViewController>(): R;
    setPopoverViewController<R = void, P0 = NSViewController>(_v: P0): R;
  }
  namespace NSCharacterPickerTouchBarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopoverTouchBarItem {
      alloc<R = NSCharacterPickerTouchBarItem>(): R;
      new: <R = NSCharacterPickerTouchBarItem>() => R;
      characterPickerTouchBarItem<R = unknown>(): R;
    }
  }
}

declare const NSCharacterPickerTouchBarItem: cocoa.NSCharacterPickerTouchBarItem.CLASS;
