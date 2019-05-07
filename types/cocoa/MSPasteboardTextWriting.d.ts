/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardTextWriting<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSPasteboardTextWriting {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSPasteboardTextWriting>(): R;
      new: <R = MSPasteboardTextWriting>() => R;
      writeAttributedString_toPasteboard_type_documentColorSpace<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_writeAttributedString: P0, _toPasteboard: P1, _type: P2, _documentColorSpace: P3): R;
      supportedTypes<R = unknown>(): R;
    }
  }
}

declare const MSPasteboardTextWriting: cocoa.MSPasteboardTextWriting.CLASS;
