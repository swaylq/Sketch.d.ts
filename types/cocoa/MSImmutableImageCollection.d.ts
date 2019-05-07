/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableImageCollection<T0 = void, T1 = void, T2 = void> extends _MSImmutableImageCollection {
    imageWithSHA1<R = unknown, P0 = unknown>(_imageWithSHA1: P0): R;
    migratePropertiesFromV75OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV75OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV74OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV74OrEarlierWithUnarchiver: P0): R;
  }
  namespace MSImmutableImageCollection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableImageCollection {
      alloc<R = MSImmutableImageCollection>(): R;
      new: <R = MSImmutableImageCollection>() => R;
    }
  }
}

declare const MSImmutableImageCollection: cocoa.MSImmutableImageCollection.CLASS;
