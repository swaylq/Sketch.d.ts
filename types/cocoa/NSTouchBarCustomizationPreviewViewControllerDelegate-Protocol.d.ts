/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewViewControllerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    controller_didSelectSection<R = void, P0 = NSTouchBarCustomizationPreviewViewController, P1 = number>(_controller: P0, _didSelectSection: P1): R;
    controller_didResetBarNode_inItemTree<R = void, P0 = NSTouchBarCustomizationPreviewViewController, P1 = NSTouchBarItemTreeParentNode, P2 = NSTouchBarItemTree>(_controller: P0, _didResetBarNode: P1, _inItemTree: P2): R;
    controller_didUpdateBarNode_inItemTree<R = void, P0 = NSTouchBarCustomizationPreviewViewController, P1 = NSTouchBarItemTreeParentNode, P2 = NSTouchBarItemTree>(_controller: P0, _didUpdateBarNode: P1, _inItemTree: P2): R;
    controller_didRemoveQuickTypeFromBarNode_inItemTree<R = void, P0 = NSTouchBarCustomizationPreviewViewController, P1 = NSTouchBarItemTreeParentNode, P2 = NSTouchBarItemTree>(_controller: P0, _didRemoveQuickTypeFromBarNode: P1, _inItemTree: P2): R;
    controllerDidComplete<R = void, P0 = NSTouchBarCustomizationPreviewViewController>(_controllerDidComplete: P0): R;
  }
  namespace NSTouchBarCustomizationPreviewViewControllerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
