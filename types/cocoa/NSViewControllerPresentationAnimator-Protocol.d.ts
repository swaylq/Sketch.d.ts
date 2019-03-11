/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewControllerPresentationAnimatorProtocol<T = any> {
    animateDismissalOfViewController_fromViewController<R = void, P0 = cocoa.NSViewController, P1 = cocoa.NSViewController>(_animateDismissalOfViewController: P0, _fromViewController: P1): R;
    animatePresentationOfViewController_fromViewController<R = void, P0 = cocoa.NSViewController, P1 = cocoa.NSViewController>(_animatePresentationOfViewController: P0, _fromViewController: P1): R;
  }
  namespace classes {
    export interface NSViewControllerPresentationAnimatorProtocol<T = any> {  }
  }
}

declare const NSViewControllerPresentationAnimatorProtocol: cocoa.classes.NSViewControllerPresentationAnimatorProtocol;
