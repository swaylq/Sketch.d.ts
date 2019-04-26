/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCSaturationBrightnessColorPicker<T0 = void, T1 = void, T2 = void> extends BCColorPickerBaseView {
    pickerRect<R = CGRect>(): R;
    activeRect<R = CGRect>(): R;
    groupingUndo<R = boolean>(): R;
    setGroupingUndo<R = void, P0 = boolean>(_v: P0): R;
    handlingHistoryCoalescing<R = boolean>(): R;
    setHandlingHistoryCoalescing<R = void, P0 = boolean>(_v: P0): R;
    brightness<R = number>(): R;
    setBrightness<R = void, P0 = number>(_v: P0): R;
    saturation<R = number>(): R;
    setSaturation<R = void, P0 = number>(_v: P0): R;
    hue<R = number>(): R;
    setHue<R = void, P0 = number>(_v: P0): R;
  }
  namespace BCSaturationBrightnessColorPicker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends BCColorPickerBaseView {
      alloc<R = BCSaturationBrightnessColorPicker>(): R;
      new: <R = BCSaturationBrightnessColorPicker>() => R;
    }
  }
}

declare const BCSaturationBrightnessColorPicker: cocoa.BCSaturationBrightnessColorPicker.CLASS;
