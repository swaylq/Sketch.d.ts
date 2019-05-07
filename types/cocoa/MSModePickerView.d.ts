/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSModePickerView<T0 = void, T1 = void, T2 = void> extends NSStackView {
    cxx_destruct<R = void>(): R;
    modeForButton<R = number, P0 = unknown>(_modeForButton: P0): R;
    buttonForMode<R = unknown, P0 = number>(_buttonForMode: P0): R;
    labelForMode<R = unknown, P0 = number>(_labelForMode: P0): R;
    deselectAllButtons<R = void>(): R;
    refreshButtonStates<R = void>(): R;
    buttonAction<R = void, P0 = unknown>(_buttonAction: P0): R;
    awakeFromNib<R = void>(): R;
    disabledModes<R = NSIndexSet>(): R;
    setDisabledModes<R = void, P0 = NSIndexSet>(_v: P0): R;
    pickerMode<R = number>(): R;
    setPickerMode<R = void, P0 = number>(_v: P0): R;
    delegate<R = MSModeModePickerDelegate>(): R;
    setDelegate<R = void, P0 = MSModeModePickerDelegate>(_v: P0): R;
    buttons<R = NSArray>(): R;
  }
  namespace MSModePickerView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSStackView {
      alloc<R = MSModePickerView>(): R;
      new: <R = MSModePickerView>() => R;
    }
  }
}

declare const MSModePickerView: cocoa.MSModePickerView.CLASS;
