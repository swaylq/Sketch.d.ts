/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTextColorBinderPlugin<T0 = void, T1 = void, T2 = void> extends _NSBinderPlugin, _NSTextColorBinderPluginProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSTextColorBinderPlugin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSBinderPlugin, _NSTextColorBinderPluginProtocol {
      alloc<R = _NSTextColorBinderPlugin>(): R;
      new: <R = _NSTextColorBinderPlugin>() => R;
    }
  }
}
