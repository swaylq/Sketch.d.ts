/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableTextStyle<T0 = void, T1 = void, T2 = void> extends _MSImmutableTextStyle {
    migratePropertiesFromV97OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV97OrEarlierWithUnarchiver: P0): R;
    migratePropertiesFromV81OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV81OrEarlierWithUnarchiver: P0): R;
    decodedAttributes<R = NSDictionary>(): R;
    setDecodedAttributes<R = void, P0 = NSDictionary>(_v: P0): R;
    attributes<R = NSDictionary>(): R;
  }
  namespace MSImmutableTextStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableTextStyle {
      alloc<R = MSImmutableTextStyle>(): R;
      new: <R = MSImmutableTextStyle>() => R;
    }
  }
}

declare const MSImmutableTextStyle: cocoa.MSImmutableTextStyle.CLASS;
