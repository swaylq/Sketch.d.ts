/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudShareCollectionItem<T0 = void, T1 = void, T2 = void> extends MSExistingDocumentCollectionItem {
    downloadLatestDocument<R = void, P0 = CDUnknownBlockType>(_downloadLatestDocument: P0): R;
    URL<R = unknown>(): R;
    initWithController_cloudShare<R = unknown, P0 = unknown, P1 = unknown>(_initWithController: P0, _cloudShare: P1): R;
    downloadProgress<R = NSProgress>(): R;
    setDownloadProgress<R = void, P0 = NSProgress>(_v: P0): R;
    cloudShare<R = SCKShare>(): R;
    latestDocument<R = SCKCloudDocument>(): R;
  }
  namespace MSCloudShareCollectionItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSExistingDocumentCollectionItem {
      alloc<R = MSCloudShareCollectionItem>(): R;
      new: <R = MSCloudShareCollectionItem>() => R;
    }
  }
}

declare const MSCloudShareCollectionItem: cocoa.MSCloudShareCollectionItem.CLASS;
