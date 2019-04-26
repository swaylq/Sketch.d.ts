/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSCustomSharingService<T0 = void, T1 = void, T2 = void> extends NSSharingService {
    type<R = number>(): R;
    setType<R = void, P0 = number>(_v: P0): R;
  }
  namespace __NSCustomSharingService {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSharingService {
      alloc<R = __NSCustomSharingService>(): R;
      new: <R = __NSCustomSharingService>() => R;
    }
  }
}
