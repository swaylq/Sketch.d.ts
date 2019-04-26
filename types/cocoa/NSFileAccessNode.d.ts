/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileAccessNode<T0 = void, T1 = void, T2 = void> extends NSObject {
    subarbiterDescription<R = unknown>(): R;
    sensitiveSubarbiterDescription<R = unknown>(): R;
    description<R = unknown>(): R;
    sensitiveDescription<R = unknown>(): R;
    descriptionWithIndenting_excludingExcessNodes_excludingReactors<R = unknown, P0 = unknown, P1 = boolean, P2 = boolean>(_descriptionWithIndenting: P0, _excludingExcessNodes: P1, _excludingReactors: P2): R;
    _childrenExcludingExcessNodes_excludingReactors<R = unknown, P0 = boolean, P1 = boolean>(__childrenExcludingExcessNodes: P0, _excludingReactors: P1): R;
    _mayContainCriticalDebuggingInformationExcludingReactors<R = boolean, P0 = boolean>(__mayContainCriticalDebuggingInformationExcludingReactors: P0): R;
    assertDescendantsLive<R = void>(): R;
    assertLive<R = void>(): R;
    assertDead<R = void>(): R;
    parent<R = unknown>(): R;
    forEachProgressThingOfItemOrContainedItemPerformProcedure<R = void, P0 = CDUnknownBlockType>(_forEachProgressThingOfItemOrContainedItemPerformProcedure: P0): R;
    forEachProgressSubscriberOfItemOrContainingItemPerformProcedure<R = void, P0 = CDUnknownBlockType>(_forEachProgressSubscriberOfItemOrContainingItemPerformProcedure: P0): R;
    forEachProgressSubscriberOfItemPerformProcedure<R = void, P0 = CDUnknownBlockType>(_forEachProgressSubscriberOfItemPerformProcedure: P0): R;
    forEachProgressPublisherOfItemOrContainedItemPerformProcedure<R = void, P0 = CDUnknownBlockType>(_forEachProgressPublisherOfItemOrContainedItemPerformProcedure: P0): R;
    forEachProgressPublisherOfItemPerformProcedure<R = void, P0 = CDUnknownBlockType>(_forEachProgressPublisherOfItemPerformProcedure: P0): R;
    removeProgressSubscriber<R = void, P0 = unknown>(_removeProgressSubscriber: P0): R;
    addProgressSubscriber<R = void, P0 = unknown>(_addProgressSubscriber: P0): R;
    removeProgressPublisher<R = void, P0 = unknown>(_removeProgressPublisher: P0): R;
    addProgressPublisher<R = void, P0 = unknown>(_addProgressPublisher: P0): R;
    urlOfSubitemAtPath_plusPath<R = unknown, P0 = unknown, P1 = unknown>(_urlOfSubitemAtPath: P0, _plusPath: P1): R;
    standardizedURL<R = unknown>(): R;
    pathExceptPrivate<R = unknown>(): R;
    url<R = unknown>(): R;
    removeAccessClaim<R = void, P0 = unknown>(_removeAccessClaim: P0): R;
    addAccessClaim<R = void, P0 = unknown>(_addAccessClaim: P0): R;
    removeProvider<R = void, P0 = unknown>(_removeProvider: P0): R;
    setProvider<R = boolean, P0 = unknown>(_setProvider: P0): R;
    removePresenter<R = void, P0 = unknown>(_removePresenter: P0): R;
    addPresenter<R = void, P0 = unknown>(_addPresenter: P0): R;
    itemIsInItemAtLocation<R = boolean, P0 = unknown>(_itemIsInItemAtLocation: P0): R;
    itemIsItemAtLocation<R = boolean, P0 = unknown>(_itemIsItemAtLocation: P0): R;
    itemIsSubarbitrable<R = boolean>(): R;
    setArbitrationBoundary<R = void>(): R;
    forEachAccessClaimOnItemOrContainedItemPerformProcedure<R = void, P0 = CDUnknownBlockType>(_forEachAccessClaimOnItemOrContainedItemPerformProcedure: P0): R;
    forEachPresenterOfContainingItemPerformProcedure<R = void, P0 = CDUnknownBlockType>(_forEachPresenterOfContainingItemPerformProcedure: P0): R;
    forEachPresenterOfItemOrContainingItemPerformProcedure<R = void, P0 = CDUnknownBlockType>(_forEachPresenterOfItemOrContainingItemPerformProcedure: P0): R;
    forEachPresenterOfItemOrContainedItemPerformProcedure<R = void, P0 = CDUnknownBlockType>(_forEachPresenterOfItemOrContainedItemPerformProcedure: P0): R;
    forEachPresenterOfContainedItemPerformProcedure<R = void, P0 = CDUnknownBlockType>(_forEachPresenterOfContainedItemPerformProcedure: P0): R;
    forEachPresenterOfItemPerformProcedure<R = void, P0 = CDUnknownBlockType>(_forEachPresenterOfItemPerformProcedure: P0): R;
    forEachPresenterOfContainingFilePackagePerformProcedure<R = void, P0 = CDUnknownBlockType>(_forEachPresenterOfContainingFilePackagePerformProcedure: P0): R;
    itemProvider<R = unknown>(): R;
    forEachReactorToItemOrContainedItemPerformProcedure<R = void, P0 = CDUnknownBlockType>(_forEachReactorToItemOrContainedItemPerformProcedure: P0): R;
    forEachRelevantAccessClaimPerformProcedure<R = void, P0 = CDUnknownBlockType>(_forEachRelevantAccessClaimPerformProcedure: P0): R;
    forEachRelevantAccessClaimForEvaluatingAgainstClaim_performProcedure<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_forEachRelevantAccessClaimForEvaluatingAgainstClaim: P0, _performProcedure: P1): R;
    _forEachRelevantAccessClaimExcludingClaimsFromSuperarbiter_performProcedure<R = void, P0 = boolean, P1 = CDUnknownBlockType>(__forEachRelevantAccessClaimExcludingClaimsFromSuperarbiter: P0, _performProcedure: P1): R;
    forEachAccessClaimOnItemPerformProcedure<R = void, P0 = CDUnknownBlockType>(_forEachAccessClaimOnItemPerformProcedure: P0): R;
    forEachDescendantPerformProcedure<R = void, P0 = CDUnknownBlockType>(_forEachDescendantPerformProcedure: P0): R;
    biggestFilePackageLocation<R = unknown>(): R;
    itemIsFilePackage<R = boolean>(): R;
    setParent_name<R = void, P0 = unknown, P1 = unknown>(_setParent: P0, _name: P1): R;
    pathFromAncestor<R = unknown, P0 = unknown>(_pathFromAncestor: P0): R;
    descendantForFileURL<R = unknown, P0 = unknown>(_descendantForFileURL: P0): R;
    childForRange_ofPath<R = unknown, P0 = _NSRange, P1 = unknown>(_childForRange: P0, _ofPath: P1): R;
    descendantAtPath_componentRange_forAddingLeafNode_create<R = unknown, P0 = unknown, P1 = _NSRange, P2 = unknown, P3 = boolean>(_descendantAtPath: P0, _componentRange: P1, _forAddingLeafNode: P2, _create: P3): R;
    descendantAtPath_componentRange_create<R = unknown, P0 = unknown, P1 = _NSRange, P2 = boolean>(_descendantAtPath: P0, _componentRange: P1, _create: P2): R;
    normalizationOfChildName<R = unknown, P0 = unknown>(_normalizationOfChildName: P0): R;
    removeSelfIfUseless<R = void>(): R;
    removeChildForNormalizedName<R = void, P0 = unknown>(_removeChildForNormalizedName: P0): R;
    setChild_forName_normalizedName<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_setChild: P0, _forName: P1, _normalizedName: P2): R;
    pathToDescendantForFileURL_componentRange<R = unknown, P0 = unknown, P1 = _NSRange>(_pathToDescendantForFileURL: P0, _componentRange: P1): R;
    dealloc<R = void>(): R;
    setSymbolicLinkDestination<R = void, P0 = unknown>(_setSymbolicLinkDestination: P0): R;
    initWithParent_name_normalizedName<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithParent: P0, _name: P1, _normalizedName: P2): R;
  }
  namespace NSFileAccessNode {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSFileAccessNode>(): R;
      new: <R = NSFileAccessNode>() => R;
    }
  }
}

declare const NSFileAccessNode: cocoa.NSFileAccessNode.CLASS;
