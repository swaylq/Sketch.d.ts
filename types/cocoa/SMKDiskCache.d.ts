/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKDiskCache<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    setObject_forKeyedSubscript<R = void, P0 = unknown, P1 = unknown>(_setObject: P0, _forKeyedSubscript: P1): R;
    objectForKeyedSubscript<R = unknown, P0 = unknown>(_objectForKeyedSubscript: P0): R;
    containsObjectForKey<R = boolean, P0 = unknown>(_containsObjectForKey: P0): R;
    filePathForKey<R = unknown, P0 = unknown>(_filePathForKey: P0): R;
    fileNameForKey<R = unknown, P0 = unknown>(_fileNameForKey: P0): R;
    removeCacheDirectory<R = void>(): R;
    createCacheDirectory<R = void>(): R;
    applicationWillTerminateNotification<R = void, P0 = unknown>(_applicationWillTerminateNotification: P0): R;
    dealloc<R = void>(): R;
    initWithQOS<R = unknown, P0 = number>(_initWithQOS: P0): R;
    fileManager<R = NSFileManager>(): R;
    setFileManager<R = void, P0 = NSFileManager>(_v: P0): R;
    queue<R = OS_dispatch_queue>(): R;
    setQueue<R = void, P0 = OS_dispatch_queue>(_v: P0): R;
    delegate<R = SMKDiskCacheDelegate>(): R;
    setDelegate<R = void, P0 = SMKDiskCacheDelegate>(_v: P0): R;
  }
  namespace SMKDiskCache {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = SMKDiskCache>(): R;
      new: <R = SMKDiskCache>() => R;
    }
  }
}

declare const SMKDiskCache: cocoa.SMKDiskCache.CLASS;
