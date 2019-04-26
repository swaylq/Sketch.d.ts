/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCorrectionPanel<T0 = void, T1 = void, T2 = void> extends NSPanel {
    accessibilityChildrenInNavigationOrderAttribute<R = unknown>(): R;
    accessibilityChildrenAttribute<R = unknown>(): R;
    accessibilityIsIgnored<R = boolean>(): R;
    dismiss<R = void>(): R;
    dismissAndAccept<R = void, P0 = boolean>(_dismissAndAccept: P0): R;
    _doDismissAndAccept<R = void, P0 = unknown>(__doDismissAndAccept: P0): R;
    _clearLastCorrectionPanel<R = void>(): R;
    _setLastCorrectionPanelExplicitlyAccepted_rejected<R = void, P0 = boolean, P1 = boolean>(__setLastCorrectionPanelExplicitlyAccepted: P0, _rejected: P1): R;
    removeFromWindow<R = void>(): R;
    setSelectedCandidate<R = void, P0 = number>(_setSelectedCandidate: P0): R;
    showPanelAtRect_inView_primaryString_alternativeStrings_forType_completionHandler<R = void, P0 = CGRect, P1 = unknown, P2 = unknown, P3 = unknown, P4 = number, P5 = CDUnknownBlockType>(_showPanelAtRect: P0, _inView: P1, _primaryString: P2, _alternativeStrings: P3, _forType: P4, _completionHandler: P5): R;
    _interceptEvents<R = void>(): R;
    _dismissAndAccept<R = void, P0 = boolean>(__dismissAndAccept: P0): R;
    _updateCorrectionViewForPanelType_inView<R = void, P0 = number, P1 = unknown>(__updateCorrectionViewForPanelType: P0, _inView: P1): R;
    showPanelAtRect_inView_withReplacement_completionHandler<R = void, P0 = CGRect, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_showPanelAtRect: P0, _inView: P1, _withReplacement: P2, _completionHandler: P3): R;
    showPanelAtRect_inView_withReplacement_forType_completionHandler<R = void, P0 = CGRect, P1 = unknown, P2 = unknown, P3 = number, P4 = CDUnknownBlockType>(_showPanelAtRect: P0, _inView: P1, _withReplacement: P2, _forType: P3, _completionHandler: P4): R;
    _adjustLayoutForView<R = void, P0 = unknown>(__adjustLayoutForView: P0): R;
    _shouldCorrectionViewBeAtBottom_highlightRect_inScreenVisibleRect<R = boolean, P0 = number, P1 = CGRect, P2 = CGRect>(__shouldCorrectionViewBeAtBottom: P0, _highlightRect: P1, _inScreenVisibleRect: P2): R;
    _highlightRectForTypedText<R = CGRect, P0 = CGRect>(__highlightRectForTypedText: P0): R;
    _maskImageWithSize<R = unknown, P0 = CGSize>(__maskImageWithSize: P0): R;
    initWithContentRect_backing_defer<R = unknown, P0 = CGRect, P1 = number, P2 = boolean>(_initWithContentRect: P0, _backing: P1, _defer: P2): R;
    dismissedExplicitly<R = boolean>(): R;
    setDismissedExplicitly<R = void, P0 = boolean>(_v: P0): R;
    correctionPanelType<R = number>(): R;
    correction<R = NSString>(): R;
    correctionAttributes<R = NSDictionary>(): R;
    setCorrectionAttributes<R = void, P0 = NSDictionary>(_v: P0): R;
    useDefaultStringAttributes<R = boolean>(): R;
    setUseDefaultStringAttributes<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSCorrectionPanel {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPanel {
      alloc<R = NSCorrectionPanel>(): R;
      new: <R = NSCorrectionPanel>() => R;
      sharedCorrectionPanel<R = unknown>(): R;
    }
  }
}

declare const NSCorrectionPanel: cocoa.NSCorrectionPanel.CLASS;
