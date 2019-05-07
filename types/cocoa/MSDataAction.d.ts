/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction, MSDataMenuProviderDelegateProtocol, NSMenuDelegateProtocol {
    overridesByDataIdentifierWithDataManager<R = unknown, P0 = unknown>(_overridesByDataIdentifierWithDataManager: P0): R;
    overridePropertyForDataType<R = unknown, P0 = number>(_overridePropertyForDataType: P0): R;
    firstOverridePointInOverridePoints_withProperty<R = unknown, P0 = unknown, P1 = unknown>(_firstOverridePointInOverridePoints: P0, _withProperty: P1): R;
    availableOverrideOnSymbolInstance_property<R = unknown, P0 = unknown, P1 = unknown>(_availableOverrideOnSymbolInstance: P0, _property: P1): R;
    applyDataTo_withDataMenu_withDataFrom<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_applyDataTo: P0, _withDataMenu: P1, _withDataFrom: P2): R;
    imageReplaceableStyleFillOnLayer<R = unknown, P0 = unknown>(_imageReplaceableStyleFillOnLayer: P0): R;
    applyImageData_supplierIdentifier_toLayer<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_applyImageData: P0, _supplierIdentifier: P1, _toLayer: P2): R;
    applyImageData_supplierIdentifier_toBitmapLayer<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_applyImageData: P0, _supplierIdentifier: P1, _toBitmapLayer: P2): R;
    applyImageData_supplierIdentifier_toShapeGroup<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_applyImageData: P0, _supplierIdentifier: P1, _toShapeGroup: P2): R;
    applyTextData_supplierIdentifier_toTextLayer<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_applyTextData: P0, _supplierIdentifier: P1, _toTextLayer: P2): R;
    applyDataWithSupplierIdentifer_toLayer_applierBlock<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_applyDataWithSupplierIdentifer: P0, _toLayer: P1, _applierBlock: P2): R;
    dataIdentifierInLayers<R = unknown, P0 = unknown>(_dataIdentifierInLayers: P0): R;
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    dataTypeForSelection<R = number>(): R;
    supportedDataTypeForSelection<R = number>(): R;
    dataTypeForSelectionContainingOnlySymbolInstancesWithOneOverridePerDataType<R = number>(): R;
    hasSubMenu<R = boolean>(): R;
    data<R = MSDataMenuProvider>(): R;
    setData<R = void, P0 = MSDataMenuProvider>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSDataAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction, MSDataMenuProviderDelegateProtocol, NSMenuDelegateProtocol {
      alloc<R = MSDataAction>(): R;
      new: <R = MSDataAction>() => R;
    }
  }
}

declare const MSDataAction: cocoa.MSDataAction.CLASS;
