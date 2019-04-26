/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportFormatContainerProtocol<T0 = void, T1 = void, T2 = void> {
    removeExportFormat<R = void, P0 = MSExportFormat>(_removeExportFormat: P0): R;
    exportFormats<R = NSArray>(): R;
    containingLayer<R = MSLayer>(): R;
  }
  namespace MSExportFormatContainerProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
