/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSManageShareableObjectsAction<T0 = void, T1 = void, T2 = void> extends MSBaseSharedObjectAction {
    label<R = unknown>(): R;
    showOrganiserSheet<R = void, P0 = unknown>(_showOrganiserSheet: P0): R;
    showSheetWithTabIndex<R = void, P0 = number>(_showSheetWithTabIndex: P0): R;
  }
  namespace MSManageShareableObjectsAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseSharedObjectAction {
      alloc<R = MSManageShareableObjectsAction>(): R;
      new: <R = MSManageShareableObjectsAction>() => R;
    }
  }
}

declare const MSManageShareableObjectsAction: cocoa.MSManageShareableObjectsAction.CLASS;
