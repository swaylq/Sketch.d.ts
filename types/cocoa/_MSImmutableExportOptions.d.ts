/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableExportOptions<T = any> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    exportFormats<R = NSArray>(): R;
    setExportFormats<R = void, P0 = NSArray>(_v: P0): R;
    shouldTrim<R = boolean>(): R;
    setShouldTrim<R = void, P0 = boolean>(_v: P0): R;
    layerOptions<R = number>(): R;
    setLayerOptions<R = void, P0 = number>(_v: P0): R;
    includedLayerIds<R = NSArray>(): R;
    setIncludedLayerIds<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableExportOptions<T = any> extends MSImmutableModelObject {
      alloc<R = _MSImmutableExportOptions>(): R;
      new: <R = _MSImmutableExportOptions>() => R;
    }
  }
}