/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAETranslatorData<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    initWithTranslator_selector<R = unknown, P0 = unknown, P1 = string>(_initWithTranslator: P0, _selector: P1): R;
  }
  namespace _NSAETranslatorData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSAETranslatorData>(): R;
      new: <R = _NSAETranslatorData>() => R;
    }
  }
}
