/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSWindowOrdering<T0 = void, T1 = void, T2 = void> extends NSObject, _NSCGSWindowOrderingStateProtocol {
    disableActivationOrderingForWindow<R = void, P0 = unknown>(_disableActivationOrderingForWindow: P0): R;
    enableActivationOrderingForWindow_isInitiallyOrderedIn<R = void, P0 = unknown, P1 = boolean>(_enableActivationOrderingForWindow: P0, _isInitiallyOrderedIn: P1): R;
    orderGroup_op_againstWindow_ifActive<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = boolean>(_orderGroup: P0, _op: P1, _againstWindow: P2, _ifActive: P3): R;
    isWindowOrderedIn<R = boolean, P0 = unknown>(_isWindowOrderedIn: P0): R;
    windowsWithOptions_onSpaces_forConnectionID<R = unknown, P0 = number, P1 = unknown, P2 = number>(_windowsWithOptions: P0, _onSpaces: P1, _forConnectionID: P2): R;
    onScreenWindowsForConnectionID<R = unknown, P0 = number>(_onScreenWindowsForConnectionID: P0): R;
    onScreenWindowsCountForConnectionID<R = number, P0 = number>(_onScreenWindowsCountForConnectionID: P0): R;
    orderingGroupForWindow<R = unknown, P0 = unknown>(_orderingGroupForWindow: P0): R;
    _hasUncommittedSpaceAssignmentChanges<R = boolean, P0 = unknown>(__hasUncommittedSpaceAssignmentChanges: P0): R;
    levelForWindow<R = number, P0 = unknown>(_levelForWindow: P0): R;
    dealloc<R = void>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSCGSWindowOrdering {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, _NSCGSWindowOrderingStateProtocol {
      alloc<R = _NSCGSWindowOrdering>(): R;
      new: <R = _NSCGSWindowOrdering>() => R;
      currentOrdering<R = unknown>(): R;
    }
  }
}
