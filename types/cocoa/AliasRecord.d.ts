/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AliasRecord<T0 = void, T1 = void, T2 = void> {}
  namespace AliasRecord {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const AliasRecord: cocoa.AliasRecord.CLASS;
