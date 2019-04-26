/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNavigateToOverrideMasterAction<T0 = void, T1 = void, T2 = void> extends MSOverrideAction {
    label<R = unknown>(): R;
    validationStatus<R = number>(): R;
    canNavigateToMaster<R = boolean, P0 = unknown>(_canNavigateToMaster: P0): R;
    navigateToMasterForOverride_fromInstance<R = void, P0 = unknown, P1 = unknown>(_navigateToMasterForOverride: P0, _fromInstance: P1): R;
    navigateToForeignSymbolInLibrary<R = void, P0 = unknown>(_navigateToForeignSymbolInLibrary: P0): R;
    navigateToSelectedOverrideMaster<R = void, P0 = unknown>(_navigateToSelectedOverrideMaster: P0): R;
  }
  namespace MSNavigateToOverrideMasterAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSOverrideAction {
      alloc<R = MSNavigateToOverrideMasterAction>(): R;
      new: <R = MSNavigateToOverrideMasterAction>() => R;
    }
  }
}

declare const MSNavigateToOverrideMasterAction: cocoa.MSNavigateToOverrideMasterAction.CLASS;
