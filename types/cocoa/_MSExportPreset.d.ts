/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSExportPreset<T0 = void, T1 = void, T2 = void> extends MSModelObject {
    moveExportFormatIndex_toIndex<R = void, P0 = number, P1 = number>(_moveExportFormatIndex: P0, _toIndex: P1): R;
    removeAllExportFormats<R = void>(): R;
    removeExportFormatsAtIndexes<R = void, P0 = unknown>(_removeExportFormatsAtIndexes: P0): R;
    removeExportFormatAtIndex<R = void, P0 = number>(_removeExportFormatAtIndex: P0): R;
    removeExportFormat<R = void, P0 = unknown>(_removeExportFormat: P0): R;
    insertExportFormats_afterExportFormat<R = void, P0 = unknown, P1 = unknown>(_insertExportFormats: P0, _afterExportFormat: P1): R;
    insertExportFormat_afterExportFormat<R = void, P0 = unknown, P1 = unknown>(_insertExportFormat: P0, _afterExportFormat: P1): R;
    insertExportFormats_beforeExportFormat<R = void, P0 = unknown, P1 = unknown>(_insertExportFormats: P0, _beforeExportFormat: P1): R;
    insertExportFormat_beforeExportFormat<R = void, P0 = unknown, P1 = unknown>(_insertExportFormat: P0, _beforeExportFormat: P1): R;
    insertExportFormat_atIndex<R = void, P0 = unknown, P1 = number>(_insertExportFormat: P0, _atIndex: P1): R;
    addExportFormats<R = void, P0 = unknown>(_addExportFormats: P0): R;
    addExportFormat<R = void, P0 = unknown>(_addExportFormat: P0): R;
    hasDefaultValues<R = boolean>(): R;
    exportFormats<R = NSArray>(): R;
    setExportFormats<R = void, P0 = NSArray>(_v: P0): R;
    shouldApplyAutomatically<R = boolean>(): R;
    setShouldApplyAutomatically<R = void, P0 = boolean>(_v: P0): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace _MSExportPreset {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSModelObject {
      alloc<R = _MSExportPreset>(): R;
      new: <R = _MSExportPreset>() => R;
    }
  }
}
