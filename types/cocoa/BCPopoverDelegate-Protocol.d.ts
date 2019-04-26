/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCPopoverDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    popoverShouldTrackSuperviewOfAttachedToView<R = boolean, P0 = BCPopover>(_popoverShouldTrackSuperviewOfAttachedToView: P0): R;
    popoverWillReturnUndoManager<R = NSUndoManager, P0 = BCPopover>(_popoverWillReturnUndoManager: P0): R;
    popoverShouldAnimateOnContentFrameDidChange<R = boolean, P0 = NSNotification>(_popoverShouldAnimateOnContentFrameDidChange: P0): R;
    popoverShouldCauseExistingPopoversToClose<R = boolean, P0 = BCPopover>(_popoverShouldCauseExistingPopoversToClose: P0): R;
    popoverShouldCloseWhenNewPopoverOpens_newPopover<R = boolean, P0 = BCPopover, P1 = BCPopover>(_popoverShouldCloseWhenNewPopoverOpens: P0, _newPopover: P1): R;
    popoverWindowDidMove<R = void, P0 = BCPopover>(_popoverWindowDidMove: P0): R;
    popoverWindowSizeDidChange<R = void, P0 = BCPopover>(_popoverWindowSizeDidChange: P0): R;
    popoverWillClose<R = void, P0 = BCPopover>(_popoverWillClose: P0): R;
    popoverWillShow<R = void, P0 = NSNotification>(_popoverWillShow: P0): R;
    minimumPopoverContentViewHeight<R = number, P0 = BCPopover>(_minimumPopoverContentViewHeight: P0): R;
  }
  namespace BCPopoverDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
