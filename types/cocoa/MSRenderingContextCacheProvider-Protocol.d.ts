/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenderingContextCacheProviderProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    cacheForZoomLevel<R = BCCache, P0 = number>(_cacheForZoomLevel: P0): R;
    zoomIndependentCache<R = BCCache>(): R;
  }
  namespace MSRenderingContextCacheProviderProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
