/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarColorPickerContainerView<T0 = void, T1 = void, T2 = void> extends NSView, _NSTouchBarItemLayoutWrapperProtocol {
    colorSwatch<R = NSView>(): R;
    setColorSwatch<R = void, P0 = NSView>(_v: P0): R;
    switcherView<R = NSTouchBarColorPickerSwitcher>(): R;
    setSwitcherView<R = void, P0 = NSTouchBarColorPickerSwitcher>(_v: P0): R;
    colorPickerView<R = NSTouchBarColorPickerView>(): R;
    setColorPickerView<R = void, P0 = NSTouchBarColorPickerView>(_v: P0): R;
    isSpace<R = boolean>(): R;
    maxSize<R = CGSize>(): R;
    minSize<R = CGSize>(): R;
    contentClippingSize<R = CGSize>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    itemPosition<R = number>(): R;
    preferredSize<R = CGSize>(): R;
    preferredTrailingPosition<R = number>(): R;
    preferredZOrder<R = number>(): R;
    priorityIndex<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSTouchBarColorPickerContainerView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, _NSTouchBarItemLayoutWrapperProtocol {
      alloc<R = _NSTouchBarColorPickerContainerView>(): R;
      new: <R = _NSTouchBarColorPickerContainerView>() => R;
    }
  }
}
