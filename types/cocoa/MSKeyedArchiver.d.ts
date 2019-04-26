/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSKeyedArchiver<T0 = void, T1 = void, T2 = void> extends MSBaseArchiver {
    archivedData<R = NSMutableData>(): R;
    setArchivedData<R = void, P0 = NSMutableData>(_v: P0): R;
    archiveHelper<R = MSKeyedArchiverHelper>(): R;
    setArchiveHelper<R = void, P0 = MSKeyedArchiverHelper>(_v: P0): R;
  }
  namespace MSKeyedArchiver {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseArchiver {
      alloc<R = MSKeyedArchiver>(): R;
      new: <R = MSKeyedArchiver>() => R;
    }
  }
}

declare const MSKeyedArchiver: cocoa.MSKeyedArchiver.CLASS;
