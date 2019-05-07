/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSKVCPIvarGetBinding<T0 = void, T1 = void, T2 = void> extends NSKeyGetBinding {
    initWithFunc_ivarOffset<R = unknown, P0 = CDUnknownFunctionPointerType, P1 = number>(_initWithFunc: P0, _ivarOffset: P1): R;
  }
  namespace _NSKVCPIvarGetBinding {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyGetBinding {
      alloc<R = _NSKVCPIvarGetBinding>(): R;
      new: <R = _NSKVCPIvarGetBinding>() => R;
    }
  }
}
