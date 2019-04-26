/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableStyleColorControls<T0 = void, T1 = void, T2 = void> extends MSImmutableStylePart {
    saturation<R = number>(): R;
    setSaturation<R = void, P0 = number>(_v: P0): R;
    hue<R = number>(): R;
    setHue<R = void, P0 = number>(_v: P0): R;
    contrast<R = number>(): R;
    setContrast<R = void, P0 = number>(_v: P0): R;
    brightness<R = number>(): R;
    setBrightness<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSImmutableStyleColorControls {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableStylePart {
      alloc<R = _MSImmutableStyleColorControls>(): R;
      new: <R = _MSImmutableStyleColorControls>() => R;
    }
  }
}
