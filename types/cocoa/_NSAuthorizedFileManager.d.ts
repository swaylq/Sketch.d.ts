/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAuthorizedFileManager<T0 = void, T1 = void, T2 = void> extends NSFileManager {
    replaceItemAtURL_withItemAtURL_backupItemName_options_resultingItemURL_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number, P4 = unknown, P5 = unknown>(_replaceItemAtURL: P0, _withItemAtURL: P1, _backupItemName: P2, _options: P3, _resultingItemURL: P4, _error: P5): R;
    setAttributes_ofItemAtPath_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_setAttributes: P0, _ofItemAtPath: P1, _error: P2): R;
    _withPartitionedAttributesFromDictionary_performBlock<R = boolean, P0 = unknown, P1 = CDUnknownBlockType>(__withPartitionedAttributesFromDictionary: P0, _performBlock: P1): R;
    createSymbolicLinkAtPath_withDestinationPath_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_createSymbolicLinkAtPath: P0, _withDestinationPath: P1, _error: P2): R;
    _handleLibSecInitStatus_xpcError_error<R = boolean, P0 = number, P1 = unknown, P2 = unknown>(__handleLibSecInitStatus: P0, _xpcError: P1, _error: P2): R;
    dealloc<R = void>(): R;
    initWithAuthData<R = unknown, P0 = unknown>(_initWithAuthData: P0): R;
  }
  namespace _NSAuthorizedFileManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFileManager {
      alloc<R = _NSAuthorizedFileManager>(): R;
      new: <R = _NSAuthorizedFileManager>() => R;
    }
  }
}
