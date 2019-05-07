/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPresetPickerButton<T0 = void, T1 = void, T2 = void> extends NSButton {
    animateToOrigin<R = void, P0 = CGPoint>(_animateToOrigin: P0): R;
  }
  namespace MSPresetPickerButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = MSPresetPickerButton>(): R;
      new: <R = MSPresetPickerButton>() => R;
    }
  }
}

declare const MSPresetPickerButton: cocoa.MSPresetPickerButton.CLASS;
