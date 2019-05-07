/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFAmazonS3ResponseSerializer<T0 = void, T1 = void, T2 = void> extends AFHTTPResponseSerializer {}
  namespace AFAmazonS3ResponseSerializer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends AFHTTPResponseSerializer {
      alloc<R = AFAmazonS3ResponseSerializer>(): R;
      new: <R = AFAmazonS3ResponseSerializer>() => R;
    }
  }
}

declare const AFAmazonS3ResponseSerializer: cocoa.AFAmazonS3ResponseSerializer.CLASS;
