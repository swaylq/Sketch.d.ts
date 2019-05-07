/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSStyleColorControls<T0 = void, T1 = void, T2 = void> extends MSStylePart {
    saturation<R = number>(): R;
    setSaturation<R = void, P0 = number>(_v: P0): R;
    hue<R = number>(): R;
    setHue<R = void, P0 = number>(_v: P0): R;
    contrast<R = number>(): R;
    setContrast<R = void, P0 = number>(_v: P0): R;
    brightness<R = number>(): R;
    setBrightness<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSStyleColorControls {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSStylePart {
      alloc<R = _MSStyleColorControls>(): R;
      new: <R = _MSStyleColorControls>() => R;
    }
  }
}
