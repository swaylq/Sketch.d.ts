/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCacheManager<T0 = void, T1 = void, T2 = void> extends NSObject, MSRenderingContextCacheProviderProtocol {
    cxx_destruct<R = void>(): R;
    clearAllCaches<R = void>(): R;
    clearCachesExceptForOwners<R = void, P0 = unknown>(_clearCachesExceptForOwners: P0): R;
    initWithZoomIndependentCache<R = unknown, P0 = unknown>(_initWithZoomIndependentCache: P0): R;
    zoomLevelForSharedCache<R = number>(): R;
    setZoomLevelForSharedCache<R = void, P0 = number>(_v: P0): R;
    zoomIndependentCache<R = BCCache>(): R;
    setZoomIndependentCache<R = void, P0 = BCCache>(_v: P0): R;
    renderingCache<R = BCCache>(): R;
    setRenderingCache<R = void, P0 = BCCache>(_v: P0): R;
    modelCache<R = BCCache>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSCacheManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSRenderingContextCacheProviderProtocol {
      alloc<R = MSCacheManager>(): R;
      new: <R = MSCacheManager>() => R;
    }
  }
}

declare const MSCacheManager: cocoa.MSCacheManager.CLASS;
