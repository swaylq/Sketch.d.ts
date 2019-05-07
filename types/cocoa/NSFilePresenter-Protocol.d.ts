/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilePresenterProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    presentedSubitemAtURL_didResolveConflictVersion<R = void, P0 = NSURL, P1 = NSFileVersion>(_presentedSubitemAtURL: P0, _didResolveConflictVersion: P1): R;
    presentedSubitemAtURL_didLoseVersion<R = void, P0 = NSURL, P1 = NSFileVersion>(_presentedSubitemAtURL: P0, _didLoseVersion: P1): R;
    presentedSubitemAtURL_didGainVersion<R = void, P0 = NSURL, P1 = NSFileVersion>(_presentedSubitemAtURL: P0, _didGainVersion: P1): R;
    presentedSubitemDidChangeAtURL<R = void, P0 = NSURL>(_presentedSubitemDidChangeAtURL: P0): R;
    presentedSubitemAtURL_didMoveToURL<R = void, P0 = NSURL, P1 = NSURL>(_presentedSubitemAtURL: P0, _didMoveToURL: P1): R;
    presentedSubitemDidAppearAtURL<R = void, P0 = NSURL>(_presentedSubitemDidAppearAtURL: P0): R;
    accommodatePresentedSubitemDeletionAtURL_completionHandler<R = void, P0 = NSURL, P1 = CDUnknownBlockType>(_accommodatePresentedSubitemDeletionAtURL: P0, _completionHandler: P1): R;
    presentedItemDidResolveConflictVersion<R = void, P0 = NSFileVersion>(_presentedItemDidResolveConflictVersion: P0): R;
    presentedItemDidLoseVersion<R = void, P0 = NSFileVersion>(_presentedItemDidLoseVersion: P0): R;
    presentedItemDidGainVersion<R = void, P0 = NSFileVersion>(_presentedItemDidGainVersion: P0): R;
    presentedItemDidChangeUbiquityAttributes<R = void, P0 = NSSet>(_presentedItemDidChangeUbiquityAttributes: P0): R;
    presentedItemDidChange<R = void>(): R;
    presentedItemDidMoveToURL<R = void, P0 = NSURL>(_presentedItemDidMoveToURL: P0): R;
    accommodatePresentedItemDeletionWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_accommodatePresentedItemDeletionWithCompletionHandler: P0): R;
    savePresentedItemChangesWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_savePresentedItemChangesWithCompletionHandler: P0): R;
    relinquishPresentedItemToWriter<R = void, P0 = CDUnknownBlockType>(_relinquishPresentedItemToWriter: P0): R;
    relinquishPresentedItemToReader<R = void, P0 = CDUnknownBlockType>(_relinquishPresentedItemToReader: P0): R;
    presentedItemOperationQueue<R = NSOperationQueue>(): R;
    presentedItemURL<R = NSURL>(): R;
    observedPresentedItemUbiquityAttributes<R = NSSet>(): R;
    primaryPresentedItemURL<R = NSURL>(): R;
  }
  namespace NSFilePresenterProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
