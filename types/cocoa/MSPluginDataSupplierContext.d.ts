/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginDataSupplierContext<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    initWithOverrides<R = unknown, P0 = unknown>(_initWithOverrides: P0): R;
    initWithLayers<R = unknown, P0 = unknown>(_initWithLayers: P0): R;
    initWithIsSymbolInstanceOverride_items<R = unknown, P0 = boolean, P1 = unknown>(_initWithIsSymbolInstanceOverride: P0, _items: P1): R;
    key<R = NSString>(): R;
    items<R = NSArray>(): R;
    isSymbolInstanceOverride<R = boolean>(): R;
    requestedCount<R = number>(): R;
    dictionaryRepresentation<R = NSDictionary>(): R;
  }
  namespace MSPluginDataSupplierContext {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSPluginDataSupplierContext>(): R;
      new: <R = MSPluginDataSupplierContext>() => R;
    }
  }
}

declare const MSPluginDataSupplierContext: cocoa.MSPluginDataSupplierContext.CLASS;
