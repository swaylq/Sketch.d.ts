/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileManagerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    fileManager_shouldProceedAfterError_removingItemAtURL<R = boolean, P0 = NSFileManager, P1 = NSError, P2 = NSURL>(_fileManager: P0, _shouldProceedAfterError: P1, _removingItemAtURL: P2): R;
    fileManager_shouldProceedAfterError_removingItemAtPath<R = boolean, P0 = NSFileManager, P1 = NSError, P2 = NSString>(_fileManager: P0, _shouldProceedAfterError: P1, _removingItemAtPath: P2): R;
    fileManager_shouldRemoveItemAtURL<R = boolean, P0 = NSFileManager, P1 = NSURL>(_fileManager: P0, _shouldRemoveItemAtURL: P1): R;
    fileManager_shouldRemoveItemAtPath<R = boolean, P0 = NSFileManager, P1 = NSString>(_fileManager: P0, _shouldRemoveItemAtPath: P1): R;
    fileManager_shouldProceedAfterError_linkingItemAtURL_toURL<R = boolean, P0 = NSFileManager, P1 = NSError, P2 = NSURL, P3 = NSURL>(_fileManager: P0, _shouldProceedAfterError: P1, _linkingItemAtURL: P2, _toURL: P3): R;
    fileManager_shouldProceedAfterError_linkingItemAtPath_toPath<R = boolean, P0 = NSFileManager, P1 = NSError, P2 = NSString, P3 = NSString>(_fileManager: P0, _shouldProceedAfterError: P1, _linkingItemAtPath: P2, _toPath: P3): R;
    fileManager_shouldLinkItemAtURL_toURL<R = boolean, P0 = NSFileManager, P1 = NSURL, P2 = NSURL>(_fileManager: P0, _shouldLinkItemAtURL: P1, _toURL: P2): R;
    fileManager_shouldLinkItemAtPath_toPath<R = boolean, P0 = NSFileManager, P1 = NSString, P2 = NSString>(_fileManager: P0, _shouldLinkItemAtPath: P1, _toPath: P2): R;
    fileManager_shouldProceedAfterError_movingItemAtURL_toURL<R = boolean, P0 = NSFileManager, P1 = NSError, P2 = NSURL, P3 = NSURL>(_fileManager: P0, _shouldProceedAfterError: P1, _movingItemAtURL: P2, _toURL: P3): R;
    fileManager_shouldProceedAfterError_movingItemAtPath_toPath<R = boolean, P0 = NSFileManager, P1 = NSError, P2 = NSString, P3 = NSString>(_fileManager: P0, _shouldProceedAfterError: P1, _movingItemAtPath: P2, _toPath: P3): R;
    fileManager_shouldMoveItemAtURL_toURL<R = boolean, P0 = NSFileManager, P1 = NSURL, P2 = NSURL>(_fileManager: P0, _shouldMoveItemAtURL: P1, _toURL: P2): R;
    fileManager_shouldMoveItemAtPath_toPath<R = boolean, P0 = NSFileManager, P1 = NSString, P2 = NSString>(_fileManager: P0, _shouldMoveItemAtPath: P1, _toPath: P2): R;
    fileManager_shouldProceedAfterError_copyingItemAtURL_toURL<R = boolean, P0 = NSFileManager, P1 = NSError, P2 = NSURL, P3 = NSURL>(_fileManager: P0, _shouldProceedAfterError: P1, _copyingItemAtURL: P2, _toURL: P3): R;
    fileManager_shouldProceedAfterError_copyingItemAtPath_toPath<R = boolean, P0 = NSFileManager, P1 = NSError, P2 = NSString, P3 = NSString>(_fileManager: P0, _shouldProceedAfterError: P1, _copyingItemAtPath: P2, _toPath: P3): R;
    fileManager_shouldCopyItemAtURL_toURL<R = boolean, P0 = NSFileManager, P1 = NSURL, P2 = NSURL>(_fileManager: P0, _shouldCopyItemAtURL: P1, _toURL: P2): R;
    fileManager_shouldCopyItemAtPath_toPath<R = boolean, P0 = NSFileManager, P1 = NSString, P2 = NSString>(_fileManager: P0, _shouldCopyItemAtPath: P1, _toPath: P2): R;
  }
  namespace NSFileManagerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
