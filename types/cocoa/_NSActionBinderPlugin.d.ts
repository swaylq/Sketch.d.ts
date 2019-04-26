/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSActionBinderPlugin<T0 = void, T1 = void, T2 = void> extends _NSBinderPlugin, _NSActionBinderPluginProtocol {
    _clearCachedTransientStateOfObject<R = void, P0 = unknown>(__clearCachedTransientStateOfObject: P0): R;
    _cacheTransientStateOfObject<R = void, P0 = unknown>(__cacheTransientStateOfObject: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSActionBinderPlugin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSBinderPlugin, _NSActionBinderPluginProtocol {
      alloc<R = _NSActionBinderPlugin>(): R;
      new: <R = _NSActionBinderPlugin>() => R;
    }
  }
}
