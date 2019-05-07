/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCHueColorPicker<T0 = void, T1 = void, T2 = void> extends BCColorPickerSliderView {}
  namespace BCHueColorPicker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends BCColorPickerSliderView {
      alloc<R = BCHueColorPicker>(): R;
      new: <R = BCHueColorPicker>() => R;
    }
  }
}

declare const BCHueColorPicker: cocoa.BCHueColorPicker.CLASS;
