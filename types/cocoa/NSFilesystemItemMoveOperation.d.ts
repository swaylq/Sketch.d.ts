/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilesystemItemMoveOperation<T0 = void, T1 = void, T2 = void> extends NSOperation {
    _setError<R = void, P0 = unknown>(__setError: P0): R;
    error<R = unknown>(): R;
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
    delegate<R = unknown>(): R;
    filesystemItemCopyOperation_shouldProceedAfterError_copyingItemAtPath_toPath<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_filesystemItemCopyOperation: P0, _shouldProceedAfterError: P1, _copyingItemAtPath: P2, _toPath: P3): R;
    initWithSourceURL_destinationURL_options<R = void, P0 = unknown, P1 = unknown, P2 = number>(_initWithSourceURL: P0, _destinationURL: P1, _options: P2): R;
  }
  namespace NSFilesystemItemMoveOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOperation {
      alloc<R = NSFilesystemItemMoveOperation>(): R;
      new: <R = NSFilesystemItemMoveOperation>() => R;
      filesystemItemMoveOperationWithSourceURL_destinationURL_options<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_filesystemItemMoveOperationWithSourceURL: P0, _destinationURL: P1, _options: P2): R;
      _errorWithErrno_sourceURL_destinationURL<R = unknown, P0 = number, P1 = unknown, P2 = unknown>(__errorWithErrno: P0, _sourceURL: P1, _destinationURL: P2): R;
    }
  }
}

declare const NSFilesystemItemMoveOperation: cocoa.NSFilesystemItemMoveOperation.CLASS;
