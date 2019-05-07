/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSKeyedUnarchiveHelper<T0 = void, T1 = void, T2 = void> extends NSKeyedUnarchiver {
    cxx_destruct<R = void>(): R;
    unarchiver<R = MSKeyedUnarchiver>(): R;
    setUnarchiver<R = void, P0 = MSKeyedUnarchiver>(_v: P0): R;
  }
  namespace MSKeyedUnarchiveHelper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyedUnarchiver {
      alloc<R = MSKeyedUnarchiveHelper>(): R;
      new: <R = MSKeyedUnarchiveHelper>() => R;
    }
  }
}

declare const MSKeyedUnarchiveHelper: cocoa.MSKeyedUnarchiveHelper.CLASS;
