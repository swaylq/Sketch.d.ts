/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCloudSharingPanel<T0 = void, T1 = void, T2 = void> extends NSObject {
    beginSheetModalForWindow_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_beginSheetModalForWindow: P0, _completionHandler: P1): R;
    dealloc<R = void>(): R;
    servicesToCustomize<R = NSArray>(): R;
    setServicesToCustomize<R = void, P0 = NSArray>(_v: P0): R;
    documentHasPassword<R = boolean>(): R;
    setDocumentHasPassword<R = void, P0 = boolean>(_v: P0): R;
    shareButtonLabel<R = NSString>(): R;
    setShareButtonLabel<R = void, P0 = NSString>(_v: P0): R;
    secondaryMessageForSharedDocument<R = NSString>(): R;
    setSecondaryMessageForSharedDocument<R = void, P0 = NSString>(_v: P0): R;
    secondaryMessage<R = NSString>(): R;
    setSecondaryMessage<R = void, P0 = NSString>(_v: P0): R;
    primaryMessageTemplateForSharedDocument<R = NSString>(): R;
    setPrimaryMessageTemplateForSharedDocument<R = void, P0 = NSString>(_v: P0): R;
    primaryMessageTemplate<R = NSString>(): R;
    setPrimaryMessageTemplate<R = void, P0 = NSString>(_v: P0): R;
    helpAnchor<R = NSString>(): R;
    setHelpAnchor<R = void, P0 = NSString>(_v: P0): R;
    thumbnailImage<R = NSImage>(): R;
    setThumbnailImage<R = void, P0 = NSImage>(_v: P0): R;
    delegate<R = NSCloudSharingPanelDelegate>(): R;
    setDelegate<R = void, P0 = NSCloudSharingPanelDelegate>(_v: P0): R;
    ubiquitousDocumentURL<R = NSURL>(): R;
    setUbiquitousDocumentURL<R = void, P0 = NSURL>(_v: P0): R;
  }
  namespace NSCloudSharingPanel {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSCloudSharingPanel>(): R;
      new: <R = NSCloudSharingPanel>() => R;
      panel<R = unknown>(): R;
    }
  }
}

declare const NSCloudSharingPanel: cocoa.NSCloudSharingPanel.CLASS;
