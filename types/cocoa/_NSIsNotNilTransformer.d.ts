/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSIsNotNilTransformer<T0 = void, T1 = void, T2 = void> extends _NSNegateBooleanTransformer {}
  namespace _NSIsNotNilTransformer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSNegateBooleanTransformer {
      alloc<R = _NSIsNotNilTransformer>(): R;
      new: <R = _NSIsNotNilTransformer>() => R;
      supportsReverseTransformation<R = boolean>(): R;
    }
  }
}
