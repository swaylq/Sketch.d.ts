/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFAmazonS3ResponseSerializer<T = any> extends AFHTTPResponseSerializer {}
  namespace classes {
    export interface AFAmazonS3ResponseSerializer<T = any> extends AFHTTPResponseSerializer {
      alloc<R = AFAmazonS3ResponseSerializer>(): R;
      new: <R = AFAmazonS3ResponseSerializer>() => R;
    }
  }
}

declare const AFAmazonS3ResponseSerializer: cocoa.classes.AFAmazonS3ResponseSerializer;