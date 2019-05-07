/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardWriterProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    writeData_toPasteboard<R = void, P0 = MSPasteboardLayers, P1 = NSPasteboard>(_writeData: P0, _toPasteboard: P1): R;
    supportedPasteboardTypes<R = NSArray>(): R;
    canWriteDataToPasteboard<R = boolean, P0 = NSPasteboard>(_canWriteDataToPasteboard: P0): R;
  }
  namespace MSPasteboardWriterProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
