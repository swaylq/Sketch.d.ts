/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSwitcherDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    switcher_didSelectItemAtIndex<R = void, P0 = NSTouchBarColorPickerSwitcher, P1 = number>(_switcher: P0, _didSelectItemAtIndex: P1): R;
  }
  namespace NSTouchBarColorPickerSwitcherDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
