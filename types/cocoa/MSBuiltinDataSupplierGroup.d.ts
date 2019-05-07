/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBuiltinDataSupplierGroup<T0 = void, T1 = void, T2 = void> extends MSDataSupplierGroup, NSCodingProtocol {
    includesEncodedIdentifier<R = boolean, P0 = unknown>(_includesEncodedIdentifier: P0): R;
    groupName<R = unknown>(): R;
    initWithBuiltinDataSuppliers_delegate<R = unknown, P0 = unknown, P1 = unknown>(_initWithBuiltinDataSuppliers: P0, _delegate: P1): R;
    encodedIdentifiers<R = NSArray>(): R;
    setEncodedIdentifiers<R = void, P0 = NSArray>(_v: P0): R;
    builtinDataSuppliers<R = NSArray>(): R;
  }
  namespace MSBuiltinDataSupplierGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDataSupplierGroup, NSCodingProtocol {
      alloc<R = MSBuiltinDataSupplierGroup>(): R;
      new: <R = MSBuiltinDataSupplierGroup>() => R;
    }
  }
}

declare const MSBuiltinDataSupplierGroup: cocoa.MSBuiltinDataSupplierGroup.CLASS;
