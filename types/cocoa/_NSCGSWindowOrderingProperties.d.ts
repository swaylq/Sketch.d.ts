/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSWindowOrderingProperties<T0 = void, T1 = void, T2 = void> extends NSObject {
    clearOrderingGroup<R = void, P0 = unknown>(_clearOrderingGroup: P0): R;
    removeWindowFromOrderingGroup<R = void, P0 = unknown>(_removeWindowFromOrderingGroup: P0): R;
    addWindow_toOrderingGroupBelowWindow<R = void, P0 = unknown, P1 = unknown>(_addWindow: P0, _toOrderingGroupBelowWindow: P1): R;
    addWindow_toOrderingGroupAboveWindow<R = void, P0 = unknown, P1 = unknown>(_addWindow: P0, _toOrderingGroupAboveWindow: P1): R;
    orderingGroupForWindow<R = unknown, P0 = unknown>(_orderingGroupForWindow: P0): R;
    unlockWindowSublevel<R = void, P0 = unknown>(_unlockWindowSublevel: P0): R;
    lockWindow_toAbsoluteSublevel<R = void, P0 = unknown, P1 = number>(_lockWindow: P0, _toAbsoluteSublevel: P1): R;
    willReassociateWithSpacesByGeometry<R = boolean, P0 = unknown>(_willReassociateWithSpacesByGeometry: P0): R;
    willDisassociateFromSpacesIfOrderedOut<R = boolean, P0 = unknown>(_willDisassociateFromSpacesIfOrderedOut: P0): R;
    reassociateWithSpacesByGeometry<R = void, P0 = unknown>(_reassociateWithSpacesByGeometry: P0): R;
    disassociateFromSpacesIfOrderedOut<R = void, P0 = unknown>(_disassociateFromSpacesIfOrderedOut: P0): R;
    setDesiredSpace_forWindow<R = void, P0 = number, P1 = unknown>(_setDesiredSpace: P0, _forWindow: P1): R;
    setLevel_forWindow<R = void, P0 = number, P1 = unknown>(_setLevel: P0, _forWindow: P1): R;
    levelForWindow<R = number, P0 = unknown>(_levelForWindow: P0): R;
    dealloc<R = void>(): R;
  }
  namespace _NSCGSWindowOrderingProperties {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSCGSWindowOrderingProperties>(): R;
      new: <R = _NSCGSWindowOrderingProperties>() => R;
    }
  }
}
