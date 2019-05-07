/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDirInfoSerializer<T0 = void, T1 = void, T2 = void> extends NSAKSerializer {}
  namespace NSDirInfoSerializer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAKSerializer {
      alloc<R = NSDirInfoSerializer>(): R;
      new: <R = NSDirInfoSerializer>() => R;
    }
  }
}

declare const NSDirInfoSerializer: cocoa.NSDirInfoSerializer.CLASS;
