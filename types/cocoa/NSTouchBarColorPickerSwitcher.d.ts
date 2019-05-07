/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSwitcher<T0 = void, T1 = void, T2 = void> extends NSView, NSTouchBarPressAndHoldTransposerDelegateProtocol {
    container<R = NSView>(): R;
    setContainer<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace NSTouchBarColorPickerSwitcher {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, NSTouchBarPressAndHoldTransposerDelegateProtocol {
      alloc<R = NSTouchBarColorPickerSwitcher>(): R;
      new: <R = NSTouchBarColorPickerSwitcher>() => R;
    }
  }
}

declare const NSTouchBarColorPickerSwitcher: cocoa.NSTouchBarColorPickerSwitcher.CLASS;
