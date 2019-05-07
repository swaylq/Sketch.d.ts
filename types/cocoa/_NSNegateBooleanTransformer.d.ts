/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSNegateBooleanTransformer<T0 = void, T1 = void, T2 = void> extends _NSSharedValueTransformer {
    description<R = unknown>(): R;
  }
  namespace _NSNegateBooleanTransformer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSSharedValueTransformer {
      alloc<R = _NSNegateBooleanTransformer>(): R;
      new: <R = _NSNegateBooleanTransformer>() => R;
    }
  }
}
