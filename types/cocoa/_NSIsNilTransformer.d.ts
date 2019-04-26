/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSIsNilTransformer<T0 = void, T1 = void, T2 = void> extends _NSNegateBooleanTransformer {}
  namespace _NSIsNilTransformer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSNegateBooleanTransformer {
      alloc<R = _NSIsNilTransformer>(): R;
      new: <R = _NSIsNilTransformer>() => R;
      supportsReverseTransformation<R = boolean>(): R;
    }
  }
}
