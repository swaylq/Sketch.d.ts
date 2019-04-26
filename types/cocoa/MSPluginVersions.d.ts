/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginVersions<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    isUpdateAvailableForVersion<R = boolean, P0 = unknown>(_isUpdateAvailableForVersion: P0): R;
    isVersionListed<R = boolean, P0 = unknown>(_isVersionListed: P0): R;
    isVersionDownloaded<R = boolean, P0 = unknown>(_isVersionDownloaded: P0): R;
    downloadURLForVersion<R = unknown, P0 = unknown>(_downloadURLForVersion: P0): R;
    addVersions<R = void, P0 = unknown>(_addVersions: P0): R;
    initWithIdentifier_appcastURL<R = unknown, P0 = unknown, P1 = unknown>(_initWithIdentifier: P0, _appcastURL: P1): R;
    _versionsDictionary<R = NSMutableDictionary>(): R;
    appcastURL<R = NSURL>(): R;
    identifier<R = NSString>(): R;
    latestVersionAvailable<R = NSString>(): R;
    versionsDictionary<R = NSDictionary>(): R;
    versions<R = NSArray>(): R;
  }
  namespace MSPluginVersions {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSPluginVersions>(): R;
      new: <R = MSPluginVersions>() => R;
    }
  }
}

declare const MSPluginVersions: cocoa.MSPluginVersions.CLASS;
