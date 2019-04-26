/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKManifestMessageContent<T0 = void, T1 = void, T2 = void> extends NSObject, SMKMessageCodingProtocol {
    cxx_destruct<R = void>(): R;
    manifest<R = NSDictionary>(): R;
    setManifest<R = void, P0 = NSDictionary>(_v: P0): R;
    dictionaryRepresentation<R = NSDictionary>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace SMKManifestMessageContent {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, SMKMessageCodingProtocol {
      alloc<R = SMKManifestMessageContent>(): R;
      new: <R = SMKManifestMessageContent>() => R;
    }
  }
}

declare const SMKManifestMessageContent: cocoa.SMKManifestMessageContent.CLASS;
