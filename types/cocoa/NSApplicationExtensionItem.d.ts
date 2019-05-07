/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSApplicationExtensionItem<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol {
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    dealloc<R = void>(): R;
    userInfo<R = NSDictionary>(): R;
    setUserInfo<R = void, P0 = NSDictionary>(_v: P0): R;
    location<R = CLLocation>(): R;
    setLocation<R = void, P0 = CLLocation>(_v: P0): R;
    links<R = NSArray>(): R;
    setLinks<R = void, P0 = NSArray>(_v: P0): R;
    attachments<R = NSArray>(): R;
    setAttachments<R = void, P0 = NSArray>(_v: P0): R;
    videoAssets<R = NSArray>(): R;
    setVideoAssets<R = void, P0 = NSArray>(_v: P0): R;
    photoAssets<R = NSArray>(): R;
    setPhotoAssets<R = void, P0 = NSArray>(_v: P0): R;
    contentText<R = NSString>(): R;
    setContentText<R = void, P0 = NSString>(_v: P0): R;
    titleText<R = NSString>(): R;
    setTitleText<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSApplicationExtensionItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol {
      alloc<R = NSApplicationExtensionItem>(): R;
      new: <R = NSApplicationExtensionItem>() => R;
    }
  }
}

declare const NSApplicationExtensionItem: cocoa.NSApplicationExtensionItem.CLASS;
