/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUIWindowSnapshotter<T0 = void, T1 = void, T2 = void> extends NSObject {
    writeWindowSnapshot_length_width_height_bytesPerRow_toFile_inDirectory_encryptingWithKey_uuid_checksum_fd<R = boolean, P0 = void, P1 = number, P2 = number, P3 = number, P4 = number, P5 = unknown, P6 = unknown, P7 = unknown, P8 = unknown, P9 = number, P10 = number>(_writeWindowSnapshot: P0, _length: P1, _width: P2, _height: P3, _bytesPerRow: P4, _toFile: P5, _inDirectory: P6, _encryptingWithKey: P7, _uuid: P8, _checksum: P9, _fd: P10): R;
    captureAndWriteSnapshotForWindowNumber_forWindowID_waitUntilDone<R = void, P0 = number, P1 = number, P2 = boolean>(_captureAndWriteSnapshotForWindowNumber: P0, _forWindowID: P1, _waitUntilDone: P2): R;
    deleteSnapshotForWindowID<R = void, P0 = number>(_deleteSnapshotForWindowID: P0): R;
    enqueueWindowForSnapshotting_forWindowNumber<R = void, P0 = number, P1 = number>(_enqueueWindowForSnapshotting: P0, _forWindowNumber: P1): R;
    finishPendingSnapshotsImmediatelyWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_finishPendingSnapshotsImmediatelyWithCompletionHandler: P0): R;
    asynchronouslySnapshotPendingWindows<R = void>(): R;
    synchronouslySnapshotPendingWindows<R = void>(): R;
    snapshotOnePendingWindowWaitUntilDone<R = boolean, P0 = boolean>(_snapshotOnePendingWindowWaitUntilDone: P0): R;
    dequeueOneWindowToSnapshot_windowNumber<R = boolean, P0 = number, P1 = number>(_dequeueOneWindowToSnapshot: P0, _windowNumber: P1): R;
    accessWindowBits_handler<R = void, P0 = number, P1 = CDUnknownBlockType>(_accessWindowBits: P0, _handler: P1): R;
    windowHasBeenSnapshotted<R = boolean, P0 = number>(_windowHasBeenSnapshotted: P0): R;
    discardAllSnapshotData<R = void>(): R;
    updateSuddenTermination<R = void>(): R;
    setCryptoKey_uuid<R = boolean, P0 = unknown, P1 = unknown>(_setCryptoKey: P0, _uuid: P1): R;
    dealloc<R = void>(): R;
    initWithPersistentStateDirectoryURL_IOQueue<R = unknown, P0 = unknown, P1 = unknown>(_initWithPersistentStateDirectoryURL: P0, _IOQueue: P1): R;
    initWithFileManager<R = unknown, P0 = unknown>(_initWithFileManager: P0): R;
    cryptoKey<R = NSData>(): R;
    setCryptoKey<R = void, P0 = NSData>(_v: P0): R;
    cryptoUUID<R = NSData>(): R;
    setCryptoUUID<R = void, P0 = NSData>(_v: P0): R;
  }
  namespace NSPersistentUIWindowSnapshotter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSPersistentUIWindowSnapshotter>(): R;
      new: <R = NSPersistentUIWindowSnapshotter>() => R;
    }
  }
}

declare const NSPersistentUIWindowSnapshotter: cocoa.NSPersistentUIWindowSnapshotter.CLASS;
