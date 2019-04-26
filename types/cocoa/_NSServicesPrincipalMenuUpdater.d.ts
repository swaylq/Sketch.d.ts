/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSServicesPrincipalMenuUpdater<T0 = void, T1 = void, T2 = void> extends _NSServicesMenuUpdater {
    addNonserviceMenuItemsToMenu<R = void, P0 = unknown>(_addNonserviceMenuItemsToMenu: P0): R;
  }
  namespace _NSServicesPrincipalMenuUpdater {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSServicesMenuUpdater {
      alloc<R = _NSServicesPrincipalMenuUpdater>(): R;
      new: <R = _NSServicesPrincipalMenuUpdater>() => R;
      _sharedPrincipalUpdater<R = unknown>(): R;
    }
  }
}
