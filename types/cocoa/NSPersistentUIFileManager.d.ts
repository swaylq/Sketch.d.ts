/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUIFileManager<T0 = void, T1 = void, T2 = void> extends NSObject {
    finishPendingChangesImmediatelyWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_finishPendingChangesImmediatelyWithCompletionHandler: P0): R;
    invalidateStateDirectoryAtLaunch<R = void>(): R;
    stateDirectoryAtLaunch<R = unknown>(): R;
    hasPersistentStateToRestore<R = boolean>(): R;
    _persistentStateFileURL<R = unknown>(): R;
    discardPersistentState<R = void>(): R;
    tryCreatingPersistentStateDirectoryForURL<R = void, P0 = unknown>(_tryCreatingPersistentStateDirectoryForURL: P0): R;
    writePublicPlistData<R = void, P0 = unknown>(_writePublicPlistData: P0): R;
    _writePublicPlistData<R = void, P0 = unknown>(__writePublicPlistData: P0): R;
    writeRecords_withWindowInfos_flushingStaleData<R = void, P0 = unknown, P1 = unknown, P2 = boolean>(_writeRecords: P0, _withWindowInfos: P1, _flushingStaleData: P2): R;
    _writeRecords_withWindowInfos_flushingStaleData<R = void, P0 = unknown, P1 = unknown, P2 = boolean>(__writeRecords: P0, _withWindowInfos: P1, _flushingStaleData: P2): R;
    rewriteFile_withWindowInfos_withImpendingRecords<R = void, P0 = number, P1 = unknown, P2 = unknown>(_rewriteFile: P0, _withWindowInfos: P1, _withImpendingRecords: P2): R;
    writeRecords_toFile<R = number, P0 = unknown, P1 = number>(_writeRecords: P0, _toFile: P1): R;
    _trySystemCallDescribedBy_executor<R = boolean, P0 = string, P1 = CDUnknownBlockType>(__trySystemCallDescribedBy: P0, _executor: P1): R;
    _elideAllFileWrites<R = void>(): R;
    openPersistentStateFile<R = number>(): R;
    refreshStateDirectoryIfNecessary<R = void>(): R;
    _refreshStateDirectoryIfNecessary<R = boolean>(): R;
    reopenPersistentState<R = void>(): R;
    dealloc<R = void>(): R;
    preserveStateDirectoryAtLaunch<R = void>(): R;
    initWithBundleID<R = unknown, P0 = unknown>(_initWithBundleID: P0): R;
    initWithPersistentStateDirectoryURL<R = unknown, P0 = unknown>(_initWithPersistentStateDirectoryURL: P0): R;
    _rawHadValidStateDirectoryAtLaunch<R = boolean>(): R;
    set_rawHadValidStateDirectoryAtLaunch<R = void, P0 = boolean>(_v: P0): R;
    _rawStateDirectoryAtLaunch<R = NSPersistentUIPreservedStateDirectory>(): R;
    set_rawStateDirectoryAtLaunch<R = void, P0 = NSPersistentUIPreservedStateDirectory>(_v: P0): R;
    persistentStateDirectoryURL<R = NSURL>(): R;
  }
  namespace NSPersistentUIFileManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSPersistentUIFileManager>(): R;
      new: <R = NSPersistentUIFileManager>() => R;
      persistentStateDirectoryURLForBundleID<R = unknown, P0 = unknown>(_persistentStateDirectoryURLForBundleID: P0): R;
    }
  }
}

declare const NSPersistentUIFileManager: cocoa.NSPersistentUIFileManager.CLASS;
