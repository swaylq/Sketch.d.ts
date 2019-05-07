/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDirInfoDeserializer<T0 = void, T1 = void, T2 = void> extends NSAKDeserializer {}
  namespace NSDirInfoDeserializer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAKDeserializer {
      alloc<R = NSDirInfoDeserializer>(): R;
      new: <R = NSDirInfoDeserializer>() => R;
    }
  }
}

declare const NSDirInfoDeserializer: cocoa.NSDirInfoDeserializer.CLASS;
