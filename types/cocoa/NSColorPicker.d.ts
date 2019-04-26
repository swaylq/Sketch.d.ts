/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPicker<T0 = void, T1 = void, T2 = void> extends NSObject, NSColorPickingDefaultProtocol {
    _localizedNumberedNameWithString_integer<R = unknown, P0 = unknown, P1 = number>(__localizedNumberedNameWithString: P0, _integer: P1): R;
    _getTiffImage_ownedBy<R = unknown, P0 = unknown, P1 = unknown>(__getTiffImage: P0, _ownedBy: P1): R;
    _insertionOrder<R = number>(): R;
    _buttonImageToolTip<R = unknown>(): R;
    _buttonToolTip<R = unknown>(): R;
    _setButtonToolTip<R = void, P0 = unknown>(__setButtonToolTip: P0): R;
    dealloc<R = void>(): R;
    minContentSize<R = CGSize>(): R;
    buttonToolTip<R = NSString>(): R;
    provideNewButtonImage<R = NSImage>(): R;
    colorPanel<R = NSColorPanel>(): R;
  }
  namespace NSColorPicker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSColorPickingDefaultProtocol {
      alloc<R = NSColorPicker>(): R;
      new: <R = NSColorPicker>() => R;
    }
  }
}

declare const NSColorPicker: cocoa.NSColorPicker.CLASS;
