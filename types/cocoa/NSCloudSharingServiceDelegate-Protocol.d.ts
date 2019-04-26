/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCloudSharingServiceDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSSharingServiceDelegateProtocol {
    sharingService_didStopSharing<R = void, P0 = NSSharingService, P1 = CKShare>(_sharingService: P0, _didStopSharing: P1): R;
    sharingService_didSaveShare<R = void, P0 = NSSharingService, P1 = CKShare>(_sharingService: P0, _didSaveShare: P1): R;
    optionsForSharingService_shareProvider<R = number, P0 = NSSharingService, P1 = NSItemProvider>(_optionsForSharingService: P0, _shareProvider: P1): R;
    sharingService_didCompleteForItems_error<R = void, P0 = NSSharingService, P1 = NSArray, P2 = NSError>(_sharingService: P0, _didCompleteForItems: P1, _error: P2): R;
  }
  namespace NSCloudSharingServiceDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSharingServiceDelegateProtocol {}
  }
}
