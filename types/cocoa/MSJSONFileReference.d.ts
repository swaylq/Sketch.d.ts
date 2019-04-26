/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJSONFileReference<T0 = void, T1 = void, T2 = void> extends MSJSONArchiveReference {}
  namespace MSJSONFileReference {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSJSONArchiveReference {
      alloc<R = MSJSONFileReference>(): R;
      new: <R = MSJSONFileReference>() => R;
    }
  }
}

declare const MSJSONFileReference: cocoa.MSJSONFileReference.CLASS;
