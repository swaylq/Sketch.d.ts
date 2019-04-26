/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBinderPluginRegistry<T0 = void, T1 = void, T2 = void> extends NSObject {
    pluginClassForObject_andBinderClass_requiredPluginProtocol<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_pluginClassForObject: P0, _andBinderClass: P1, _requiredPluginProtocol: P2): R;
    registerPluginClass_forObjectClass_andBinderClass<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_registerPluginClass: P0, _forObjectClass: P1, _andBinderClass: P2): R;
    dealloc<R = void>(): R;
  }
  namespace _NSBinderPluginRegistry {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSBinderPluginRegistry>(): R;
      new: <R = _NSBinderPluginRegistry>() => R;
      sharedRegistry<R = unknown>(): R;
    }
  }
}
