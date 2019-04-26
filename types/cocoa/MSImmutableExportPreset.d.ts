/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableExportPreset<T0 = void, T1 = void, T2 = void> extends _MSImmutableExportPreset {}
  namespace MSImmutableExportPreset {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableExportPreset {
      alloc<R = MSImmutableExportPreset>(): R;
      new: <R = MSImmutableExportPreset>() => R;
    }
  }
}

declare const MSImmutableExportPreset: cocoa.MSImmutableExportPreset.CLASS;
