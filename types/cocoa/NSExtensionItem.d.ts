/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExtensionItem<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
    _matchingDictionaryRepresentation<R = unknown>(): R;
    description<R = unknown>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    dealloc<R = void>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    userInfo<R = NSDictionary>(): R;
    setUserInfo<R = void, P0 = NSDictionary>(_v: P0): R;
    attachments<R = NSArray>(): R;
    setAttachments<R = void, P0 = NSArray>(_v: P0): R;
    attributedContentText<R = NSAttributedString>(): R;
    setAttributedContentText<R = void, P0 = NSAttributedString>(_v: P0): R;
    attributedTitle<R = NSAttributedString>(): R;
    setAttributedTitle<R = void, P0 = NSAttributedString>(_v: P0): R;
  }
  namespace NSExtensionItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
      alloc<R = NSExtensionItem>(): R;
      new: <R = NSExtensionItem>() => R;
    }
  }
}

declare const NSExtensionItem: cocoa.NSExtensionItem.CLASS;
