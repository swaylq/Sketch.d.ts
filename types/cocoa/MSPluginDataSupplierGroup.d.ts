/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginDataSupplierGroup<T0 = void, T1 = void, T2 = void> extends MSDataSupplierGroup {
    dataSupplierSubgroupsForDataSuppliers<R = unknown, P0 = unknown>(_dataSupplierSubgroupsForDataSuppliers: P0): R;
    valid<R = boolean>(): R;
    groupName<R = unknown>(): R;
    initWithPluginDataSuppliers_delegate<R = unknown, P0 = unknown, P1 = unknown>(_initWithPluginDataSuppliers: P0, _delegate: P1): R;
    pluginIdentifier<R = NSString>(): R;
    pluginDataSuppliers<R = NSArray>(): R;
  }
  namespace MSPluginDataSupplierGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDataSupplierGroup {
      alloc<R = MSPluginDataSupplierGroup>(): R;
      new: <R = MSPluginDataSupplierGroup>() => R;
    }
  }
}

declare const MSPluginDataSupplierGroup: cocoa.MSPluginDataSupplierGroup.CLASS;
