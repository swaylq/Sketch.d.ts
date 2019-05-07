/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeWindowController<T0 = void, T1 = void, T2 = void> extends CHWindowController, NSMenuDelegateProtocol, NSWindowDelegateProtocol, MSWelcomeCollectionViewDelegateProtocol {
    cxx_destruct<R = void>(): R;
    scrollViewDidScrollNotification<R = void, P0 = unknown>(_scrollViewDidScrollNotification: P0): R;
    cloudSharesController_didFailLoadingWithError<R = void, P0 = unknown, P1 = unknown>(_cloudSharesController: P0, _didFailLoadingWithError: P1): R;
    cloudSharesController_didFinishLoadingShares<R = void, P0 = unknown, P1 = unknown>(_cloudSharesController: P0, _didFinishLoadingShares: P1): R;
    collectionItems<R = unknown>(): R;
    cloudItems<R = unknown>(): R;
    templateItems<R = unknown>(): R;
    recentDocumentItems<R = unknown>(): R;
    clearRecentDocuments<R = void, P0 = unknown>(_clearRecentDocuments: P0): R;
    revealDocumentInCloud<R = void, P0 = unknown>(_revealDocumentInCloud: P0): R;
    revealDocumentInFinder<R = void, P0 = unknown>(_revealDocumentInFinder: P0): R;
    openTemplateAtURL<R = void, P0 = unknown>(_openTemplateAtURL: P0): R;
    openDocumentAtURL<R = void, P0 = unknown>(_openDocumentAtURL: P0): R;
    requestCloudItems<R = void>(): R;
    joinSketchCloud<R = void, P0 = unknown>(_joinSketchCloud: P0): R;
    visitSketchMirrorPage<R = void, P0 = unknown>(_visitSketchMirrorPage: P0): R;
    subscribeToNewsletter<R = void, P0 = unknown>(_subscribeToNewsletter: P0): R;
    visitPluginsPage<R = void, P0 = unknown>(_visitPluginsPage: P0): R;
    visitLearnPage<R = void, P0 = unknown>(_visitLearnPage: P0): R;
    close<R = void, P0 = unknown>(_close: P0): R;
    confirm<R = void, P0 = unknown>(_confirm: P0): R;
    openDocument<R = void, P0 = unknown>(_openDocument: P0): R;
    refreshScrollability<R = void>(): R;
    shouldEnableCollectionViewScrolling<R = boolean>(): R;
    showCollection<R = void, P0 = number>(_showCollection: P0): R;
    pickCollection<R = void, P0 = unknown>(_pickCollection: P0): R;
    togglePluginsButton<R = void, P0 = boolean>(_togglePluginsButton: P0): R;
    cloudUserDidChange<R = void, P0 = unknown>(_cloudUserDidChange: P0): R;
    clearCaches<R = void>(): R;
    centerWindowIfAppropriate<R = void>(): R;
    updateCollectionSegments<R = void>(): R;
    windowDidLoad<R = void>(): R;
    cloudSharesController<R = MSCloudSharesController>(): R;
    setCloudSharesController<R = void, P0 = MSCloudSharesController>(_v: P0): R;
    cachedTemplateItems<R = NSArray>(): R;
    setCachedTemplateItems<R = void, P0 = NSArray>(_v: P0): R;
    cachedRecentDocumentItems<R = NSArray>(): R;
    setCachedRecentDocumentItems<R = void, P0 = NSArray>(_v: P0): R;
    previewImageCache<R = MSPreviewImageCache>(): R;
    collectionToShow<R = number>(): R;
    setCollectionToShow<R = void, P0 = number>(_v: P0): R;
    versionTextField<R = NSTextField>(): R;
    setVersionTextField<R = void, P0 = NSTextField>(_v: P0): R;
    templatesContextMenu<R = NSMenu>(): R;
    setTemplatesContextMenu<R = void, P0 = NSMenu>(_v: P0): R;
    recentDocumentsContextMenu<R = NSMenu>(): R;
    setRecentDocumentsContextMenu<R = void, P0 = NSMenu>(_v: P0): R;
    pluginsButton<R = MSCallToActionButton>(): R;
    setPluginsButton<R = void, P0 = MSCallToActionButton>(_v: P0): R;
    newsletterButton<R = MSCallToActionButton>(): R;
    setNewsletterButton<R = void, P0 = MSCallToActionButton>(_v: P0): R;
    doNotShowAgainButton<R = NSButton>(): R;
    setDoNotShowAgainButton<R = void, P0 = NSButton>(_v: P0): R;
    confirmButton<R = NSButton>(): R;
    setConfirmButton<R = void, P0 = NSButton>(_v: P0): R;
    collectionsWidthConstraint<R = NSLayoutConstraint>(): R;
    setCollectionsWidthConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
    collectionsSegmentedControl<R = NSSegmentedControl>(): R;
    setCollectionsSegmentedControl<R = void, P0 = NSSegmentedControl>(_v: P0): R;
    collectionStaticContainerView<R = NSView>(): R;
    setCollectionStaticContainerView<R = void, P0 = NSView>(_v: P0): R;
    collectionScrollView<R = NSScrollView>(): R;
    setCollectionScrollView<R = void, P0 = NSScrollView>(_v: P0): R;
    collectionView<R = NSCollectionView>(): R;
    setCollectionView<R = void, P0 = NSCollectionView>(_v: P0): R;
    closeButton<R = NSButton>(): R;
    setCloseButton<R = void, P0 = NSButton>(_v: P0): R;
    numberOfDocuments<R = number>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSWelcomeWindowController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CHWindowController, NSMenuDelegateProtocol, NSWindowDelegateProtocol, MSWelcomeCollectionViewDelegateProtocol {
      alloc<R = MSWelcomeWindowController>(): R;
      new: <R = MSWelcomeWindowController>() => R;
      templateURLsAtDirectoryURL<R = unknown, P0 = unknown>(_templateURLsAtDirectoryURL: P0): R;
      hideWelcomeWindowIfNeeded<R = boolean>(): R;
      showWelcomeWindowIfAppropriate<R = boolean>(): R;
      showWelcomeWindowCollection_isLaunching<R = void, P0 = number, P1 = boolean>(_showWelcomeWindowCollection: P0, _isLaunching: P1): R;
    }
  }
}

declare const MSWelcomeWindowController: cocoa.MSWelcomeWindowController.CLASS;
