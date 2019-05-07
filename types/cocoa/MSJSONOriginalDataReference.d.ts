/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJSONOriginalDataReference<T0 = void, T1 = void, T2 = void> extends MSJSONDataReference {}
  namespace MSJSONOriginalDataReference {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSJSONDataReference {
      alloc<R = MSJSONOriginalDataReference>(): R;
      new: <R = MSJSONOriginalDataReference>() => R;
    }
  }
}

declare const MSJSONOriginalDataReference: cocoa.MSJSONOriginalDataReference.CLASS;
