/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJSONOriginalFileReference<T0 = void, T1 = void, T2 = void> extends MSJSONArchiveReference {}
  namespace MSJSONOriginalFileReference {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSJSONArchiveReference {
      alloc<R = MSJSONOriginalFileReference>(): R;
      new: <R = MSJSONOriginalFileReference>() => R;
    }
  }
}

declare const MSJSONOriginalFileReference: cocoa.MSJSONOriginalFileReference.CLASS;
