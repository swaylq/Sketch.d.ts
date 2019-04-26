/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSItemProviderLoadingProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol, NSSecureCodingProtocol {
    loadPreviewImageWithCompletionHandler_expectedValueClass_options<R = void, P0 = CDUnknownBlockType, P1 = unknown, P2 = NSDictionary>(_loadPreviewImageWithCompletionHandler: P0, _expectedValueClass: P1, _options: P2): R;
    loadItemForTypeIdentifier_completionHandler_expectedValueClass_options<R = void, P0 = NSString, P1 = CDUnknownBlockType, P2 = unknown, P3 = NSDictionary>(_loadItemForTypeIdentifier: P0, _completionHandler: P1, _expectedValueClass: P2, _options: P3): R;
  }
  namespace _NSItemProviderLoadingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol, NSSecureCodingProtocol {}
  }
}
