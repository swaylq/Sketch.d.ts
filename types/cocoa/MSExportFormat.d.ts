/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportFormat<T0 = void, T1 = void, T2 = void> extends _MSExportFormat {
    exportScaleInRect<R = number, P0 = CGRect>(_exportScaleInRect: P0): R;
    description<R = unknown>(): R;
    remove<R = void>(): R;
    container<R = unknown>(): R;
    parentLayer<R = unknown>(): R;
    initWithScale_name_fileFormat_absoluteSize_namingScheme<R = unknown, P0 = number, P1 = unknown, P2 = unknown, P3 = number, P4 = number>(_initWithScale: P0, _name: P1, _fileFormat: P2, _absoluteSize: P3, _namingScheme: P4): R;
    initWithScale_name_fileFormat<R = unknown, P0 = number, P1 = unknown, P2 = unknown>(_initWithScale: P0, _name: P1, _fileFormat: P2): R;
    isScalableExport<R = boolean>(): R;
    baseFileName<R = NSString>(): R;
  }
  namespace MSExportFormat {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSExportFormat {
      alloc<R = MSExportFormat>(): R;
      new: <R = MSExportFormat>() => R;
      exportableFilenameForLayerName_exportFormat<R = unknown, P0 = unknown, P1 = unknown>(_exportableFilenameForLayerName: P0, _exportFormat: P1): R;
      exportableFilenameBodyForLayerName_exportFormat<R = unknown, P0 = unknown, P1 = unknown>(_exportableFilenameBodyForLayerName: P0, _exportFormat: P1): R;
      validFormats<R = unknown>(): R;
      formatWithScale_name_fileFormat_absoluteSize_namingScheme<R = unknown, P0 = number, P1 = unknown, P2 = unknown, P3 = number, P4 = number>(_formatWithScale: P0, _name: P1, _fileFormat: P2, _absoluteSize: P3, _namingScheme: P4): R;
      formatWithScale_name_fileFormat<R = unknown, P0 = number, P1 = unknown, P2 = unknown>(_formatWithScale: P0, _name: P1, _fileFormat: P2): R;
    }
  }
}

declare const MSExportFormat: cocoa.MSExportFormat.CLASS;
