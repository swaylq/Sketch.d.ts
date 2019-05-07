/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataSupplierDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    groupNameForPluginGroupIdentifier<R = NSString, P0 = NSString>(_groupNameForPluginGroupIdentifier: P0): R;
    replaceLocalDataSupplierGroup_withLocalGroup<R = void, P0 = MSLocalDataSupplierGroup, P1 = MSLocalDataSupplierGroup>(_replaceLocalDataSupplierGroup: P0, _withLocalGroup: P1): R;
    dataSupplierGroupDidChange<R = void, P0 = MSDataSupplierGroup>(_dataSupplierGroupDidChange: P0): R;
    dataSupplierDataDidChange<R = void, P0 = MSDataSupplier>(_dataSupplierDataDidChange: P0): R;
    dataSupplierMenuItemImage<R = NSImage, P0 = MSDataSupplier>(_dataSupplierMenuItemImage: P0): R;
  }
  namespace MSDataSupplierDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
