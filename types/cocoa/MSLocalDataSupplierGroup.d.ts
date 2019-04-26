/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLocalDataSupplierGroup<T0 = void, T1 = void, T2 = void> extends MSDataSupplierGroup {
    dataSupplierWithIdentifier<R = unknown, P0 = unknown>(_dataSupplierWithIdentifier: P0): R;
    valid<R = boolean>(): R;
    groupName<R = unknown>(): R;
    setupFolderMonitor<R = void>(): R;
    initWithLocalDataSupplier_groupURL_delegate<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithLocalDataSupplier: P0, _groupURL: P1, _delegate: P2): R;
    folderMonitor<R = MSFolderMonitor>(): R;
    setFolderMonitor<R = void, P0 = MSFolderMonitor>(_v: P0): R;
    topLevelSupplier<R = MSLocalDataSupplier>(): R;
    setTopLevelSupplier<R = void, P0 = MSLocalDataSupplier>(_v: P0): R;
    subGroup<R = MSLocalDataSupplierSubgroup>(): R;
    setSubGroup<R = void, P0 = MSLocalDataSupplierSubgroup>(_v: P0): R;
    groupURL<R = NSURL>(): R;
    canGroupMultipleDataSuppliers<R = boolean>(): R;
    anyLocalDataSupplier<R = MSLocalDataSupplier>(): R;
    groupFolder<R = NSURL>(): R;
    localDataSuppliers<R = NSArray>(): R;
  }
  namespace MSLocalDataSupplierGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDataSupplierGroup {
      alloc<R = MSLocalDataSupplierGroup>(): R;
      new: <R = MSLocalDataSupplierGroup>() => R;
      subgroupWithFileSytemURL_localDataSupplierGroup<R = unknown, P0 = unknown, P1 = unknown>(_subgroupWithFileSytemURL: P0, _localDataSupplierGroup: P1): R;
      localDataSupplierGroupFromFileSystemURL_dataSupplierDelegate_makeFolderMonitor<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(_localDataSupplierGroupFromFileSystemURL: P0, _dataSupplierDelegate: P1, _makeFolderMonitor: P2): R;
      localDataSupplierGroupFromFileSystemURL_dataSupplierDelegate<R = unknown, P0 = unknown, P1 = unknown>(_localDataSupplierGroupFromFileSystemURL: P0, _dataSupplierDelegate: P1): R;
    }
  }
}

declare const MSLocalDataSupplierGroup: cocoa.MSLocalDataSupplierGroup.CLASS;
