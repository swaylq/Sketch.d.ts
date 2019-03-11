/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSIsNotNilTransformer<T = any> extends cocoa._NSNegateBooleanTransformer {}
  namespace classes {
    export interface _NSIsNotNilTransformer<T = any> extends cocoa.classes._NSNegateBooleanTransformer {
      alloc<R = _NSIsNotNilTransformer>(): R;
      new: <R = _NSIsNotNilTransformer>() => R;
      supportsReverseTransformation<R = boolean>(): R;
    }
  }
}
