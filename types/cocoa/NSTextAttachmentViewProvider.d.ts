/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextAttachmentViewProvider<T0 = void, T1 = void, T2 = void> {}
  namespace NSTextAttachmentViewProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSTextAttachmentViewProvider(NSTextAttachmentView_UTISupport): 
      textAttachmentViewProviderClassForFileType<R = unknown, P0 = unknown>(_textAttachmentViewProviderClassForFileType: P0): R;
    }
  }
}

declare const NSTextAttachmentViewProvider: cocoa.NSTextAttachmentViewProvider.CLASS;
