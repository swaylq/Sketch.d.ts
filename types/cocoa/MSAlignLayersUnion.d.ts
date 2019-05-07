/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignLayersUnion<T0 = void, T1 = void, T2 = void> extends BCRect {
    cxx_destruct<R = void>(): R;
    makeOriginIntegral<R = void>(): R;
    frame<R = unknown>(): R;
    setValue_forKey<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _forKey: P1): R;
    absoluteRect<R = unknown>(): R;
    isLocked<R = boolean>(): R;
    layers<R = unknown>(): R;
    setLayers<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace MSAlignLayersUnion {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends BCRect {
      unionWithLayers<R = unknown, P0 = unknown>(_unionWithLayers: P0): R;
    }
  }
}

declare const MSAlignLayersUnion: cocoa.MSAlignLayersUnion.CLASS;
