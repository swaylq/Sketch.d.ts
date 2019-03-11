/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCJSONDecoder<T = any> {
    // + BCJSONDecoder(MSJSONUnarchiver):
    unarchiver<R = cocoa.MSJSONUnarchiver>(): R;
    setUnarchiver<R = void, P0 = cocoa.MSJSONUnarchiver>(_v: P0): R;
  }
  namespace classes {
    export interface BCJSONDecoder<T = any> {
      // + BCJSONDecoder(MSJSONUnarchiver):
      
    }
  }
}

declare const BCJSONDecoder: cocoa.classes.BCJSONDecoder;
