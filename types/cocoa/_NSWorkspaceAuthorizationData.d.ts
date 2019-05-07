/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWorkspaceAuthorizationData<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    initWithAuth_externalForm_type<R = unknown, P0 = AuthorizationOpaqueRef, P1 = unknown, P2 = number>(_initWithAuth: P0, _externalForm: P1, _type: P2): R;
    type<R = number>(): R;
    auth<R = AuthorizationOpaqueRef>(): R;
    authExt<R = unknown>(): R;
  }
  namespace _NSWorkspaceAuthorizationData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSWorkspaceAuthorizationData>(): R;
      new: <R = _NSWorkspaceAuthorizationData>() => R;
    }
  }
}
