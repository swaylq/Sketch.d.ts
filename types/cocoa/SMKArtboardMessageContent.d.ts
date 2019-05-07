/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKArtboardMessageContent<T0 = void, T1 = void, T2 = void> extends NSObject, SMKMessageCodingProtocol {
    cxx_destruct<R = void>(): R;
    constrainingSize<R = CGSize>(): R;
    setConstrainingSize<R = void, P0 = CGSize>(_v: P0): R;
    rect<R = CGRect>(): R;
    setRect<R = void, P0 = CGRect>(_v: P0): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    dictionaryRepresentation<R = NSDictionary>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace SMKArtboardMessageContent {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, SMKMessageCodingProtocol {
      alloc<R = SMKArtboardMessageContent>(): R;
      new: <R = SMKArtboardMessageContent>() => R;
    }
  }
}

declare const SMKArtboardMessageContent: cocoa.SMKArtboardMessageContent.CLASS;
