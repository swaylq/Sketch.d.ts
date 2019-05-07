/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSavePanelTagSetter<T0 = void, T1 = void, T2 = void> extends NSObject, NSFilePresenterProtocol {
    _setTagsForURL<R = void, P0 = unknown>(__setTagsForURL: P0): R;
    _stopWatching<R = void>(): R;
    _scheduleStopWatching<R = void>(): R;
    _doneWatching<R = void>(): R;
    _startWatching<R = void>(): R;
    _performFirstCheck<R = void>(): R;
    _asynchronouslyWaitForURLToChangeThenSetTags<R = void>(): R;
    _snapshotOfFileSystemState<R = unknown>(): R;
    _checkAndSetTagsForURL_usingAttributeCache<R = boolean, P0 = unknown, P1 = boolean>(__checkAndSetTagsForURL: P0, _usingAttributeCache: P1): R;
    _enumerateURLsUsingBlock<R = void, P0 = CDUnknownBlockType>(__enumerateURLsUsingBlock: P0): R;
    _URLForDirectoryToWatch<R = unknown>(): R;
    _isRelevantURL<R = boolean, P0 = unknown>(__isRelevantURL: P0): R;
    dealloc<R = void>(): R;
    _initWithURL_useSecurityScopedURL_tags<R = unknown, P0 = unknown, P1 = boolean, P2 = unknown>(__initWithURL: P0, _useSecurityScopedURL: P1, _tags: P2): R;
    _initWithTags<R = unknown, P0 = unknown>(__initWithTags: P0): R;
    presentedItemURL<R = NSURL>(): R;
    presentedItemOperationQueue<R = NSOperationQueue>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    observedPresentedItemUbiquityAttributes<R = NSSet>(): R;
    primaryPresentedItemURL<R = NSURL>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSSavePanelTagSetter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSFilePresenterProtocol {
      alloc<R = _NSSavePanelTagSetter>(): R;
      new: <R = _NSSavePanelTagSetter>() => R;
      _relevantFileAttributesForURL_cached<R = unknown, P0 = unknown, P1 = boolean>(__relevantFileAttributesForURL: P0, _cached: P1): R;
      _tagSetterFinished<R = void, P0 = unknown>(__tagSetterFinished: P0): R;
      _waitForURL_useSecurityScopedURL_withNameFieldString_thenSetTags<R = void, P0 = unknown, P1 = boolean, P2 = unknown, P3 = unknown>(__waitForURL: P0, _useSecurityScopedURL: P1, _withNameFieldString: P2, _thenSetTags: P3): R;
      _prefixForURL_nameFieldString<R = unknown, P0 = unknown, P1 = unknown>(__prefixForURL: P0, _nameFieldString: P1): R;
    }
  }
}
