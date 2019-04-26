/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCZipableFile<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    filePathMatches<R = boolean, P0 = unknown>(_filePathMatches: P0): R;
    initWithObject_subPath_asJSON<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(_initWithObject: P0, _subPath: P1, _asJSON: P2): R;
    writen<R = boolean>(): R;
    setWriten<R = void, P0 = boolean>(_v: P0): R;
    encodeAsJSON<R = boolean>(): R;
    objectToEncode<R = NSObject>(): R;
    subPath<R = NSString>(): R;
  }
  namespace BCZipableFile {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = BCZipableFile>(): R;
      new: <R = BCZipableFile>() => R;
      dataZipableForObject_withSubPath<R = unknown, P0 = unknown, P1 = unknown>(_dataZipableForObject: P0, _withSubPath: P1): R;
      jsonZipableForObject_withSubPath<R = unknown, P0 = unknown, P1 = unknown>(_jsonZipableForObject: P0, _withSubPath: P1): R;
    }
  }
}

declare const BCZipableFile: cocoa.BCZipableFile.CLASS;
