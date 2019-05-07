/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeCollectionItem<T0 = void, T1 = void, T2 = void> extends NSObject, MSWelcomeCollectionItemPreviewImageLoadingProtocol {
    cxx_destruct<R = void>(): R;
    initWithController<R = unknown, P0 = unknown>(_initWithController: P0): R;
    cachedPreviewImage<R = NSImage>(): R;
    setCachedPreviewImage<R = void, P0 = NSImage>(_v: P0): R;
    welcomeWindowController<R = MSWelcomeWindowController>(): R;
    setWelcomeWindowController<R = void, P0 = MSWelcomeWindowController>(_v: P0): R;
    title<R = NSString>(): R;
    providesPreviewImage<R = boolean>(): R;
    placeholderImage<R = NSImage>(): R;
    URL<R = NSURL>(): R;
  }
  namespace MSWelcomeCollectionItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSWelcomeCollectionItemPreviewImageLoadingProtocol {
      alloc<R = MSWelcomeCollectionItem>(): R;
      new: <R = MSWelcomeCollectionItem>() => R;
      userTemplatesDirectoryURL<R = unknown>(): R;
      bundledTemplatesDirectoryURL<R = unknown>(): R;
    }
  }
}

declare const MSWelcomeCollectionItem: cocoa.MSWelcomeCollectionItem.CLASS;
