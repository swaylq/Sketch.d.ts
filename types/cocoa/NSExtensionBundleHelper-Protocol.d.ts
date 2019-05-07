/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExtensionBundleHelperProtocol<T0 = void, T1 = void, T2 = void> {
    __queryPhotoServiceAuthorizationStatusForPlugInUUID_completion<R = void, P0 = NSUUID, P1 = CDUnknownBlockType>(___queryPhotoServiceAuthorizationStatusForPlugInUUID: P0, _completion: P1): R;
    __localizedInfoDictionaryObjectForKeys_withPlugInUUID_completion<R = void, P0 = NSArray, P1 = NSUUID, P2 = CDUnknownBlockType>(___localizedInfoDictionaryObjectForKeys: P0, _withPlugInUUID: P1, _completion: P2): R;
  }
  namespace NSExtensionBundleHelperProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
