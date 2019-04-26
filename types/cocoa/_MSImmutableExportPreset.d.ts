/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableExportPreset<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    exportFormats<R = NSArray>(): R;
    setExportFormats<R = void, P0 = NSArray>(_v: P0): R;
    shouldApplyAutomatically<R = boolean>(): R;
    setShouldApplyAutomatically<R = void, P0 = boolean>(_v: P0): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace _MSImmutableExportPreset {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
      alloc<R = _MSImmutableExportPreset>(): R;
      new: <R = _MSImmutableExportPreset>() => R;
    }
  }
}
