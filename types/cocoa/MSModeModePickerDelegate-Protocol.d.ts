/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSModeModePickerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSStackViewDelegateProtocol {
    pickerView_labelForMode<R = NSString, P0 = MSModePickerView, P1 = number>(_pickerView: P0, _labelForMode: P1): R;
    pickerViewDidChangeMode<R = void, P0 = MSModePickerView>(_pickerViewDidChangeMode: P0): R;
  }
  namespace MSModeModePickerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSStackViewDelegateProtocol {}
  }
}
