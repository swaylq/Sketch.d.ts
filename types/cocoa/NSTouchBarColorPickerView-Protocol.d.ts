/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerViewProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    showMostRecentSavedColor<R = void>(): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    allowsAlpha<R = boolean>(): R;
    setAllowsAlpha<R = void, P0 = boolean>(_v: P0): R;
    currentColor<R = NSColor>(): R;
    setCurrentColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace NSTouchBarColorPickerViewProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
      preferredColorSwatchType<R = number>(): R;
    }
  }
}
