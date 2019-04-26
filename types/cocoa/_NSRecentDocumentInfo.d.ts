/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSRecentDocumentInfo<T0 = void, T1 = void, T2 = void> extends NSObject, NSRecentDocumentInfoProtocol {
    transferSecurityScope<R = void>(): R;
    resolveByMountingVolumesIfNecessary_queue_completionHandler<R = void, P0 = boolean, P1 = unknown, P2 = CDUnknownBlockType>(_resolveByMountingVolumesIfNecessary: P0, _queue: P1, _completionHandler: P2): R;
    dealloc<R = void>(): R;
    initWithSharedFileListItem<R = unknown, P0 = OpaqueLSSharedFileListItemRef>(_initWithSharedFileListItem: P0): R;
    state<R = number>(): R;
    setState<R = void, P0 = number>(_v: P0): R;
    deletionBlock<R = CDUnknownBlockType>(): R;
    setDeletionBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    icon<R = NSImage>(): R;
    setIcon<R = void, P0 = NSImage>(_v: P0): R;
    displayName<R = NSString>(): R;
    setDisplayName<R = void, P0 = NSString>(_v: P0): R;
    resolvedURL<R = NSURL>(): R;
    setResolvedURL<R = void, P0 = NSURL>(_v: P0): R;
    sharedFileListItem<R = OpaqueLSSharedFileListItemRef>(): R;
    URL<R = NSURL>(): R;
    originalURL<R = NSURL>(): R;
    description<R = NSString>(): R;
    debugDescription<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSRecentDocumentInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSRecentDocumentInfoProtocol {
      alloc<R = _NSRecentDocumentInfo>(): R;
      new: <R = _NSRecentDocumentInfo>() => R;
    }
  }
}
