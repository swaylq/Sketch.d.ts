/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSelectorSetBinding<T0 = void, T1 = void, T2 = void> extends NSKeySetBinding {
    initWithSetFunc_forImp_selector<R = unknown, P0 = CDUnknownFunctionPointerType, P1 = CDUnknownFunctionPointerType, P2 = string>(_initWithSetFunc: P0, _forImp: P1, _selector: P2): R;
  }
  namespace _NSSelectorSetBinding {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeySetBinding {
      alloc<R = _NSSelectorSetBinding>(): R;
      new: <R = _NSSelectorSetBinding>() => R;
    }
  }
}
