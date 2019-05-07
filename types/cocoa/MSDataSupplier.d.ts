/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataSupplier<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    cxx_destruct<R = void>(): R;
    dataForItem<R = unknown, P0 = unknown>(_dataForItem: P0): R;
    resetMenuItemImage<R = void>(): R;
    isEqualToDataSupplier<R = boolean, P0 = unknown>(_isEqualToDataSupplier: P0): R;
    hash<R = number>(): R;
    imageFileURLForDataItem<R = unknown, P0 = unknown>(_imageFileURLForDataItem: P0): R;
    generateDataForOverrides_dataSupplierManager_dataApplier<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_generateDataForOverrides: P0, _dataSupplierManager: P1, _dataApplier: P2): R;
    generateDataForLayers_dataSupplierManager_dataApplier<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_generateDataForLayers: P0, _dataSupplierManager: P1, _dataApplier: P2): R;
    applyDataAtIndex_datum_dataApplier<R = void, P0 = number, P1 = unknown, P2 = CDUnknownBlockType>(_applyDataAtIndex: P0, _datum: P1, _dataApplier: P2): R;
    applyDataWithCount_data_dataApplier<R = void, P0 = number, P1 = unknown, P2 = CDUnknownBlockType>(_applyDataWithCount: P0, _data: P1, _dataApplier: P2): R;
    initWithDataIdentifier_dataName_dataType<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_initWithDataIdentifier: P0, _dataName: P1, _dataType: P2): R;
    menuItemImage<R = NSImage>(): R;
    setMenuItemImage<R = void, P0 = NSImage>(_v: P0): R;
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
    dataIdentifier<R = NSString>(): R;
    dataType<R = number>(): R;
    dataName<R = NSString>(): R;
    setDataName<R = void, P0 = NSString>(_v: P0): R;
    delegate<R = MSDataSupplierDelegate>(): R;
    setDelegate<R = void, P0 = MSDataSupplierDelegate>(_v: P0): R;
    uttDataType<R = NSString>(): R;
    isUsableDataSupplier<R = boolean>(): R;
    displayName<R = NSString>(): R;
    valid<R = boolean>(): R;
  }
  namespace MSDataSupplier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = MSDataSupplier>(): R;
      new: <R = MSDataSupplier>() => R;
    }
  }
}

declare const MSDataSupplier: cocoa.MSDataSupplier.CLASS;
