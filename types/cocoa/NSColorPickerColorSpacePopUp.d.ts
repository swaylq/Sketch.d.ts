/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerColorSpacePopUp<T0 = void, T1 = void, T2 = void> extends NSPopUpButton {
    _colorSpaceForColorDisplaysAsGeneric<R = boolean, P0 = unknown>(__colorSpaceForColorDisplaysAsGeneric: P0): R;
    setFrame<R = void, P0 = CGRect>(_setFrame: P0): R;
    colorPanelColorDidChange<R = void, P0 = unknown>(_colorPanelColorDidChange: P0): R;
    _setNeedsDisplayInRectWithFocus<R = void, P0 = CGRect>(__setNeedsDisplayInRectWithFocus: P0): R;
    _isShowingKeyboardFocus<R = boolean>(): R;
    doneSendingPopUpAction<R = void, P0 = unknown>(_doneSendingPopUpAction: P0): R;
    _selectColorProfile<R = void, P0 = unknown>(__selectColorProfile: P0): R;
    _selectEntryMode<R = void, P0 = unknown>(__selectEntryMode: P0): R;
    willPopUpNotification<R = void, P0 = unknown>(_willPopUpNotification: P0): R;
    _commonInitNSColorPickerColorSpacePopUp<R = void>(): R;
    selectedEntryMode<R = number>(): R;
    setSelectedEntryMode<R = void, P0 = number>(_v: P0): R;
    selectedColorSpace<R = NSColorSpace>(): R;
    setSelectedColorSpace<R = void, P0 = NSColorSpace>(_v: P0): R;
  }
  namespace NSColorPickerColorSpacePopUp {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopUpButton {
      alloc<R = NSColorPickerColorSpacePopUp>(): R;
      new: <R = NSColorPickerColorSpacePopUp>() => R;
      preferredColorSpaces<R = unknown>(): R;
    }
  }
}

declare const NSColorPickerColorSpacePopUp: cocoa.NSColorPickerColorSpacePopUp.CLASS;
