/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudManifestMaker<T0 = void, T1 = void, T2 = void> extends MSManifestMaker {
    fileMetadataForRequest_id_manifestScale<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_fileMetadataForRequest: P0, _id: P1, _manifestScale: P2): R;
    organizationID<R = NSString>(): R;
    setOrganizationID<R = void, P0 = NSString>(_v: P0): R;
    imageFileProviderBlock<R = CDUnknownBlockType>(): R;
    setImageFileProviderBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
  }
  namespace MSCloudManifestMaker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSManifestMaker {
      alloc<R = MSCloudManifestMaker>(): R;
      new: <R = MSCloudManifestMaker>() => R;
    }
  }
}

declare const MSCloudManifestMaker: cocoa.MSCloudManifestMaker.CLASS;
