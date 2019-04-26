/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataSupplierGroup<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    cxx_destruct<R = void>(): R;
    notifyDelegateOfChanges<R = void>(): R;
    usableDataSuppliersOfDataType<R = unknown, P0 = number>(_usableDataSuppliersOfDataType: P0): R;
    removeDataSupplier<R = void, P0 = unknown>(_removeDataSupplier: P0): R;
    addDataSuppliers<R = void, P0 = unknown>(_addDataSuppliers: P0): R;
    makeGroupIdentifier<R = unknown>(): R;
    dataSupplierMenuItemForDataType<R = unknown, P0 = number>(_dataSupplierMenuItemForDataType: P0): R;
    postDecodingInitializingWithDelegate<R = boolean, P0 = unknown>(_postDecodingInitializingWithDelegate: P0): R;
    initWithDataSuppliers_delegate<R = unknown, P0 = unknown, P1 = unknown>(_initWithDataSuppliers: P0, _delegate: P1): R;
    groupIdentifier<R = NSString>(): R;
    setGroupIdentifier<R = void, P0 = NSString>(_v: P0): R;
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
    delegate<R = MSDataSupplierDelegate>(): R;
    setDelegate<R = void, P0 = MSDataSupplierDelegate>(_v: P0): R;
    dataSuppliersDictionary<R = NSDictionary>(): R;
    setDataSuppliersDictionary<R = void, P0 = NSDictionary>(_v: P0): R;
    isUsableDataSupplierGroup<R = boolean>(): R;
    dataType<R = number>(): R;
    oneDataSupplierInGroup<R = boolean>(): R;
    groupName<R = NSString>(): R;
    anyDataSupplier<R = MSDataSupplier>(): R;
    dataSuppliers<R = NSArray>(): R;
    valid<R = boolean>(): R;
  }
  namespace MSDataSupplierGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = MSDataSupplierGroup>(): R;
      new: <R = MSDataSupplierGroup>() => R;
    }
  }
}

declare const MSDataSupplierGroup: cocoa.MSDataSupplierGroup.CLASS;
