/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSARCWeakRef__<T0 = void, T1 = void, T2 = void> extends NSObject {
    storeWeak<R = void, P0 = unknown>(_storeWeak: P0): R;
    loadWeakRetained<R = unknown>(): R;
    dealloc<R = void>(): R;
  }
  namespace __NSARCWeakRef__ {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = __NSARCWeakRef__>(): R;
      new: <R = __NSARCWeakRef__>() => R;
    }
  }
}
