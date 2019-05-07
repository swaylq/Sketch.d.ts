/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPageData<T0 = void, T1 = void, T2 = void> extends NSData {
    data<R = unknown>(): R;
    initWithDataNoCopy<R = unknown, P0 = unknown>(_initWithDataNoCopy: P0): R;
    deserializer<R = unknown>(): R;
    initFromSerializerStream_length<R = unknown, P0 = unknown, P1 = number>(_initFromSerializerStream: P0, _length: P1): R;
    writePath_docInfo_errorHandler_remapContents_hardLinkPath<R = number, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean, P4 = unknown>(_writePath: P0, _docInfo: P1, _errorHandler: P2, _remapContents: P3, _hardLinkPath: P4): R;
    dealloc<R = void>(): R;
    _mappedFile<R = unknown>(): R;
    initWithContentsOfMappedFile_withFileAttributes<R = unknown, P0 = unknown, P1 = unknown>(_initWithContentsOfMappedFile: P0, _withFileAttributes: P1): R;
    initWithContentsOfMappedFile<R = unknown, P0 = unknown>(_initWithContentsOfMappedFile: P0): R;
    initWithContentsOfFile<R = unknown, P0 = unknown>(_initWithContentsOfFile: P0): R;
    _setOriginalFileInfoFromFileAttributes<R = void, P0 = unknown>(__setOriginalFileInfoFromFileAttributes: P0): R;
    initWithData<R = unknown, P0 = unknown>(_initWithData: P0): R;
    initWithBytes_length<R = unknown, P0 = void, P1 = number>(_initWithBytes: P0, _length: P1): R;
    initWithBytesNoCopy_length<R = unknown, P0 = void, P1 = number>(_initWithBytesNoCopy: P0, _length: P1): R;
    init<R = unknown>(): R;
    bytes<R = void>(): R;
    length<R = number>(): R;
    writeFile<R = number, P0 = unknown>(_writeFile: P0): R;
    writeFd<R = number, P0 = number>(_writeFd: P0): R;
  }
  namespace NSPageData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSData {
      _umask<R = number>(): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSPageData: cocoa.NSPageData.CLASS;
