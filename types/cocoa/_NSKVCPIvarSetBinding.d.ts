/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSKVCPIvarSetBinding<T0 = void, T1 = void, T2 = void> extends NSKeySetBinding {
    initWithSetFunc_ivarOffset<R = unknown, P0 = CDUnknownFunctionPointerType, P1 = number>(_initWithSetFunc: P0, _ivarOffset: P1): R;
  }
  namespace _NSKVCPIvarSetBinding {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeySetBinding {
      alloc<R = _NSKVCPIvarSetBinding>(): R;
      new: <R = _NSKVCPIvarSetBinding>() => R;
    }
  }
}
