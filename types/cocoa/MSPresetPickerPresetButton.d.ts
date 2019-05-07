/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPresetPickerPresetButton<T0 = void, T1 = void, T2 = void> extends MSPresetPickerButton, NSDraggingSourceProtocol {
    innerShadow<R = unknown>(): R;
    frameConsideringAnimation<R = CGRect>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSPresetPickerPresetButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSPresetPickerButton, NSDraggingSourceProtocol {
      alloc<R = MSPresetPickerPresetButton>(): R;
      new: <R = MSPresetPickerPresetButton>() => R;
    }
  }
}

declare const MSPresetPickerPresetButton: cocoa.MSPresetPickerPresetButton.CLASS;
