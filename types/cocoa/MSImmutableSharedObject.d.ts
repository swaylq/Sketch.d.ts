/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableSharedObject<T0 = void, T1 = void, T2 = void> extends _MSImmutableSharedObject {
    updateSharedStyleIDFromMigration<R = void, P0 = unknown>(_updateSharedStyleIDFromMigration: P0): R;
  }
  namespace MSImmutableSharedObject {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableSharedObject {
      alloc<R = MSImmutableSharedObject>(): R;
      new: <R = MSImmutableSharedObject>() => R;
    }
  }
}

declare const MSImmutableSharedObject: cocoa.MSImmutableSharedObject.CLASS;
