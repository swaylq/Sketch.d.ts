/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableExportFormat<T = any> extends _MSImmutableExportFormat {
    isVectorExport<R = boolean>(): R;
    exportScaleInRect<R = number, P0 = CGRect>(_exportScaleInRect: P0): R;
    migratePropertiesFromV72OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV72OrEarlierWithUnarchiver: P0): R;
  }
  namespace classes {
    export interface MSImmutableExportFormat<T = any> extends _MSImmutableExportFormat {
      alloc<R = MSImmutableExportFormat>(): R;
      new: <R = MSImmutableExportFormat>() => R;
      defaultNameForScale<R = unknown, P0 = number>(_defaultNameForScale: P0): R;
    }
  }
}

declare const MSImmutableExportFormat: cocoa.classes.MSImmutableExportFormat;
