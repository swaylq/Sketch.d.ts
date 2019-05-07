/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataSupplierManagerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    pluginNameForIdentifier<R = NSString, P0 = NSString>(_pluginNameForIdentifier: P0): R;
    pluginIconForIdentifier<R = NSImage, P0 = NSString>(_pluginIconForIdentifier: P0): R;
    isThereAPluginForDataSupplier<R = boolean, P0 = MSPluginDataSupplier>(_isThereAPluginForDataSupplier: P0): R;
    requestDataFromPluginDataSupplier_pluginContext<R = void, P0 = MSPluginDataSupplier, P1 = NSDictionary>(_requestDataFromPluginDataSupplier: P0, _pluginContext: P1): R;
  }
  namespace MSDataSupplierManagerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
