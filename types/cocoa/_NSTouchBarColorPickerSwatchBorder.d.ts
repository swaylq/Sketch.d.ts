/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarColorPickerSwatchBorder<T0 = void, T1 = void, T2 = void> extends NSView {
    wantsLayer<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
  }
  namespace _NSTouchBarColorPickerSwatchBorder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSTouchBarColorPickerSwatchBorder>(): R;
      new: <R = _NSTouchBarColorPickerSwatchBorder>() => R;
    }
  }
}
