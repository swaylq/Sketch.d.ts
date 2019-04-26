/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSKeyForwardingGetBinding<T0 = void, T1 = void, T2 = void> extends NSKeyGetBinding {
    initWithKey_isStored<R = unknown, P0 = unknown, P1 = boolean>(_initWithKey: P0, _isStored: P1): R;
  }
  namespace _NSKeyForwardingGetBinding {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyGetBinding {
      alloc<R = _NSKeyForwardingGetBinding>(): R;
      new: <R = _NSKeyForwardingGetBinding>() => R;
    }
  }
}
