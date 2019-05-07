/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextFieldWithDropDownMenu<T0 = void, T1 = void, T2 = void> extends NSTextField {
    cxx_destruct<R = void>(): R;
    dropDownArrowHitTestRect<R = CGRect>(): R;
    popupMenu<R = NSMenu>(): R;
    setPopupMenu<R = void, P0 = NSMenu>(_v: P0): R;
  }
  namespace MSTextFieldWithDropDownMenu {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextField {
      alloc<R = MSTextFieldWithDropDownMenu>(): R;
      new: <R = MSTextFieldWithDropDownMenu>() => R;
      dropDownArrowImage<R = unknown>(): R;
    }
  }
}

declare const MSTextFieldWithDropDownMenu: cocoa.MSTextFieldWithDropDownMenu.CLASS;
