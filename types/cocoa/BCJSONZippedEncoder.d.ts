/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCJSONZippedEncoder<T0 = void, T1 = void, T2 = void> extends BCJSONEncoder {
    cxx_destruct<R = void>(): R;
    finishWriting<R = void>(): R;
    writeData_length<R = void, P0 = void, P1 = number>(_writeData: P0, _length: P1): R;
    archivePending<R = void>(): R;
    nextObjectToEncode<R = unknown>(): R;
    encodeZipable<R = void, P0 = unknown>(_encodeZipable: P0): R;
    addZipable<R = boolean, P0 = unknown>(_addZipable: P0): R;
    returnCheckingForError<R = boolean, P0 = unknown>(_returnCheckingForError: P0): R;
    dealloc<R = void>(): R;
    init<R = unknown>(): R;
    finishEncodingError<R = boolean, P0 = unknown>(_finishEncodingError: P0): R;
    encodeRawData_toSubpath_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_encodeRawData: P0, _toSubpath: P1, _error: P2): R;
    encodeObject_toSubpath_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_encodeObject: P0, _toSubpath: P1, _error: P2): R;
    objectsToEncode<R = NSMutableArray>(): R;
    setObjectsToEncode<R = void, P0 = NSMutableArray>(_v: P0): R;
    hasOpenFile<R = boolean>(): R;
    setHasOpenFile<R = void, P0 = boolean>(_v: P0): R;
    zip<R = void>(): R;
    setZip<R = void, P0 = void>(_v: P0): R;
  }
  namespace BCJSONZippedEncoder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends BCJSONEncoder {
      zipEncoderForWritingAtURL<R = unknown, P0 = unknown>(_zipEncoderForWritingAtURL: P0): R;
    }
  }
}

declare const BCJSONZippedEncoder: cocoa.BCJSONZippedEncoder.CLASS;
