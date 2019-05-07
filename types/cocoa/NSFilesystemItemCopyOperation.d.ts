/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilesystemItemCopyOperation<T0 = void, T1 = void, T2 = void> extends NSDirectoryTraversalOperation {
    _shouldProceedAfterErrno_copyingItemAtPath_toPath<R = boolean, P0 = number, P1 = string, P2 = string>(__shouldProceedAfterErrno: P0, _copyingItemAtPath: P1, _toPath: P2): R;
    shouldProceedAfterError_copyingItemAtPath_toPath<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_shouldProceedAfterError: P0, _copyingItemAtPath: P1, _toPath: P2): R;
    _shouldCopyItemAtPath_toPath<R = boolean, P0 = string, P1 = string>(__shouldCopyItemAtPath: P0, _toPath: P1): R;
    shouldCopyItemAtPath_toPath<R = boolean, P0 = unknown, P1 = unknown>(_shouldCopyItemAtPath: P0, _toPath: P1): R;
    initWithSourcePath_destinationPath_options<R = void, P0 = unknown, P1 = unknown, P2 = number>(_initWithSourcePath: P0, _destinationPath: P1, _options: P2): R;
  }
  namespace NSFilesystemItemCopyOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDirectoryTraversalOperation {
      alloc<R = NSFilesystemItemCopyOperation>(): R;
      new: <R = NSFilesystemItemCopyOperation>() => R;
      filesystemItemCopyOperationWithSourcePath_destinationPath_options<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_filesystemItemCopyOperationWithSourcePath: P0, _destinationPath: P1, _options: P2): R;
      _errorWithErrno_sourcePath_destinationPath<R = unknown, P0 = number, P1 = unknown, P2 = unknown>(__errorWithErrno: P0, _sourcePath: P1, _destinationPath: P2): R;
    }
  }
}

declare const NSFilesystemItemCopyOperation: cocoa.NSFilesystemItemCopyOperation.CLASS;
