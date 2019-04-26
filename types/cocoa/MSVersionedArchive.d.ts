/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSVersionedArchive<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    cleanupAfterTesting<R = void>(): R;
    archiveRootObject_error<R = boolean, P0 = unknown, P1 = unknown>(_archiveRootObject: P0, _error: P1): R;
    unarchiveRootObjectVersion_error<R = unknown, P0 = number, P1 = unknown>(_unarchiveRootObjectVersion: P0, _error: P1): R;
    exists<R = boolean>(): R;
    URLNeedingMigration<R = unknown>(): R;
    existingURLFoundAtBaseURL<R = unknown, P0 = unknown>(_existingURLFoundAtBaseURL: P0): R;
    existingURL<R = unknown>(): R;
    existingURLBasedOnFullURL<R = unknown, P0 = unknown>(_existingURLBasedOnFullURL: P0): R;
    initWithURL_version<R = unknown, P0 = unknown, P1 = number>(_initWithURL: P0, _version: P1): R;
    alternateFolder<R = NSString>(): R;
    setAlternateFolder<R = void, P0 = NSString>(_v: P0): R;
    version<R = number>(): R;
    setVersion<R = void, P0 = number>(_v: P0): R;
    data<R = NSData>(): R;
    setData<R = void, P0 = NSData>(_v: P0): R;
    baseURL<R = NSURL>(): R;
    setBaseURL<R = void, P0 = NSURL>(_v: P0): R;
    url<R = NSURL>(): R;
    setUrl<R = void, P0 = NSURL>(_v: P0): R;
  }
  namespace MSVersionedArchive {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSVersionedArchive>(): R;
      new: <R = MSVersionedArchive>() => R;
      versionedURLWithBase_extension_version<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_versionedURLWithBase: P0, _extension: P1, _version: P2): R;
      globalDirectory<R = unknown>(): R;
      URLForArchiveWithName_extension_version<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_URLForArchiveWithName: P0, _extension: P1, _version: P2): R;
      globalArchiveWithName_extension_version<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_globalArchiveWithName: P0, _extension: P1, _version: P2): R;
    }
  }
}

declare const MSVersionedArchive: cocoa.MSVersionedArchive.CLASS;
