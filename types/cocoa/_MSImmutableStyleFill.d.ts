/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableStyleFill<T = any> extends MSImmutableStyleBasicFill {
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
  namespace classes {
    export interface _MSImmutableStyleFill<T = any> extends MSImmutableStyleBasicFill {
      alloc<R = _MSImmutableStyleFill>(): R;
      new: <R = _MSImmutableStyleFill>() => R;
    }
  }
}