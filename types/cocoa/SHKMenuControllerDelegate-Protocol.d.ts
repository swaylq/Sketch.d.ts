/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SHKMenuControllerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    sharingServicePicker_didChooseSharingService<R = void, P0 = SHKSharingServicePicker, P1 = SHKSharingService>(_sharingServicePicker: P0, _didChooseSharingService: P1): R;
    sharingServicePicker_delegateForSharingService<R = SHKSharingServiceDelegate, P0 = SHKSharingServicePicker, P1 = SHKSharingService>(_sharingServicePicker: P0, _delegateForSharingService: P1): R;
    sharingServicePicker_recentSharingServicesForItems_proposedSharingServices<R = NSArray, P0 = SHKSharingServicePicker, P1 = NSArray, P2 = NSArray>(_sharingServicePicker: P0, _recentSharingServicesForItems: P1, _proposedSharingServices: P2): R;
    sharingServicePicker_sharingServicesForItems_mask_proposedSharingServices<R = NSArray, P0 = SHKSharingServicePicker, P1 = NSArray, P2 = number, P3 = NSArray>(_sharingServicePicker: P0, _sharingServicesForItems: P1, _mask: P2, _proposedSharingServices: P3): R;
    sharingServicePicker_sharingServicesForItems_proposedSharingServices<R = NSArray, P0 = SHKSharingServicePicker, P1 = NSArray, P2 = NSArray>(_sharingServicePicker: P0, _sharingServicesForItems: P1, _proposedSharingServices: P2): R;
  }
  namespace SHKMenuControllerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
