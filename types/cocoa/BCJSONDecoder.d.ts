/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCJSONDecoder<T0 = void, T1 = void, T2 = void> {
    // + BCJSONDecoder(MSJSONUnarchiver):
    unarchiver<R = MSJSONUnarchiver>(): R;
    setUnarchiver<R = void, P0 = MSJSONUnarchiver>(_v: P0): R;
  }
  namespace BCJSONDecoder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const BCJSONDecoder: cocoa.BCJSONDecoder.CLASS;
