/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDisplayFontBinderPlugin<T0 = void, T1 = void, T2 = void> extends _NSBinderPlugin, _NSDisplayFontBinderPluginProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSDisplayFontBinderPlugin {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSBinderPlugin, _NSDisplayFontBinderPluginProtocol {
      alloc<R = _NSDisplayFontBinderPlugin>(): R;
      new: <R = _NSDisplayFontBinderPlugin>() => R;
    }
  }
}
