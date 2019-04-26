/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorListPickerPressAndHoldPopUpDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    popUpDidEndColorSelection_cancelled<R = void, P0 = NSTouchBarColorListPickerPressAndHoldPopUp, P1 = boolean>(_popUpDidEndColorSelection: P0, _cancelled: P1): R;
    popUp_didHighlightColor_withKey_atIndex<R = void, P0 = NSTouchBarColorListPickerPressAndHoldPopUp, P1 = NSColor, P2 = NSString, P3 = number>(_popUp: P0, _didHighlightColor: P1, _withKey: P2, _atIndex: P3): R;
    popUpDidDismiss<R = void, P0 = NSTouchBarColorListPickerPressAndHoldPopUp>(_popUpDidDismiss: P0): R;
  }
  namespace NSTouchBarColorListPickerPressAndHoldPopUpDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
