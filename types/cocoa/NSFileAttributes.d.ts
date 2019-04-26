/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileAttributes<T0 = void, T1 = void, T2 = void> extends NSDictionary {
    isDirectory<R = boolean>(): R;
    fileSystemFileNumber<R = number>(): R;
    fileSystemNumber<R = number>(): R;
    fileGroupOwnerAccountNumber<R = number>(): R;
    fileGroupOwnerAccountName<R = unknown>(): R;
    fileOwnerAccountNumber<R = number>(): R;
    fileOwnerAccountName<R = unknown>(): R;
    filePosixPermissions<R = number>(): R;
    fileType<R = unknown>(): R;
    fileModificationDate<R = unknown>(): R;
    fileSize<R = number>(): R;
    keyEnumerator<R = unknown>(): R;
    count<R = number>(): R;
    objectForKey<R = unknown, P0 = unknown>(_objectForKey: P0): R;
    isEqual<R = boolean, P0 = unknown>(_isEqual: P0): R;
    hash<R = number>(): R;
    dealloc<R = void>(): R;
  }
  namespace NSFileAttributes {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDictionary {
      attributesWithStat<R = unknown, P0 = stat>(_attributesWithStat: P0): R;
      _attributesAtURL_partialReturn_filterResourceFork_error<R = unknown, P0 = unknown, P1 = boolean, P2 = boolean, P3 = unknown>(__attributesAtURL: P0, _partialReturn: P1, _filterResourceFork: P2, _error: P3): R;
      _attributesAtPath_partialReturn_filterResourceFork_error<R = unknown, P0 = unknown, P1 = boolean, P2 = boolean, P3 = unknown>(__attributesAtPath: P0, _partialReturn: P1, _filterResourceFork: P2, _error: P3): R;
      _populateCatInfo_forURL_statInfo_error<R = boolean, P0 = unknown, P1 = unknown, P2 = stat, P3 = unknown>(__populateCatInfo: P0, _forURL: P1, _statInfo: P2, _error: P3): R;
      attributesAtPath_traverseLink<R = unknown, P0 = unknown, P1 = boolean>(_attributesAtPath: P0, _traverseLink: P1): R;
    }
  }
}

declare const NSFileAttributes: cocoa.NSFileAttributes.CLASS;
