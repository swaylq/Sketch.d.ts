/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorHexStringTransformer<T0 = void, T1 = void, T2 = void> extends NSValueTransformer {
    cxx_destruct<R = void>(): R;
    delegate<R = MSColorHexStringTransformerDelegate>(): R;
    setDelegate<R = void, P0 = MSColorHexStringTransformerDelegate>(_v: P0): R;
  }
  namespace MSColorHexStringTransformer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSValueTransformer {
      alloc<R = MSColorHexStringTransformer>(): R;
      new: <R = MSColorHexStringTransformer>() => R;
    }
  }
}

declare const MSColorHexStringTransformer: cocoa.MSColorHexStringTransformer.CLASS;
