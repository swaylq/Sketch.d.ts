/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSharedValueTransformer<T0 = void, T1 = void, T2 = void> extends NSValueTransformer {
    _isBooleanTransformer<R = boolean>(): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    copy<R = unknown>(): R;
    _tryRetain<R = boolean>(): R;
    _isDeallocating<R = boolean>(): R;
  }
  namespace _NSSharedValueTransformer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSValueTransformer {
      alloc<R = _NSSharedValueTransformer>(): R;
      new: <R = _NSSharedValueTransformer>() => R;
    }
  }
}
