/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCloudSharingService<T0 = void, T1 = void, T2 = void> extends NSSharingService, NSPopoverDelegateProtocol, NSWindowDelegateProtocol {
    _showParticipantListService<R = void>(): R;
    _showInvitationService<R = void>(): R;
    _showParticipantListServiceInSheetAttachedToWindow_withItems<R = void, P0 = unknown, P1 = unknown>(__showParticipantListServiceInSheetAttachedToWindow: P0, _withItems: P1): R;
    _showParticipantListServiceInPopoverWithItems_anchoringView_relativeToRect_preferredEdge<R = void, P0 = unknown, P1 = unknown, P2 = CGRect, P3 = number>(__showParticipantListServiceInPopoverWithItems: P0, _anchoringView: P1, _relativeToRect: P2, _preferredEdge: P3): R;
    _participantListServiceDidFinishWithError<R = void, P0 = unknown>(__participantListServiceDidFinishWithError: P0): R;
    _participantListReceivedAddPeople<R = void>(): R;
    _showAddPeopleServiceForItem_relativeToWindow_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(__showAddPeopleServiceForItem: P0, _relativeToWindow: P1, _completionHandler: P2): R;
    _receivedError<R = void, P0 = unknown>(__receivedError: P0): R;
    _participantListReceivedStopSharing<R = void>(): R;
    _participantListReceivedCancel<R = void>(): R;
    _dismissParticipantList<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _stopObservingViewBridgeChangesForViewController<R = void, P0 = unknown>(__stopObservingViewBridgeChangesForViewController: P0): R;
    _startObservingViewBridgeChangesForViewController<R = void, P0 = unknown>(__startObservingViewBridgeChangesForViewController: P0): R;
    initAsShared<R = unknown, P0 = boolean>(_initAsShared: P0): R;
    item<R = unknown>(): R;
    setItem<R = void, P0 = unknown>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSCloudSharingService {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSharingService, NSPopoverDelegateProtocol, NSWindowDelegateProtocol {
      alloc<R = _NSCloudSharingService>(): R;
      new: <R = _NSCloudSharingService>() => R;
      _matchingItemsFromItems<R = unknown, P0 = unknown>(__matchingItemsFromItems: P0): R;
    }
  }
}
