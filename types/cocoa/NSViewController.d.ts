/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewController<T0 = void, T1 = void, T2 = void> extends NSResponder, NSExtensionRequestHandlingProtocol, NSNibFinishedLoadingDependentProtocol, NSEditorProtocol, NSSeguePerformingProtocol, NSUserInterfaceItemIdentificationProtocol {
    endAppearanceTransition<R = void>(): R;
    _sendViewDidDisappear<R = void>(): R;
    _sendViewDidAppear<R = void>(): R;
    beginAppearanceTransition<R = void, P0 = boolean>(_beginAppearanceTransition: P0): R;
    _sendViewWillDisappear<R = void>(): R;
    _sendViewWillAppear<R = void>(): R;
    _windowDidOrderOffScreen<R = void>(): R;
    _windowWillOrderOffScreen<R = void>(): R;
    _windowDidOrderOnScreen<R = void>(): R;
    _windowWillOrderOnScreen<R = void>(): R;
    _viewDidMoveToWindow_fromWindow_unhiding<R = void, P0 = unknown, P1 = unknown, P2 = boolean>(__viewDidMoveToWindow: P0, _fromWindow: P1, _unhiding: P2): R;
    _viewWillMoveToWindow_unhiding<R = void, P0 = unknown, P1 = boolean>(__viewWillMoveToWindow: P0, _unhiding: P1): R;
    _viewDidHide<R = void>(): R;
    _viewWillHide<R = void>(): R;
    _viewDidUnhide<R = void>(): R;
    _viewWillUnhide<R = void>(): R;
    _representedObject<R = unknown>(): R;
    _view<R = unknown>(): R;
    _nibWithName_bundle<R = unknown, P0 = unknown, P1 = unknown>(__nibWithName: P0, _bundle: P1): R;
    _findValidNibNameInBundle<R = unknown, P0 = unknown>(__findValidNibNameInBundle: P0): R;
    setConstrainServiceScreenFrameBlock<R = void, P0 = CDUnknownBlockType>(_setConstrainServiceScreenFrameBlock: P0): R;
    constrainServiceScreenFrameBlock<R = CDUnknownBlockType>(): R;
    _setNibName<R = void, P0 = unknown>(__setNibName: P0): R;
    _nibBundleIdentifier<R = unknown>(): R;
    _setNibBundleIdentifier<R = void, P0 = unknown>(__setNibBundleIdentifier: P0): R;
    viewDidLayout<R = void>(): R;
    viewWillLayout<R = void>(): R;
    viewWillTransitionToSize<R = void, P0 = CGSize>(_viewWillTransitionToSize: P0): R;
    _scheduleBridgedServiceLayoutPropertyChange<R = void>(): R;
    _serviceBridgedServiceLayoutPropertyChanges<R = void, P0 = unknown>(__serviceBridgedServiceLayoutPropertyChanges: P0): R;
    updateViewConstraints<R = void>(): R;
    showInParentViewController<R = void>(): R;
    showChildViewController<R = void, P0 = unknown>(_showChildViewController: P0): R;
    willMoveToParentViewController<R = void, P0 = unknown>(_willMoveToParentViewController: P0): R;
    didMoveToParentViewController<R = void, P0 = unknown>(_didMoveToParentViewController: P0): R;
    removeChildViewControllerAtIndex<R = void, P0 = number>(_removeChildViewControllerAtIndex: P0): R;
    insertChildViewController_atIndex<R = void, P0 = unknown, P1 = number>(_insertChildViewController: P0, _atIndex: P1): R;
    removeFromParentViewController<R = void>(): R;
    addChildViewController<R = void, P0 = unknown>(_addChildViewController: P0): R;
    setChildViewControllers<R = void, P0 = unknown>(_setChildViewControllers: P0): R;
    moveChildViewControllerAtIndex_toIndex<R = void, P0 = number, P1 = number>(_moveChildViewControllerAtIndex: P0, _toIndex: P1): R;
    childViewControllers<R = unknown>(): R;
    _setSegueTemplates<R = void, P0 = unknown>(__setSegueTemplates: P0): R;
    _segueTemplates<R = unknown>(): R;
    segueForUnwindingToViewController_fromViewController_identifier<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_segueForUnwindingToViewController: P0, _fromViewController: P1, _identifier: P2): R;
    viewControllerForUnwindSegueAction_fromViewController_withSender<R = unknown, P0 = string, P1 = unknown, P2 = unknown>(_viewControllerForUnwindSegueAction: P0, _fromViewController: P1, _withSender: P2): R;
    canPerformUnwindSegueAction_fromViewController_withSender<R = boolean, P0 = string, P1 = unknown, P2 = unknown>(_canPerformUnwindSegueAction: P0, _fromViewController: P1, _withSender: P2): R;
    setStoryboard<R = void, P0 = unknown>(_setStoryboard: P0): R;
    storyboard<R = unknown>(): R;
    transitionFromViewController_toViewController_options_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = CDUnknownBlockType>(_transitionFromViewController: P0, _toViewController: P1, _options: P2, _completionHandler: P3): R;
    presentViewController_asPopoverRelativeToRect_ofView_preferredEdge_behavior<R = void, P0 = unknown, P1 = CGRect, P2 = unknown, P3 = number, P4 = number>(_presentViewController: P0, _asPopoverRelativeToRect: P1, _ofView: P2, _preferredEdge: P3, _behavior: P4): R;
    presentViewControllerAsModalWindow<R = void, P0 = unknown>(_presentViewControllerAsModalWindow: P0): R;
    presentViewControllerAsSheet<R = void, P0 = unknown>(_presentViewControllerAsSheet: P0): R;
    presentedViewControllerDidChangePreferredContentSize<R = void, P0 = unknown>(_presentedViewControllerDidChangePreferredContentSize: P0): R;
    childViewControllerDidChangePreferredContentSize<R = void, P0 = unknown>(_childViewControllerDidChangePreferredContentSize: P0): R;
    preferredContentSizeDidChangeForViewController<R = void, P0 = unknown>(_preferredContentSizeDidChangeForViewController: P0): R;
    dismissController<R = void, P0 = unknown>(_dismissController: P0): R;
    dismissViewController<R = void, P0 = unknown>(_dismissViewController: P0): R;
    presentViewController_animator<R = void, P0 = unknown, P1 = unknown>(_presentViewController: P0, _animator: P1): R;
    _viewControllerForPresentingViewController<R = unknown, P0 = unknown>(__viewControllerForPresentingViewController: P0): R;
    definesPresentationContext<R = boolean>(): R;
    _removePresentedWindowController<R = void, P0 = unknown>(__removePresentedWindowController: P0): R;
    _addPresentedWindowController<R = void, P0 = unknown>(__addPresentedWindowController: P0): R;
    presentedWindowControllers<R = unknown>(): R;
    _removePresentedViewController<R = void, P0 = unknown>(__removePresentedViewController: P0): R;
    _addPresentedViewController<R = void, P0 = unknown>(__addPresentedViewController: P0): R;
    presentedViewControllers<R = unknown>(): R;
    _autounbinder<R = unknown>(): R;
    _editor_didCommit_withOriginalDelegateInvocation<R = void, P0 = unknown, P1 = boolean, P2 = unknown>(__editor: P0, _didCommit: P1, _withOriginalDelegateInvocation: P2): R;
    _topEditor<R = unknown>(): R;
    objectDidEndEditing<R = void, P0 = unknown>(_objectDidEndEditing: P0): R;
    objectDidBeginEditing<R = void, P0 = unknown>(_objectDidBeginEditing: P0): R;
    viewDidDisappear<R = void>(): R;
    viewWillDisappear<R = void>(): R;
    viewDidAppear<R = void>(): R;
    viewWillAppear<R = void>(): R;
    _insertInResponderChain<R = void>(): R;
    setNextResponder<R = void, P0 = unknown>(_setNextResponder: P0): R;
    _removeFromResponderChain<R = void>(): R;
    viewDidLoad<R = void>(): R;
    loadView<R = void>(): R;
    _makeDefaultView<R = void>(): R;
    _defaultInitialViewFrame<R = CGRect>(): R;
    _setTopLevelObjects<R = void, P0 = unknown>(__setTopLevelObjects: P0): R;
    _loadViewIfRequired<R = void>(): R;
    _isSecondary<R = boolean>(): R;
    _setIsContentViewController<R = void, P0 = boolean>(__setIsContentViewController: P0): R;
    _isContentViewController<R = boolean>(): R;
    _sendViewDidLoad<R = void>(): R;
    _viewControllerSupports10_10Features<R = boolean>(): R;
    _shouldDirtyLayoutOnSizeChanges<R = boolean>(): R;
    _commonPostInit<R = void>(): R;
    initWithNibName_bundle<R = unknown, P0 = unknown, P1 = unknown>(_initWithNibName: P0, _bundle: P1): R;
    maximumSize<R = CGSize>(): R;
    minimumSize<R = CGSize>(): R;
    _extensionContext<R = unknown>(): R;
    _setExtensionContext<R = void, P0 = unknown>(__setExtensionContext: P0): R;
    _windowWillClose<R = void, P0 = unknown>(__windowWillClose: P0): R;
    dismissWindowController<R = void, P0 = unknown>(_dismissWindowController: P0): R;
    presentWindowControllerAsModalWindow<R = void, P0 = unknown>(_presentWindowControllerAsModalWindow: P0): R;
    presentWindowControllerAsSheet<R = void, P0 = unknown>(_presentWindowControllerAsSheet: P0): R;
    _responderDebugDescription<R = unknown>(): R;
    _setApplicationExtensionSession<R = void, P0 = unknown>(__setApplicationExtensionSession: P0): R;
    _applicationExtensionSession<R = unknown>(): R;
    applicationExtensionSession<R = unknown>(): R;
    title<R = NSString>(): R;
    setTitle<R = void, P0 = NSString>(_v: P0): R;
    representedObject<R = unknown>(): R;
    setRepresentedObject<R = void, P0 = unknown>(_v: P0): R;
    preferredContentSize<R = CGSize>(): R;
    setPreferredContentSize<R = void, P0 = CGSize>(_v: P0): R;
    presentationAnimator<R = NSViewControllerPresentationAnimator>(): R;
    setPresentationAnimator<R = void, P0 = NSViewControllerPresentationAnimator>(_v: P0): R;
    presentingViewController<R = NSViewController>(): R;
    setPresentingViewController<R = void, P0 = NSViewController>(_v: P0): R;
    parentViewController<R = NSViewController>(): R;
    setParentViewController<R = void, P0 = NSViewController>(_v: P0): R;
    view<R = NSView>(): R;
    setView<R = void, P0 = NSView>(_v: P0): R;
    nibBundle<R = NSBundle>(): R;
    nibName<R = NSString>(): R;
    viewLoaded<R = boolean>(): R;
    identifier<R = NSString>(): R;
    setIdentifier<R = void, P0 = NSString>(_v: P0): R;
    _nibLoadingDependencies<R = NSArray>(): R;
    preferredMaximumSize<R = CGSize>(): R;
    preferredMinimumSize<R = CGSize>(): R;
    preferredScreenOrigin<R = CGPoint>(): R;
    setPreferredScreenOrigin<R = void, P0 = CGPoint>(_v: P0): R;
    sourceItemView<R = NSView>(): R;
    setSourceItemView<R = void, P0 = NSView>(_v: P0): R;
    extensionContext<R = NSExtensionContext>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    // + NSViewController(BCPopover): 
    presentViewController_asBCPopoverRelativeToView_preferredEdge_screenEdgeBehaviour<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = number>(_presentViewController: P0, _asBCPopoverRelativeToView: P1, _preferredEdge: P2, _screenEdgeBehaviour: P3): R;
    // + NSViewController(Chocolat): 
    ensureLoaded<R = void>(): R;
    rootViewController<R = unknown>(): R;
    targetViewControllerForAction_sender<R = unknown, P0 = string, P1 = unknown>(_targetViewControllerForAction: P0, _sender: P1): R;
    // + NSViewController(MSInspectorController): 
    inspectorController<R = unknown>(): R;
    // + NSViewController(MSInspectorSectionProvider): 
    sections<R = unknown>(): R;
    // + NSViewController(MSNormalInspector): 
    reloadInspectorStack<R = void, P0 = unknown>(_reloadInspectorStack: P0): R;
  }
  namespace NSViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSResponder, NSExtensionRequestHandlingProtocol, NSNibFinishedLoadingDependentProtocol, NSEditorProtocol, NSSeguePerformingProtocol, NSUserInterfaceItemIdentificationProtocol {
      alloc<R = NSViewController>(): R;
      new: <R = NSViewController>() => R;
      requiresConstraintBasedLayout<R = boolean>(): R;
  
  }
  }
}

declare const NSViewController: cocoa.NSViewController.CLASS;
