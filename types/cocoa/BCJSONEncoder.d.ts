/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCJSONEncoder<T0 = void, T1 = void, T2 = void> {
    // + BCJSONEncoder(MSJSONArchiver):
    archiver<R = MSJSONArchiver>(): R;
    setArchiver<R = void, P0 = MSJSONArchiver>(_v: P0): R;
  }
  namespace BCJSONEncoder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const BCJSONEncoder: cocoa.BCJSONEncoder.CLASS;
