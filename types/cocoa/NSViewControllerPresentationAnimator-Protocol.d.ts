/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewControllerPresentationAnimatorProtocol<T0 = void, T1 = void, T2 = void> {
    animateDismissalOfViewController_fromViewController<R = void, P0 = NSViewController, P1 = NSViewController>(_animateDismissalOfViewController: P0, _fromViewController: P1): R;
    animatePresentationOfViewController_fromViewController<R = void, P0 = NSViewController, P1 = NSViewController>(_animatePresentationOfViewController: P0, _fromViewController: P1): R;
  }
  namespace NSViewControllerPresentationAnimatorProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
