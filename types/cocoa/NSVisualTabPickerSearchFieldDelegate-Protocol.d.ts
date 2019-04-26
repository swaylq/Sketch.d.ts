/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerSearchFieldDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSSearchFieldDelegateProtocol {
    visualTabPickerSearchFieldTextDidChange<R = void, P0 = NSVisualTabPickerSearchField>(_visualTabPickerSearchFieldTextDidChange: P0): R;
  }
  namespace NSVisualTabPickerSearchFieldDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSearchFieldDelegateProtocol {}
  }
}
