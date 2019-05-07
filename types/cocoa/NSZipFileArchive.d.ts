/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSZipFileArchive<T0 = void, T1 = void, T2 = void> extends NSObject {
    isValid<R = boolean>(): R;
    invalidate<R = void>(): R;
    writeToFile_options_error<R = boolean, P0 = unknown, P1 = number, P2 = unknown>(_writeToFile: P0, _options: P1, _error: P2): R;
    archiveStream<R = unknown>(): R;
    archiveData<R = unknown>(): R;
    propertiesForEntryName<R = unknown, P0 = unknown>(_propertiesForEntryName: P0): R;
    writeContentsForEntryName_toFile_options_error<R = boolean, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(_writeContentsForEntryName: P0, _toFile: P1, _options: P2, _error: P3): R;
    streamForEntryName<R = unknown, P0 = unknown>(_streamForEntryName: P0): R;
    contentsForEntryName<R = unknown, P0 = unknown>(_contentsForEntryName: P0): R;
    entryNames<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithEntryNames_dataProvider_options<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_initWithEntryNames: P0, _dataProvider: P1, _options: P2): R;
    initWithEntryNames_contents_properties_options<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(_initWithEntryNames: P0, _contents: P1, _properties: P2, _options: P3): R;
    initWithData_options_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithData: P0, _options: P1, _error: P2): R;
    initWithPath_options_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithPath: P0, _options: P1, _error: P2): R;
  }
  namespace NSZipFileArchive {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSZipFileArchive>(): R;
      new: <R = NSZipFileArchive>() => R;
    }
  }
}

declare const NSZipFileArchive: cocoa.NSZipFileArchive.CLASS;
