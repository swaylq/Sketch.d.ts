/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLocalDataSupplierSubgroup<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    dataSupplierMenuItemForDataType<R = unknown, P0 = number>(_dataSupplierMenuItemForDataType: P0): R;
    initWithLocalDataSupplier_parentGroup<R = unknown, P0 = unknown, P1 = unknown>(_initWithLocalDataSupplier: P0, _parentGroup: P1): R;
    initWithURL_parentSupplierGroup_subGroups_dataSupplierIdentifiers<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithURL: P0, _parentSupplierGroup: P1, _subGroups: P2, _dataSupplierIdentifiers: P3): R;
    subgroupURL<R = NSURL>(): R;
    parentGroup<R = MSLocalDataSupplierGroup>(): R;
    subGroups<R = NSArray>(): R;
    dataSupplierIdentifiers<R = NSArray>(): R;
    groupName<R = NSString>(): R;
  }
  namespace MSLocalDataSupplierSubgroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSLocalDataSupplierSubgroup>(): R;
      new: <R = MSLocalDataSupplierSubgroup>() => R;
      dataSupplierIdentifiersForDataSuppliers<R = unknown, P0 = unknown>(_dataSupplierIdentifiersForDataSuppliers: P0): R;
      localDataSupplierSubgroupsInFolder_localDataSupplierGroup<R = unknown, P0 = unknown, P1 = unknown>(_localDataSupplierSubgroupsInFolder: P0, _localDataSupplierGroup: P1): R;
      localDataSuppliersInFolder<R = unknown, P0 = unknown>(_localDataSuppliersInFolder: P0): R;
      localDataSupplierSubgroupWithURL_localDataSupplierGroup<R = unknown, P0 = unknown, P1 = unknown>(_localDataSupplierSubgroupWithURL: P0, _localDataSupplierGroup: P1): R;
    }
  }
}

declare const MSLocalDataSupplierSubgroup: cocoa.MSLocalDataSupplierSubgroup.CLASS;
