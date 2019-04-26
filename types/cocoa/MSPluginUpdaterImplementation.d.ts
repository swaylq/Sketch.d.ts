/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginUpdaterImplementation<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    makeDecompressError_withDescription<R = boolean, P0 = unknown, P1 = unknown>(_makeDecompressError: P0, _withDescription: P1): R;
    decompressCurrentFile_toURL_error<R = boolean, P0 = void, P1 = unknown, P2 = unknown>(_decompressCurrentFile: P0, _toURL: P1, _error: P2): R;
    decompressPluginZip_toFolder_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_decompressPluginZip: P0, _toFolder: P1, _error: P2): R;
    versionsDictionaryFromAppcast<R = unknown, P0 = unknown>(_versionsDictionaryFromAppcast: P0): R;
    cancelDownloadingPluginVersions<R = void>(): R;
    downloadPlugins_downloadPluginHandler_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType, P2 = CDUnknownBlockType>(_downloadPlugins: P0, _downloadPluginHandler: P1, _completionHandler: P2): R;
    downloadPluginFromURL_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_downloadPluginFromURL: P0, _completionHandler: P1): R;
    downloadPluginAppcasts_downloadAppcastHandler_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType, P2 = CDUnknownBlockType>(_downloadPluginAppcasts: P0, _downloadAppcastHandler: P1, _completionHandler: P2): R;
    pluginDownloader<R = BCDownloadManager>(): R;
    setPluginDownloader<R = void, P0 = BCDownloadManager>(_v: P0): R;
    downloadingPluginVersionsStatus<R = number>(): R;
    setDownloadingPluginVersionsStatus<R = void, P0 = number>(_v: P0): R;
    downloadingAppcastsStatus<R = number>(): R;
    setDownloadingAppcastsStatus<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSPluginUpdaterImplementation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSPluginUpdaterImplementation>(): R;
      new: <R = MSPluginUpdaterImplementation>() => R;
    }
  }
}

declare const MSPluginUpdaterImplementation: cocoa.MSPluginUpdaterImplementation.CLASS;
