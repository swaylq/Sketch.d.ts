/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCustomResource<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    awakeAfterUsingCoder<R = unknown, P0 = unknown>(_awakeAfterUsingCoder: P0): R;
    loadSoundWithName<R = unknown, P0 = unknown>(_loadSoundWithName: P0): R;
    loadCIImageWithName<R = unknown, P0 = unknown>(_loadCIImageWithName: P0): R;
    loadImageWithName<R = unknown, P0 = unknown>(_loadImageWithName: P0): R;
    _loadImageWithName<R = unknown, P0 = unknown>(__loadImageWithName: P0): R;
    setResourceName<R = void, P0 = unknown>(_setResourceName: P0): R;
    resourceName<R = unknown>(): R;
    setClassName<R = void, P0 = unknown>(_setClassName: P0): R;
    className<R = unknown>(): R;
    dealloc<R = void>(): R;
  }
  namespace NSCustomResource {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSCustomResource>(): R;
      new: <R = NSCustomResource>() => R;
      bundleForImageSearch<R = unknown>(): R;
      bundleForCurrentNib<R = unknown>(): R;
      popBundleForImageSearch<R = void>(): R;
      pushBundleForImageSearch<R = void, P0 = unknown>(_pushBundleForImageSearch: P0): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSCustomResource: cocoa.NSCustomResource.CLASS;
