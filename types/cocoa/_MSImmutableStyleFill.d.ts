/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableStyleFill<T0 = void, T1 = void, T2 = void> extends MSImmutableStyleBasicFill {
    patternTileScale<R = number>(): R;
    setPatternTileScale<R = void, P0 = number>(_v: P0): R;
    patternFillType<R = number>(): R;
    setPatternFillType<R = void, P0 = number>(_v: P0): R;
    noiseIntensity<R = number>(): R;
    setNoiseIntensity<R = void, P0 = number>(_v: P0): R;
    noiseIndex<R = number>(): R;
    setNoiseIndex<R = void, P0 = number>(_v: P0): R;
    image<R = MSImageData>(): R;
    setImage<R = void, P0 = MSImageData>(_v: P0): R;
  }
  namespace _MSImmutableStyleFill {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableStyleBasicFill {
      alloc<R = _MSImmutableStyleFill>(): R;
      new: <R = _MSImmutableStyleFill>() => R;
    }
  }
}
