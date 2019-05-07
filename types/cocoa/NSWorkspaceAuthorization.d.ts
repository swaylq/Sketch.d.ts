/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWorkspaceAuthorization<T0 = void, T1 = void, T2 = void> extends NSObject {
    data<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithAuthorizationRef_ofType<R = unknown, P0 = AuthorizationOpaqueRef, P1 = number>(_initWithAuthorizationRef: P0, _ofType: P1): R;
  }
  namespace NSWorkspaceAuthorization {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSWorkspaceAuthorization>(): R;
      new: <R = NSWorkspaceAuthorization>() => R;
    }
  }
}

declare const NSWorkspaceAuthorization: cocoa.NSWorkspaceAuthorization.CLASS;
