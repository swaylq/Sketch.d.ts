/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSProgressWithRemoteParent<T0 = void, T1 = void, T2 = void> extends NSProgress {
    _setUserInfoValue_forKey_fromChild<R = void, P0 = unknown, P1 = unknown, P2 = boolean>(__setUserInfoValue: P0, _forKey: P1, _fromChild: P2): R;
    _updateFractionCompleted<R = void, P0 = unknown>(__updateFractionCompleted: P0): R;
    dealloc<R = void>(): R;
    sequence<R = number>(): R;
    setSequence<R = void, P0 = number>(_v: P0): R;
    parentConnection<R = NSXPCConnection>(): R;
    setParentConnection<R = void, P0 = NSXPCConnection>(_v: P0): R;
  }
  namespace _NSProgressWithRemoteParent {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSProgress {
      alloc<R = _NSProgressWithRemoteParent>(): R;
      new: <R = _NSProgressWithRemoteParent>() => R;
    }
  }
}
