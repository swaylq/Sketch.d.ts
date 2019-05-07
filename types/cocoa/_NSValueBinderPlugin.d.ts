/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSValueBinderPlugin<T0 = void, T1 = void, T2 = void> extends _NSBinderPlugin, _NSValueBinderPluginProtocol {
    _valueClass<R = unknown, P0 = unknown>(__valueClass: P0): R;
    dealloc<R = void>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSValueBinderPlugin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSBinderPlugin, _NSValueBinderPluginProtocol {
      alloc<R = _NSValueBinderPlugin>(): R;
      new: <R = _NSValueBinderPlugin>() => R;
    }
  }
}
