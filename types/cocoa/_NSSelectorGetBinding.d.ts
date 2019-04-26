/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSelectorGetBinding<T0 = void, T1 = void, T2 = void> extends NSKeyGetBinding {
    initWithFunc_forImp_selector<R = unknown, P0 = CDUnknownFunctionPointerType, P1 = CDUnknownFunctionPointerType, P2 = string>(_initWithFunc: P0, _forImp: P1, _selector: P2): R;
  }
  namespace _NSSelectorGetBinding {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyGetBinding {
      alloc<R = _NSSelectorGetBinding>(): R;
      new: <R = _NSSelectorGetBinding>() => R;
    }
  }
}
