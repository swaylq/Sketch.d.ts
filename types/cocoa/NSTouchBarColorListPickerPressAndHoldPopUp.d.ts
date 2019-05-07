/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorListPickerPressAndHoldPopUp<T0 = void, T1 = void, T2 = void> extends NSObject, NSScrubberDataSourceProtocol, NSScrubberDelegateProtocol, NSTouchBarPressAndHoldTransposerDelegateProtocol {
    _transposerDidEnd_cancelled<R = void, P0 = unknown, P1 = boolean>(__transposerDidEnd: P0, _cancelled: P1): R;
    dismiss<R = void>(): R;
    showFromView_inContainer<R = void, P0 = unknown, P1 = unknown>(_showFromView: P0, _inContainer: P1): R;
    dealloc<R = void>(): R;
    numberOfDarkerColors<R = number>(): R;
    setNumberOfDarkerColors<R = void, P0 = number>(_v: P0): R;
    numberOfLighterColors<R = number>(): R;
    setNumberOfLighterColors<R = void, P0 = number>(_v: P0): R;
    selectedColor<R = NSColor>(): R;
    setSelectedColor<R = void, P0 = NSColor>(_v: P0): R;
    colorList<R = NSColorList>(): R;
    setColorList<R = void, P0 = NSColorList>(_v: P0): R;
    delegate<R = NSTouchBarColorListPickerPressAndHoldPopUpDelegate>(): R;
    setDelegate<R = void, P0 = NSTouchBarColorListPickerPressAndHoldPopUpDelegate>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTouchBarColorListPickerPressAndHoldPopUp {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSScrubberDataSourceProtocol, NSScrubberDelegateProtocol, NSTouchBarPressAndHoldTransposerDelegateProtocol {
      alloc<R = NSTouchBarColorListPickerPressAndHoldPopUp>(): R;
      new: <R = NSTouchBarColorListPickerPressAndHoldPopUp>() => R;
    }
  }
}

declare const NSTouchBarColorListPickerPressAndHoldPopUp: cocoa.NSTouchBarColorListPickerPressAndHoldPopUp.CLASS;
