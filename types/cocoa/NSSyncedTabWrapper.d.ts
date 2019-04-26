/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSyncedTabWrapper<T0 = void, T1 = void, T2 = void> extends NSBaseTabData {
    snapshotIsDisabled<R = boolean>(): R;
    setSnapshotIsDisabled<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSSyncedTabWrapper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBaseTabData {
      alloc<R = NSSyncedTabWrapper>(): R;
      new: <R = NSSyncedTabWrapper>() => R;
    }
  }
}

declare const NSSyncedTabWrapper: cocoa.NSSyncedTabWrapper.CLASS;
