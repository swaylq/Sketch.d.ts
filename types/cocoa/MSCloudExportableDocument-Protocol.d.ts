/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudExportableDocumentProtocol<T = any> extends NSObjectProtocol {
    cloudName<R = NSString>(): R;
    cloudShare<R = SCKShare>(): R;
    setCloudShare<R = void, P0 = SCKShare>(_v: P0): R;
    cacheManager<R = MSCacheManager>(): R;
    UIMetadata<R = NSDictionary>(): R;
    documentData<R = MSDocumentData>(): R;
  }
  namespace classes {
    export interface MSCloudExportableDocumentProtocol<T = any> extends NSObjectProtocol {  }
  }
}
