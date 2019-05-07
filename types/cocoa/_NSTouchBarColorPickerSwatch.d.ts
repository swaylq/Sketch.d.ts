/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarColorPickerSwatch<T0 = void, T1 = void, T2 = void> extends NSView {
    accessibilityValueAttribute<R = unknown>(): R;
    accessibilityIsValueAttributeSettable<R = boolean>(): R;
    color<R = NSColor>(): R;
    setColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace _NSTouchBarColorPickerSwatch {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSTouchBarColorPickerSwatch>(): R;
      new: <R = _NSTouchBarColorPickerSwatch>() => R;
    }
  }
}
