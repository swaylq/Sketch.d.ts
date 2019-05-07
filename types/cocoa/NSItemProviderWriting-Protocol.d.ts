/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSItemProviderWritingProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    loadDataWithTypeIdentifier_forItemProviderCompletionHandler<R = NSProgress, P0 = NSString, P1 = CDUnknownBlockType>(_loadDataWithTypeIdentifier: P0, _forItemProviderCompletionHandler: P1): R;
    itemProviderVisibilityForRepresentationWithTypeIdentifier<R = number, P0 = NSString>(_itemProviderVisibilityForRepresentationWithTypeIdentifier: P0): R;
    writableTypeIdentifiersForItemProvider<R = NSArray>(): R;
  }
  namespace NSItemProviderWritingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
      writableTypeIdentifiersForItemProvider<R = NSArray>(): R;
    }
  }
}
