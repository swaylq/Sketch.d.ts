/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileAccessClientLocalArbiterInterfaceProtocol<T0 = void, T1 = void, T2 = void> extends NSFileAccessArbiterProtocol {
    grantSubarbitrationClaim_withServer<R = void, P0 = NSFileSubarbitrationClaim, P1 = NSXPCListener>(_grantSubarbitrationClaim: P0, _withServer: P1): R;
    grantAccessClaim_synchronouslyIfPossible<R = OS_dispatch_semaphore, P0 = NSFileAccessClaim, P1 = boolean>(_grantAccessClaim: P0, _synchronouslyIfPossible: P1): R;
  }
  namespace NSFileAccessClientLocalArbiterInterfaceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFileAccessArbiterProtocol {}
  }
}
