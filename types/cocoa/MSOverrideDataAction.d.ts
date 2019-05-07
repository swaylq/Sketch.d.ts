/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverrideDataAction<T0 = void, T1 = void, T2 = void> extends MSOverrideAction, MSDataMenuProviderDelegateProtocol {
    applyDataFromSupplier_toLayersWithIdentifier<R = void, P0 = unknown, P1 = unknown>(_applyDataFromSupplier: P0, _toLayersWithIdentifier: P1): R;
    label<R = unknown>(): R;
    dataMenuRootAction<R = void, P0 = unknown>(_dataMenuRootAction: P0): R;
    validationStatus<R = number>(): R;
    dataIdentifiers<R = NSArray>(): R;
    dataType<R = number>(): R;
    dataProvider<R = MSDataMenuProvider>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSOverrideDataAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSOverrideAction, MSDataMenuProviderDelegateProtocol {
      alloc<R = MSOverrideDataAction>(): R;
      new: <R = MSOverrideDataAction>() => R;
    }
  }
}

declare const MSOverrideDataAction: cocoa.MSOverrideDataAction.CLASS;
