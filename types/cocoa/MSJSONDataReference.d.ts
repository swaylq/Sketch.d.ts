/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJSONDataReference<T0 = void, T1 = void, T2 = void> extends MSJSONArchiveReference {}
  namespace MSJSONDataReference {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSJSONArchiveReference {
      alloc<R = MSJSONDataReference>(): R;
      new: <R = MSJSONDataReference>() => R;
    }
  }
}

declare const MSJSONDataReference: cocoa.MSJSONDataReference.CLASS;
