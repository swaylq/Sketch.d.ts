/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilesystemItemLinkOperation<T0 = void, T1 = void, T2 = void> extends NSFilesystemItemCopyOperation {
    _shouldLinkItemAtPath_toPath<R = boolean, P0 = string, P1 = string>(__shouldLinkItemAtPath: P0, _toPath: P1): R;
    shouldLinkItemAtPath_toPath<R = boolean, P0 = unknown, P1 = unknown>(_shouldLinkItemAtPath: P0, _toPath: P1): R;
    _shouldProceedAfterErrno_linkingItemAtPath_toPath<R = boolean, P0 = number, P1 = string, P2 = string>(__shouldProceedAfterErrno: P0, _linkingItemAtPath: P1, _toPath: P2): R;
    shouldProceedAfterError_linkingItemAtPath_toPath<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_shouldProceedAfterError: P0, _linkingItemAtPath: P1, _toPath: P2): R;
  }
  namespace NSFilesystemItemLinkOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFilesystemItemCopyOperation {
      alloc<R = NSFilesystemItemLinkOperation>(): R;
      new: <R = NSFilesystemItemLinkOperation>() => R;
      filesystemItemLinkOperationWithSourcePath_destinationPath<R = unknown, P0 = unknown, P1 = unknown>(_filesystemItemLinkOperationWithSourcePath: P0, _destinationPath: P1): R;
    }
  }
}

declare const NSFilesystemItemLinkOperation: cocoa.NSFilesystemItemLinkOperation.CLASS;
