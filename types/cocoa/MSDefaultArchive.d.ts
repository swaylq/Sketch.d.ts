/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDefaultArchive<T0 = void, T1 = void, T2 = void> extends BCSingleton {
    cxx_destruct<R = void>(): R;
    newObject<R = unknown>(): R;
    archivesNeedingMigration<R = unknown>(): R;
    defaultClass<R = unknown>(): R;
    oldDefaultsName<R = unknown>(): R;
    filename<R = unknown>(): R;
    archive<R = MSVersionedArchive>(): R;
    setArchive<R = void, P0 = MSVersionedArchive>(_v: P0): R;
    defaultObject<R = unknown>(): R;
    setDefaultObject<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace MSDefaultArchive {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends BCSingleton {}
  }
}

declare const MSDefaultArchive: cocoa.MSDefaultArchive.CLASS;
