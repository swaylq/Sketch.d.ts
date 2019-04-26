/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FMDatabasePool<T0 = void, T1 = void, T2 = void> extends NSObject {
    inSavePoint<R = unknown, P0 = CDUnknownBlockType>(_inSavePoint: P0): R;
    inTransaction<R = void, P0 = CDUnknownBlockType>(_inTransaction: P0): R;
    inDeferredTransaction<R = void, P0 = CDUnknownBlockType>(_inDeferredTransaction: P0): R;
    beginTransaction_withBlock<R = void, P0 = boolean, P1 = CDUnknownBlockType>(_beginTransaction: P0, _withBlock: P1): R;
    inDatabase<R = void, P0 = CDUnknownBlockType>(_inDatabase: P0): R;
    releaseAllDatabases<R = void>(): R;
    countOfOpenDatabases<R = number>(): R;
    countOfCheckedOutDatabases<R = number>(): R;
    countOfCheckedInDatabases<R = number>(): R;
    db<R = unknown>(): R;
    pushDatabaseBackInPool<R = void, P0 = unknown>(_pushDatabaseBackInPool: P0): R;
    executeLocked<R = void, P0 = CDUnknownBlockType>(_executeLocked: P0): R;
    dealloc<R = void>(): R;
    initWithPath<R = unknown, P0 = unknown>(_initWithPath: P0): R;
    initWithPath_flags<R = unknown, P0 = unknown, P1 = number>(_initWithPath: P0, _flags: P1): R;
    openFlags<R = number>(): R;
    maximumNumberOfDatabasesToCreate<R = number>(): R;
    setMaximumNumberOfDatabasesToCreate<R = void, P0 = number>(_v: P0): R;
    delegate<R = unknown>(): R;
    setDelegate<R = void, P0 = unknown>(_v: P0): R;
    path<R = NSString>(): R;
    setPath<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace FMDatabasePool {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = FMDatabasePool>(): R;
      new: <R = FMDatabasePool>() => R;
      databasePoolWithPath_flags<R = unknown, P0 = unknown, P1 = number>(_databasePoolWithPath: P0, _flags: P1): R;
      databasePoolWithPath<R = unknown, P0 = unknown>(_databasePoolWithPath: P0): R;
    }
  }
}

declare const FMDatabasePool: cocoa.FMDatabasePool.CLASS;
