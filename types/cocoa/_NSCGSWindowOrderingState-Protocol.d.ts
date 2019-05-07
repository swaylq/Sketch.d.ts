/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSWindowOrderingStateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    orderApplicationWindowsFront<R = void>(): R;
    conditionallyOrderGroupFront_withTimestamp<R = void, P0 = NSCGSWindow, P1 = number>(_conditionallyOrderGroupFront: P0, _withTimestamp: P1): R;
    orderGroup_op_againstWindow<R = void, P0 = NSCGSWindow, P1 = number, P2 = NSCGSWindow>(_orderGroup: P0, _op: P1, _againstWindow: P2): R;
    clearOrderingGroup<R = void, P0 = NSCGSWindow>(_clearOrderingGroup: P0): R;
    removeWindowFromOrderingGroup<R = void, P0 = NSCGSWindow>(_removeWindowFromOrderingGroup: P0): R;
    addWindow_toOrderingGroupBelowWindow<R = void, P0 = NSCGSWindow, P1 = NSCGSWindow>(_addWindow: P0, _toOrderingGroupBelowWindow: P1): R;
    addWindow_toOrderingGroupAboveWindow<R = void, P0 = NSCGSWindow, P1 = NSCGSWindow>(_addWindow: P0, _toOrderingGroupAboveWindow: P1): R;
    unlockWindowSublevel<R = void, P0 = NSCGSWindow>(_unlockWindowSublevel: P0): R;
    lockWindow_toAbsoluteSublevel<R = void, P0 = NSCGSWindow, P1 = number>(_lockWindow: P0, _toAbsoluteSublevel: P1): R;
    reassociateWithSpacesByGeometry<R = void, P0 = NSCGSWindow>(_reassociateWithSpacesByGeometry: P0): R;
    disassociateFromSpacesIfOrderedOut<R = void, P0 = NSCGSWindow>(_disassociateFromSpacesIfOrderedOut: P0): R;
    setDesiredSpace_forWindow<R = void, P0 = number, P1 = NSCGSWindow>(_setDesiredSpace: P0, _forWindow: P1): R;
    setLevel_forWindow<R = void, P0 = number, P1 = NSCGSWindow>(_setLevel: P0, _forWindow: P1): R;
    orderWindow_op_againstWindow<R = void, P0 = NSCGSWindow, P1 = number, P2 = NSCGSWindow>(_orderWindow: P0, _op: P1, _againstWindow: P2): R;
    applyOperations<R = void, P0 = NSArray>(_applyOperations: P0): R;
  }
  namespace _NSCGSWindowOrderingStateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
