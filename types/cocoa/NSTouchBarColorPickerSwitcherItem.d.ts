/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSwitcherItem<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
    label<R = NSString>(): R;
    setLabel<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSTouchBarColorPickerSwitcherItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTouchBarColorPickerSwitcherItem>(): R;
      new: <R = NSTouchBarColorPickerSwitcherItem>() => R;
      itemWithLabel_image<R = unknown, P0 = unknown, P1 = unknown>(_itemWithLabel: P0, _image: P1): R;
    }
  }
}

declare const NSTouchBarColorPickerSwitcherItem: cocoa.NSTouchBarColorPickerSwitcherItem.CLASS;
