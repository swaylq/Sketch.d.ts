/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSKeyedArchiverHelper<T0 = void, T1 = void, T2 = void> extends NSKeyedArchiver {
    cxx_destruct<R = void>(): R;
    archiver<R = MSBaseArchiver>(): R;
    setArchiver<R = void, P0 = MSBaseArchiver>(_v: P0): R;
  }
  namespace MSKeyedArchiverHelper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyedArchiver {
      alloc<R = MSKeyedArchiverHelper>(): R;
      new: <R = MSKeyedArchiverHelper>() => R;
    }
  }
}

declare const MSKeyedArchiverHelper: cocoa.MSKeyedArchiverHelper.CLASS;
