/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableExportOptions<T0 = void, T1 = void, T2 = void> extends _MSImmutableExportOptions {
    firstFormat<R = unknown>(): R;
    migratePropertiesFromV72OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV72OrEarlierWithUnarchiver: P0): R;
  }
  namespace MSImmutableExportOptions {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableExportOptions {
      alloc<R = MSImmutableExportOptions>(): R;
      new: <R = MSImmutableExportOptions>() => R;
    }
  }
}

declare const MSImmutableExportOptions: cocoa.MSImmutableExportOptions.CLASS;
