/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportOptions<T0 = void, T1 = void, T2 = void> extends _MSExportOptions, MSExportFormatContainerProtocol {
    firstFormat<R = unknown>(): R;
  }
  namespace MSExportOptions {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSExportOptions, MSExportFormatContainerProtocol {
      alloc<R = MSExportOptions>(): R;
      new: <R = MSExportOptions>() => R;
      nextMostAppropriateExportFormatToAdd<R = unknown, P0 = unknown>(_nextMostAppropriateExportFormatToAdd: P0): R;
    }
  }
}

declare const MSExportOptions: cocoa.MSExportOptions.CLASS;
