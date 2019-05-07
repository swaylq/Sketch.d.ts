/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileHandle<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
    _closeOnDealloc<R = void>(): R;
    setReadabilityHandler<R = void, P0 = CDUnknownBlockType>(_setReadabilityHandler: P0): R;
    readabilityHandler<R = CDUnknownBlockType>(): R;
    setWriteabilityHandler<R = void, P0 = CDUnknownBlockType>(_setWriteabilityHandler: P0): R;
    writeabilityHandler<R = CDUnknownBlockType>(): R;
    fileDescriptor<R = number>(): R;
    closeFile<R = void>(): R;
    synchronizeFile<R = void>(): R;
    truncateFileAtOffset<R = void, P0 = number>(_truncateFileAtOffset: P0): R;
    seekToFileOffset<R = void, P0 = number>(_seekToFileOffset: P0): R;
    seekToEndOfFile<R = number>(): R;
    writeData<R = void, P0 = unknown>(_writeData: P0): R;
    readDataOfLength<R = unknown, P0 = number>(_readDataOfLength: P0): R;
    readDataToEndOfFile<R = unknown>(): R;
    initWithPath_flags_createMode_error<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown>(_initWithPath: P0, _flags: P1, _createMode: P2, _error: P3): R;
    initWithURL_flags_createMode_error<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown>(_initWithURL: P0, _flags: P1, _createMode: P2, _error: P3): R;
    initWithFileDescriptor<R = unknown, P0 = number>(_initWithFileDescriptor: P0): R;
    initWithFileDescriptor_closeOnDealloc<R = unknown, P0 = number, P1 = boolean>(_initWithFileDescriptor: P0, _closeOnDealloc: P1): R;
    initWithPath_flags_createMode<R = unknown, P0 = unknown, P1 = number, P2 = number>(_initWithPath: P0, _flags: P1, _createMode: P2): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    classForCoder<R = unknown>(): R;
    offsetInFile<R = number>(): R;
    availableData<R = NSData>(): R;
  }
  namespace NSFileHandle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
      alloc<R = NSFileHandle>(): R;
      new: <R = NSFileHandle>() => R;
      fileHandleForUpdatingURL_mode_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_fileHandleForUpdatingURL: P0, _mode: P1, _error: P2): R;
      fileHandleForWritingToURL_mode_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_fileHandleForWritingToURL: P0, _mode: P1, _error: P2): R;
      fileHandleForReadingFromURL_mode_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_fileHandleForReadingFromURL: P0, _mode: P1, _error: P2): R;
      fileHandleForUpdatingURL_error<R = unknown, P0 = unknown, P1 = unknown>(_fileHandleForUpdatingURL: P0, _error: P1): R;
      fileHandleForWritingToURL_error<R = unknown, P0 = unknown, P1 = unknown>(_fileHandleForWritingToURL: P0, _error: P1): R;
      fileHandleForReadingFromURL_error<R = unknown, P0 = unknown, P1 = unknown>(_fileHandleForReadingFromURL: P0, _error: P1): R;
      fileHandleForUpdatingAtPath<R = unknown, P0 = unknown>(_fileHandleForUpdatingAtPath: P0): R;
      fileHandleForWritingAtPath<R = unknown, P0 = unknown>(_fileHandleForWritingAtPath: P0): R;
      fileHandleForReadingAtPath<R = unknown, P0 = unknown>(_fileHandleForReadingAtPath: P0): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      fileHandleWithNullDevice<R = unknown>(): R;
      fileHandleWithStandardError<R = unknown>(): R;
      fileHandleWithStandardOutput<R = unknown>(): R;
      fileHandleWithStandardInput<R = unknown>(): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSFileHandle: cocoa.NSFileHandle.CLASS;
